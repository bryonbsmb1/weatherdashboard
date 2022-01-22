
// adding event listener method to the element search button

// searchButton is Element
searchButton.addEventListener("click", function() { if (myStorage.length >=5){searchHistory.removeChild(searchHistory.firstElementChild);}

// fe
// event listener search button
let searchHistoryButton = searchHistory.appendChild
(document.createElement("button"));
fetchCityWeather(city);city= cityInput[0].value.trim();fetchCityWeather(city);

city = cityInput[0].value.trim();
fetchCityWeather(city);
let searchHistoryButton = searchHistory.appendChild(document.createElement("button"));
searchHistoryButton.setAttribute('id', city);
searchHistoryButton.classList.add("btn");
searchHistoryButton.classList.add("btn-secondary");
searchHistoryButton.classList.add("w-100");
searchHistoryButton.classList.add("mt-3");
searchHistoryButton.innerText = city;

myStorage.setItem(city, city);

})
// f
// event listener past search code
    searchHistory.addEventListener("click", function(e)
    {



        fetchCityWeather(e.target.innerText);

    })




// api call for weather
        function fetchCityWeather(city) 
        
       {fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=9bbe868aa95e2e05ff8a18fa3fab1fc7&units=imperial")

                .then(response => response.json())
                .then(data => fetchUVIData(data, city))
                .catch((err) => {

                    return err;
                });
        }

        // call for the API of the UV indexe


        

