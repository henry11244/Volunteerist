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