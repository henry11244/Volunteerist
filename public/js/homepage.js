const categoryFilter = document.querySelector("#categoryFilter");
const locationFilter = document.querySelector("#locationFilter");

// Location filter handler
const locationfilterBtn = document.querySelector("#locationFilter");

const locationFilterHandler = async (event) => {
  event.preventDefault();
  const location = locationFilter.value.trim();
  if (location == 'all') {
    console.log('true')
    document.location.replace(`/`);
  }
  else {

    if (location) {
      const response = await fetch(`/location/${location}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        document.location.replace(`/location/${location}`);
      }
    }
  }
};

locationfilterBtn.addEventListener("change", locationFilterHandler);

// Category filter handler
const categoryfilterBtn = document.querySelector("#categoryFilter");

const categoryFilterHandler = async (event) => {
  event.preventDefault();

  const category = categoryFilter.value.trim();

  console.log(category);
  if (category == 'all') {
    document.location.replace(`/`);
  }
  else {
    if (category) {
      const response = await fetch(`/category/${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        document.location.replace(`/category/${category}`);
      }
    }
  }
};

categoryfilterBtn.addEventListener("change", categoryFilterHandler);

const rsvpButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const event_id = event.target.getAttribute("data-id");
    const user_id = sessionStorage.getItem("userid");

    const response = await fetch(`/api/rsvp/${event_id}`, {
      method: "POST",
      body: JSON.stringify({ user_id }),
      headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/dashboard");
    console.log(response)
  }
};

const rsvpbutton = document.querySelectorAll(".rsvp");
rsvpbutton.forEach((button) => {
  button.addEventListener("click", rsvpButtonHandler);
});
