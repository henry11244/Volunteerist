
// for creation of new events through modal
const admin_id = sessionStorage.getItem("userid");

function callback() {
    const nameEl = document.querySelector("#eventName")
    const dateEl = document.querySelector("#eventDate")
    const timeEl = document.querySelector("#eventTime")
    const locationEl = document.querySelector("#location")
    const categoryEl = document.querySelector("#categories")
    const descriptionEl = document.querySelector("#eventDescription")
    const newEventBtn = document.querySelector("#send")

    const newEventHandler = async (event) => {
        event.preventDefault();

        const name = nameEl.value.trim();
        const date = dateEl.value.trim();
        const time = timeEl.value.trim();
        const category = categoryEl.value.trim();
        const location = locationEl.value.trim();
        const description = descriptionEl.value.trim();


        if (name && date && time && category && location && description) {
            const response = await fetch('/api/event/event', {
                method: 'POST',
                body: JSON.stringify({ name, date, time, category, location, description, admin_id }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        } else if (!name) {
            alert("Event must have a name!")
        } else if (!date) {
            alert("Event must have a date!")
        } else if (!time) {
            alert("Event must have a time!")
        } else if (!category) {
            alert("Event must have a category!")
        } else if (!location) {
            alert("Event must have a location!")
        } else if (!description) {
            alert("Event must have a description!")
        }
        
    };

    newEventBtn.addEventListener("click", newEventHandler)
}

const createbtn = document.querySelector("#createbtn")
createbtn.addEventListener("click", callback)

// dashboard view
const dashboard = async (event) => {
    event.preventDefault();

    const response = await fetch('/dashboard', {
        method: 'GET',
        body: JSON.stringify({ admin_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


const dashboardbtn = document.querySelector("#dashboard")
createbtn.addEventListener("click", dashboard)

