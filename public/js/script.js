const userLoginEl = document.querySelector("#usernameLogin")
const passLoginEl = document.querySelector("#passwordLogin")
const nameSignupEl = document.querySelector("#nameSignup")
const userSignupEl = document.querySelector("#usernameSignup")
const passSignupEl = document.querySelector("#passwordSignup")
const loginBtn = document.querySelector("#sign-in")
const signupBtn = document.querySelector("#sign-up")


const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = userLoginEl.value.trim();
    const password = passLoginEl.value.trim();

    if (username && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = nameSignupEl.value.trim();
    const username = userSignupEl.value.trim();
    const password = passSignupEl.value.trim();

    if (username && email && password) {
        console.log(JSON.stringify({ name, username, password }))
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ name, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};


loginBtn.addEventListener("click", loginFormHandler)
signupBtn.addEventListener("click", signupFormHandler)