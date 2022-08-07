
const categoryFilter = document.querySelector("#categoryFilter")
const locationFilter = document.querySelector("#locationFilter")


const locationfilterBtn = document.querySelector("#locationFilter")

const locationFilterHandler = async (event) => {
    event.preventDefault();

    const location = locationFilter.value.trim();

    console.log(location)

    if (location) {
        const response = await fetch(`/location/${location}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        if (response.ok) {
            document.location.replace(`/location/${location}`);
        } else {
            alert(response.statusText);
        }
    }
};

locationfilterBtn.addEventListener("click", locationFilterHandler)


const categoryfilterBtn = document.querySelector("#categoryFilter")

const categoryFilterHandler = async (event) => {
    event.preventDefault();

    const category = categoryFilter.value.trim();

    console.log(category)

    if (location) {
        const response = await fetch(`/category/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
        if (response.ok) {
            document.location.replace(`/category/${category}`);
        } else {
            alert(response.statusText);
        }
    }
};

categoryfilterBtn.addEventListener("click", categoryFilterHandler)

