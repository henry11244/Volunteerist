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
        const admin_id = 1

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
        }
    };

    newEventBtn.addEventListener("click", newEventHandler)
}

const createbtn = document.querySelector("#createbtn")
createbtn.addEventListener("click", callback)

