const apiKey = 'd80c128733419c6552a8e47781c43818'

function getOneCallUrl(lon, lat) {
  return `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${apiKey}&exclude=minutely,hourly,alerts`
}
function getWeatherUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
}

function displayHistoryItem(cityName) {
  const historyElement = document.querySelector('.history')
  const historyItemElement = document.createElement('li')
  historyItemElement.textContent = cityName
  historyElement.appendChild(historyItemElement)
}

async function getWeatherInfo(cityName) {
  const weatherUrl = getWeatherUrl(cityName)
  const weatherResponse = await fetch(weatherUrl)
  const weatherData = await weatherResponse.json()
  const lon = weatherData.coord.lon
  const lat = weatherData.coord.lat

  const oneCallUrl = getOneCallUrl(lon, lat)
  const oneCallResponse = await fetch(oneCallUrl)
  const oneCallData = await oneCallResponse.json()
}
