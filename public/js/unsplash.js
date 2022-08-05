fetch(`https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=0jqDAD-zXewS00iMXPqH9-EWmxQwXtr_3FGl5EqT8c0`)
    .then(response => response.json())
    .then(data => {
        errorMessage.style.display = 'none'
        cityPicture = data.results[0].links.download
        console.log(cityPicture);
        var html = document.querySelector('html')
        html.style.backgroundImage = `url("${data.results[0].links.download}")`;
        html.style.backgroundAttachment = "fixed";
        html.style.backgroundSize = "100% 100%";
        localStorageAdd(cityName)
    })