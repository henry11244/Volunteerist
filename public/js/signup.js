const nameSignupEl = document.querySelector("#nameSignup");
const userSignupEl = document.querySelector("#usernameSignup");
const passSignupEl = document.querySelector("#passwordSignup");
const signupBtn = document.querySelector("#sign-up");

const signupFormHandler = async (event) => {
  event.preventDefault();
  const name = nameSignupEl.value.trim();
  const username = userSignupEl.value.trim();
  const password = passSignupEl.value.trim();

  if (username && name && password) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ name, username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } else if (!name) {
    alert("You must have a name!");
  } else if (!username) {
    alert("Please enter a valid username");
  } else if (!password) {
    alert("Please enter a valid password");
  }
};

signupBtn.addEventListener("click", signupFormHandler);
