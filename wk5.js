function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

(function $csb$eval(require, module, exports, process, global, __dirname, __filename, $csbImport) {"use strict";

function formatDate(date) {
  var hours = date.getHours();
  if (hours < 10) {
    hours = "0".concat(hours);
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }
  var dayIndex = date.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[dayIndex];
  return "".concat(day, " ").concat(hours, ":").concat(minutes);
}
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}
function searchCity(city) {
  var apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  var city = document.querySelector("#city-input").value;
  searchCity(city);
}
function searchLocation(position) {
  var apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(position.coords.latitude, "&lon=").concat(position.coords.longitude, "&appid=").concat(apiKey, "&units=metric");
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function convertToFahrenheit(event) {
  event.preventDefault();
  var temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
function convertToCelsius(event) {
  event.preventDefault();
  var temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
var dateElement = document.querySelector("#date");
var currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
var searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
var currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("New York");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJjb25jYXQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImRheUluZGV4IiwiZ2V0RGF5IiwiZGF5cyIsImRheSIsImRpc3BsYXlXZWF0aGVyQ29uZGl0aW9uIiwicmVzcG9uc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJkYXRhIiwibmFtZSIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJ0ZW1wIiwiaHVtaWRpdHkiLCJ3aW5kIiwic3BlZWQiLCJ3ZWF0aGVyIiwic2VhcmNoQ2l0eSIsImNpdHkiLCJhcGlLZXkiLCJhcGlVcmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJzZWFyY2hMb2NhdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJnZXRDdXJyZW50TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnZlcnRUb0ZhaHJlbmhlaXQiLCJ0ZW1wZXJhdHVyZUVsZW1lbnQiLCJjb252ZXJ0VG9DZWxzaXVzIiwiZGF0ZUVsZW1lbnQiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJzZWFyY2hGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRMb2NhdGlvbkJ1dHRvbiJdLCJzb3VyY2VzIjpbIi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICBob3VycyA9IGAwJHtob3Vyc31gO1xuICB9XG4gIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcbiAgfVxuXG4gIGxldCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG4gIGxldCBkYXlzID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIlxuICBdO1xuICBsZXQgZGF5ID0gZGF5c1tkYXlJbmRleF07XG5cbiAgcmV0dXJuIGAke2RheX0gJHtob3Vyc306JHttaW51dGVzfWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyQ29uZGl0aW9uKHJlc3BvbnNlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKS5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhLm5hbWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGVyYXR1cmVcIikuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChcbiAgICByZXNwb25zZS5kYXRhLm1haW4udGVtcFxuICApO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRpdHlcIikuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YS5tYWluLmh1bWlkaXR5O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmRcIikuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChcbiAgICByZXNwb25zZS5kYXRhLndpbmQuc3BlZWRcbiAgKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS5pbm5lckhUTUwgPVxuICAgIHJlc3BvbnNlLmRhdGEud2VhdGhlclswXS5tYWluO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hDaXR5KGNpdHkpIHtcbiAgbGV0IGFwaUtleSA9IFwiY2FiZGJkYTQwMDM4YmE3ZDExNjViOTUzYjFjN2JkNmNcIjtcbiAgbGV0IGFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPW1ldHJpY2A7XG4gIGF4aW9zLmdldChhcGlVcmwpLnRoZW4oZGlzcGxheVdlYXRoZXJDb25kaXRpb24pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHktaW5wdXRcIikudmFsdWU7XG4gIHNlYXJjaENpdHkoY2l0eSk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKHBvc2l0aW9uKSB7XG4gIGxldCBhcGlLZXkgPSBcImNhYmRiZGE0MDAzOGJhN2QxMTY1Yjk1M2IxYzdiZDZjXCI7XG4gIGxldCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfSZsb249JHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9bWV0cmljYDtcblxuICBheGlvcy5nZXQoYXBpVXJsKS50aGVuKGRpc3BsYXlXZWF0aGVyQ29uZGl0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2VhcmNoTG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0ZW1wZXJhdHVyZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBlcmF0dXJlXCIpO1xuICB0ZW1wZXJhdHVyZUVsZW1lbnQuaW5uZXJIVE1MID0gNjY7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0NlbHNpdXMoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRlbXBlcmF0dXJlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGVyYXR1cmVcIik7XG4gIHRlbXBlcmF0dXJlRWxlbWVudC5pbm5lckhUTUwgPSAxOTtcbn1cblxubGV0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xubGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbmRhdGVFbGVtZW50LmlubmVySFRNTCA9IGZvcm1hdERhdGUoY3VycmVudFRpbWUpO1xuXG5sZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWZvcm1cIik7XG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcblxubGV0IGN1cnJlbnRMb2NhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC1sb2NhdGlvbi1idXR0b25cIik7XG5jdXJyZW50TG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEN1cnJlbnRMb2NhdGlvbik7XG5cbnNlYXJjaENpdHkoXCJOZXcgWW9ya1wiKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxVQUFVQSxDQUFDQyxJQUFJLEVBQUU7RUFDeEIsSUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQyxDQUFDO0VBQzNCLElBQUlELEtBQUssR0FBRyxFQUFFLEVBQUU7SUFDZEEsS0FBSyxPQUFBRSxNQUFBLENBQU9GLEtBQUssQ0FBRTtFQUNyQjtFQUNBLElBQUlHLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQztFQUMvQixJQUFJRCxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ2hCQSxPQUFPLE9BQUFELE1BQUEsQ0FBT0MsT0FBTyxDQUFF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
//# sourceURL=https://zyx7g.codesandbox.io/src/index.js
})