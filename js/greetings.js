let loginForm = document.querySelector("#login-form");
let loginInput = document.querySelector("#login-form input");
let greeting = document.querySelector("#greeting");
let logOut = document.querySelector("#log_out");

let HIDDEN_NAME = "hidden";
let USERNAME_KEY = "username";

function out() {
    localStorage.removeItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.remove(HIDDEN_NAME);
    logOut.classList.add(HIDDEN_NAME);
    greeting.classList.add(HIDDEN_NAME);
}

function paintGreetings() {
    greeting.classList.remove(HIDDEN_NAME);
    greeting.innerText = `반갑습니다 ${username} 님🙇‍♀`;

}


function onLoginSubmit(event) {
    // console.log(loginInput.value);
    username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_NAME);
    logOut.classList.remove(HIDDEN_NAME);
    paintGreetings();
    localStorage.getItem(USERNAME_KEY, loginInput.value);
}

function event_listener() {
    loginForm.addEventListener("submit", onLoginSubmit);
    logOut.addEventListener("click", out);
}

function init() {
    event_listener();
}
init();
