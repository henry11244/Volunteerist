const categoryFilter = document.querySelector("#categoryFilter");
const locationFilter = document.querySelector("#locationFilter");

// Location filter handler
const locationfilterBtn = document.querySelector("#locationFilter");

const locationFilterHandler = async (event) => {
  event.preventDefault();
  const location = locationFilter.value.trim();

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
};

locationfilterBtn.addEventListener("click", locationFilterHandler);

// Category filter handler
const categoryfilterBtn = document.querySelector("#categoryFilter");

const categoryFilterHandler = async (event) => {
  event.preventDefault();

  const category = categoryFilter.value.trim();


  if (location) {
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
};

categoryfilterBtn.addEventListener("click", categoryFilterHandler);

const rsvpButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const event_id = event.target.getAttribute("data-id");
    const user_id = sessionStorage.getItem("userid");
    const response = await fetch(`/rsvp`, {
      method: "POST",
      body: JSON.stringify({ event_id, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Already registered");
    }
  }
};

const rsvpbutton = document.querySelectorAll(".rsvp");
rsvpbutton.forEach((button) => {
  button.addEventListener("click", rsvpButtonHandler);
});

// Setting number of events per row before new row is created
// var events = document.querySelectorAll(".event")
// var row;

// for(var i = 0; i < events.length; i++) {
//     if(i % 3 == 0 {
//         row = table.insertRow(-1);
//     }
//     var ce
//     )
// }
