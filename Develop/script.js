
// Event listenser search button code










// api call for weather
function fetchCityWeather(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=9bbe868aa95e2e05ff8a18fa3fab1fc7&units=imperial")

    .then(response =>    response.json())
    .then(data => fetchUVIData(data,city))
    .catch((err) => {

        return err;
    })

}