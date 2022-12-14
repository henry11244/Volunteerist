const userLoginEl = document.querySelector("#usernameLogin");
const passLoginEl = document.querySelector("#passwordLogin");

const loginBtn = document.querySelector("#sign-in");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = userLoginEl.value.trim();
  const password = passLoginEl.value.trim();


  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("userid", data?.user?.id);
      sessionStorage.setItem("loggedin", true);
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

loginBtn.addEventListener("click", loginFormHandler);
