import 'regenerator-runtime/runtime';
import { Backend } from "@staticbackend/js"

const bkn = new Backend("any-key-in-dev", "dev");

const token = sessionStorage.getItem("token");
// if no token, return to index
if (!token) {
	location.href = "/";
}

// is this the owner of the room
let owner = false;
let currentRoom = "";
let hasControl = false;

// we use this flag to throttle textarea updates
let waitingForPush = false;

// easy reference to div container
const init = document.getElementById("init");
const codaborate = document.getElementById("codaborate");
const title = document.getElementById("title");
const controls = document.getElementById("controls");
const control = document.getElementById("control");
const editing = document.getElementById("editing");
const editor = document.getElementById("editor");
const viewer = document.getElementById("viewer");


// prevent form from refreshing on post
const form = document.forms[0];
form.addEventListener("submit", async (e) => { e.preventDefault(); })

// handle the create button
const create = document.getElementById("create");
create.addEventListener("click", async (e) => {
	const doc = {
		name: form.room.value,
		pin: form.pin.value,
		owner: form.name.value,
		collaborator: "waiting for collaborator to join..."
	}

	// we're using 766 permission which means that:
	// owner: has read, write, execute permissions
	// account user: has read, write
	// authenticated user: has read, write
	// we'll update this room with the name of the collaborator
	// so they have to be able to write and they're not in same account.
	// in a real application, the collaborator could be user in same account 
	// making this more secure. (it's just a sample in here)
	const result = await bkn.create(token, "rooms_766_", doc);
	if (!result) {
		console.error(result.content);
		return;
	}

	owner = true;
	currentRoom = doc.name;

	// we display the control keyboard div for the owner
	controls.classList.remove("hidden");

	showEditor(doc);

	keyboardControl(true);

	initWebSocket();
});

// handle join click
const join = document.getElementById("join");
join.addEventListener("click", async (e) => {
	// let's find if this room exists
	const room = form.room.value;
	const pin = form.pin.value;
	const name = form.name.value;

	const filters = [
		["name", "==", room],
		["pin", "==", pin]
	];

	const qryres = await bkn.query(token, "rooms_766_", filters);
	if (!qryres.ok) {
		console.error(qryres.content);
		return;
	}

	if (qryres.content.total != 1) {
		alert("Invalid room name/pin");
		return;
	}

	const doc = qryres.content.results[0];
	doc.collaborator = name;

	const result = await bkn.update(token, "rooms_766_", doc.id, doc);
	if (!result.ok) {
		console.error(result.content);
		return;
	}

	currentRoom = doc.name;

	showEditor(doc);

	keyboardControl(false);

	initWebSocket();
})


const showEditor = (doc) => {
	title.innerText = `Room: #${doc.name} w/ ${doc.owner} and ${doc.collaborator}`

	init.classList.add("hidden");
	codaborate.classList.remove("hidden");
}

const keyboardControl = (me) => {
	hasControl = me;
	if (me) {
		editing.classList.remove("hidden");
		viewer.classList.add("hidden");

		if (owner) {
			control.innerText = "Give them keyboard control";
		}
	} else {
		viewer.classList.remove("hidden");
		editing.classList.add("hidden");

		if (owner) {
			control.innerText = "Take keyboard control";
		}
	}
}

const onWSAuth = (tok) => {
	console.log("auth, joining ", currentRoom);
	bkn.send(bkn.types.join, currentRoom);

	// for owner to refresh the title when collaborator joins
	if (owner) {
		bkn.send(bkn.types.join, "db-rooms_766_");
	}
}

const onWSMessage = (payload) => {
	console.log("rcvd", payload);

	if (payload.type == bkn.types.joined) {

	} else if (payload.type == bkn.types.chanOut) {
		try {
			let subdata = JSON.parse(payload.data);
			process(subdata);
		} catch (ex) {
			console.error(ex);
		}
	} else if (payload.type == bkn.types.dbUpdated) {
		try {
			let doc = JSON.parse(payload.data);
			showEditor(doc);
		} catch (ex) {
			console.error(ex);
		}
	}
}

const initWebSocket = () => {
	console.log("init SSE connection");
	bkn.connect(token, onWSAuth, onWSMessage);
}

const process = (msg) => {
	if (msg.type == "update") {
		viewer.innerText = msg.content;
	} else if (msg.type == "control") {
		keyboardControl(!hasControl);
	}
}

// when the editor's change we're sending the content to the other 
// person. Of course in a real application we would send only the diff 
// or some kind of chunk. (It's just a sample)
editor.addEventListener("keyup", (e) => {
	if (waitingForPush) {
		return;
	}

	waitingForPush = true;
	setTimeout(() => {
		waitingForPush = false;
		var msg = {
			type: "update",
			content: editor.value
		};
		if (!bkn.send(bkn.types.chanIn, JSON.stringify(msg), currentRoom)) {
			console.error("unable to send message");
		}
	}, 400);
});

// Give them keyboard control or take keyboard control.
control.addEventListener("click", () => {
	var msg = {
		type: "control"
	};
	bkn.send(bkn.types.chanIn, JSON.stringify(msg), currentRoom);
});