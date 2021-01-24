import 'regenerator-runtime/runtime';
import { Backend } from "@staticbackend/js";

// We can use any public token when using the dev server
// we're using "dev" as the region indicating we want to use localhost:8099
// as our endpoint which will be handle by our local dev server.
const bkn = new Backend("any-token-in-dev", "dev");

const form = document.forms[0];
form.addEventListener("submit", (e) => { e.preventDefault(); });

// handle login click
const login = document.getElementById("login");
login.addEventListener("click", async (e) => {
	const email = form.email.value;
	const pass = form.password.value;

	const result = await bkn.login(email, pass);
	if (!result.ok) {
		console.error(result.content);
		return;
	}

	sessionStorage.setItem("token", result.content);
	location.href = "/codaborate.html";
});

// handle register click
const register = document.getElementById("register");
register.addEventListener("click", async (e) => {
	const email = form.email.value;
	const pass = form.password.value;

	const result = await bkn.register(email, pass);
	if (!result.ok) {
		console.error(result.content);
		return;
	}

	sessionStorage.setItem("token", result.content);
	location.href = "/codaborate.html";
});