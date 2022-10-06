// delete events
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const eventId = event.target.getAttribute('data-id');

        const response = await fetch(`/api/event/${eventId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete event');
        }
    }
};

const deletebutton = document.querySelectorAll('.delete')
deletebutton.forEach(button => { button.addEventListener('click', delButtonHandler) });

// delete RSVP
const delRSVPButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const eventId = event.target.getAttribute('data-id');
        const response = await fetch(`/api/rsvp/${eventId}`, {
            method: 'DELETE',
        })
        console.log(response)
        document.location.replace('/dashboard');

    }
};




const deleteRSVPbutton = document.querySelectorAll('.deleteRSVP')
deleteRSVPbutton.forEach(button => { button.addEventListener('click', delRSVPButtonHandler) });

const editFunction = async (event) => {

    const nameEl = document.querySelector("#eventName");
    const dateEl = document.querySelector("#eventDate");
    const timeEl = document.querySelector("#eventTime");
    const locationEl = document.querySelector("#location");
    const categoryEl = document.querySelector("#categories");
    const descriptionEl = document.querySelector("#eventDescription");
    const newEventBtn = document.querySelector("#send");
    const modalTitle = document.querySelector(".modal-title");
    newEventBtn.setAttribute('id', 'edit')
    // newEventBtn.innerHTML('edit')
    const eventId = event.target.getAttribute('data-id');

    const editEventBtn = document.querySelector("#edit");
    editEventBtn.textContent = 'Edit Event'
    modalTitle.textContent = 'Edit Event'

    const editEventHandler = async () => {
        event.preventDefault();

        const name = nameEl.value.trim();
        const date = dateEl.value.trim();
        const time = timeEl.value.trim();
        const category = categoryEl.value.trim();
        const location = locationEl.value.trim();
        const description = descriptionEl.value.trim();

        if (name && date && time && category && location && description) {

            const response = await fetch(`/api/event/${eventId}`, {
                method: "PUT",
                body: JSON.stringify({
                    name,
                    date,
                    time,
                    category,
                    location,
                    description,
                }),
                headers: { "Content-Type": "application/json" },
            });
            console.log(response.ok)
            if (response.ok) {
                document.location.replace("/dashboard");
            } else {
                alert(response.statusText);
            }
        } else if (!name) {
            alert("Event must have a name!");
        } else if (!date) {
            alert("Event must have a date!");
        } else if (!time) {
            alert("Event must have a time!");
        } else if (!category) {
            alert("Event must have a category!");
        } else if (!location) {
            alert("Event must have a location!");
        } else if (!description) {
            alert("Event must have a description!");
        }
    };

    editEventBtn.addEventListener("click", editEventHandler);

}


const editbtn = document.querySelectorAll('.edit')
editbtn.forEach(button => { button.addEventListener('click', editFunction) });



