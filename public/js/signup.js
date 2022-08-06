const nameSignupEl = document.querySelector("#nameSignup")
const userSignupEl = document.querySelector("#usernameSignup")
const passSignupEl = document.querySelector("#passwordSignup")
const signupBtn = document.querySelector("#sign-up")


const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('test')
    const name = nameSignupEl.value.trim();
    const username = userSignupEl.value.trim();
    const password = passSignupEl.value.trim();

    if (username && name && password) {
        console.log(JSON.stringify({ name, username, password }))
        const response = await fetch('/api/user/signup', {
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


signupBtn.addEventListener("click", signupFormHandler)

