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

  const iconUrl = `http://openweathermap/org/img/wn/${oneCallData.current.weather.icon}.png`
  const temperature = oneCallData.current.temperature
  const humidity = oneCallData.current.humidity
  const windSpeed = oneCallData.current.wind_speed
  const uvIndex = oneCallData.current.uvi
  const date = new Date().toLocaleDateString()

  document.querySelector('#today-city').textContent = cityName
  document.querySelector('#today-date').textContent = date
  document.querySelector('#today-icon').src = iconUrl
  document.querySelector('#today-temperature').textContent = temperature
  document.querySelector('#today-humidity').textContent = humidity
  document.querySelector('#today-windspeed').textContent = windSpeed
  document.querySelector('#today-uv').textContent = uvIndex
}
