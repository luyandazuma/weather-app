//current day and time
function dayTime(date) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentDayTime = document.querySelector("#current-day-time");
  currentDayTime.innerHTML = `${day} ${hours}:${minutes}`;
}

dayTime();

//eventListener anf function for form submit and
//  cityName is called when form is submitted
function cityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value.trim();
  searchCity(city);
}
let form = document.querySelector("#form-group");
form.addEventListener("submit", cityName);

//connecting to weather API
function searchCity(city) {
  let apiKey = "a3f9ff86f4t0ab9cbe395o06803b6fc9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

//display API response - city name and temperature
function displayTemperature(response) {
  let currentTemp = document.querySelector("#current-temp-value");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);

  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;
}
