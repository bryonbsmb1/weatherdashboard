const apiKey="d80c128733419c6552a8e47781c43818"

function getOneCallUrl(lon,lat){

    return `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${apiKey}&exclude=minutely,hourly,alerts`



}



function displayHistoryItem(cityName){
    const historyElement=document.querySelector(".history")
    const historyItemElement=document.createElement("li")
    historyItemElement.textContent=(cityName)
    historyElement.appendChild(historyItemElement)
}

function getWeatherInfo(cityName){


    
}
