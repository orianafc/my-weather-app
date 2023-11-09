function capitalizeEachWord(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function modifedCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let currentCity = document.querySelector("#current-city");
  let currentDetails = document.querySelector("#current-details");
  let currentTemperature = document.querySelector("#current-temperature");
  if (inputCity.value) {
    let inputCityCapitalize = capitalizeEachWord(inputCity.value);
    currentCity.innerHTML = inputCityCapitalize;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityCapitalize}&units=metric`;
    let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  } else {
    currentCity.innerHTML = "Please, enter a city";
  }
}
function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let cityTemperature = document.querySelector("#current-temperature-value");
  cityTemperature.innerHTML = `${temp}`;
  let icon = document.querySelector("#current-temperature-icon");

  if (temp <= 20) {
    icon.innerHTML = `❄️`;
  } else {
    icon.innerHTML = `☀️`;
  }
}

let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("submit", modifedCity);

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

let hour = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hour}:${minutes},`;
