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
function search(event) {
  event.preventDefault();
  var cityElement = document.querySelector("#city");
  var cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
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

// Feature #1
var dateElement = document.querySelector("#date");
var currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Feature #2
var searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Bonus Feature
var fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
var celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJjb25jYXQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImRheUluZGV4IiwiZ2V0RGF5IiwiZGF5cyIsImRheSIsInNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjaXR5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNpdHlJbnB1dCIsImlubmVySFRNTCIsInZhbHVlIiwiY29udmVydFRvRmFocmVuaGVpdCIsInRlbXBlcmF0dXJlRWxlbWVudCIsImNvbnZlcnRUb0NlbHNpdXMiLCJkYXRlRWxlbWVudCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsInNlYXJjaEZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZmFocmVuaGVpdExpbmsiLCJjZWxzaXVzTGluayJdLCJzb3VyY2VzIjpbIi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgaWYgKGhvdXJzIDwgMTApIHtcbiAgICBob3VycyA9IGAwJHtob3Vyc31gO1xuICB9XG4gIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIGlmIChtaW51dGVzIDwgMTApIHtcbiAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcbiAgfVxuXG4gIGxldCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG4gIGxldCBkYXlzID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIlxuICBdO1xuICBsZXQgZGF5ID0gZGF5c1tkYXlJbmRleF07XG5cbiAgcmV0dXJuIGAke2RheX0gJHtob3Vyc306JHttaW51dGVzfWA7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG4gIGxldCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHktaW5wdXRcIik7XG4gIGNpdHlFbGVtZW50LmlubmVySFRNTCA9IGNpdHlJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdGVtcGVyYXR1cmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wZXJhdHVyZVwiKTtcbiAgdGVtcGVyYXR1cmVFbGVtZW50LmlubmVySFRNTCA9IDY2O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9DZWxzaXVzKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0ZW1wZXJhdHVyZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBlcmF0dXJlXCIpO1xuICB0ZW1wZXJhdHVyZUVsZW1lbnQuaW5uZXJIVE1MID0gMTk7XG59XG5cbi8vIEZlYXR1cmUgIzFcbmxldCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbmxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5kYXRlRWxlbWVudC5pbm5lckhUTUwgPSBmb3JtYXREYXRlKGN1cnJlbnRUaW1lKTtcblxuLy8gRmVhdHVyZSAjMlxubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1mb3JtXCIpO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNlYXJjaCk7XG5cbi8vIEJvbnVzIEZlYXR1cmVcbmxldCBmYWhyZW5oZWl0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmFocmVuaGVpdC1saW5rXCIpO1xuZmFocmVuaGVpdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnZlcnRUb0ZhaHJlbmhlaXQpO1xuXG5sZXQgY2Vsc2l1c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NlbHNpdXMtbGlua1wiKTtcbmNlbHNpdXNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb252ZXJ0VG9DZWxzaXVzKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxVQUFVQSxDQUFDQyxJQUFJLEVBQUU7RUFDeEIsSUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQyxDQUFDO0VBQzNCLElBQUlELEtBQUssR0FBRyxFQUFFLEVBQUU7SUFDZEEsS0FBSyxPQUFBRSxNQUFBLENBQU9GLEtBQUssQ0FBRTtFQUNyQjtFQUNBLElBQUlHLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQztFQUMvQixJQUFJRCxPQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ2hCQSxPQUFPLE9BQUFELE1BQUEsQ0FBT0MsT0FBTyxDQUFFO0VBQ3pCO0VBRUEsSUFBSUUsUUFBUSxHQUFHTixJQUFJLENBQUNPLE1BQU0sQ0FBQyxDQUFDO0VBQzVCLElBQUlDLElBQUksR0FBRyxDQUNULFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFVBQVUsQ0FDWDtFQUNELElBQUlDLEdBQUcsR0FBR0QsSUFBSSxDQUFDRixRQUFRLENBQUM7RUFFeEIsVUFBQUgsTUFBQSxDQUFVTSxHQUFHLE9BQUFOLE1BQUEsQ0FBSUYsS0FBSyxPQUFBRSxNQUFBLENBQUlDLE9BQU87QUFDbkM7QUFFQSxTQUFTTSxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDckJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDdEIsSUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDakQsSUFBSUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDckRGLFdBQVcsQ0FBQ0ksU0FBUyxHQUFHRCxTQUFTLENBQUNFLEtBQUs7QUFDekM7QUFFQSxTQUFTQyxtQkFBbUJBLENBQUNSLEtBQUssRUFBRTtFQUNsQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixJQUFJUSxrQkFBa0IsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQy9ESyxrQkFBa0IsQ0FBQ0gsU0FBUyxHQUFHLEVBQUU7QUFDbkM7QUFFQSxTQUFTSSxnQkFBZ0JBLENBQUNWLEtBQUssRUFBRTtFQUMvQkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixJQUFJUSxrQkFBa0IsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQy9ESyxrQkFBa0IsQ0FBQ0gsU0FBUyxHQUFHLEVBQUU7QUFDbkM7O0FBRUE7QUFDQSxJQUFJSyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUNqRCxJQUFJUSxXQUFXLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7QUFDNUJGLFdBQVcsQ0FBQ0wsU0FBUyxHQUFHbEIsVUFBVSxDQUFDd0IsV0FBVyxDQUFDOztBQUUvQztBQUNBLElBQUlFLFVBQVUsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3ZEVSxVQUFVLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRWhCLE1BQU0sQ0FBQzs7QUFFN0M7QUFDQSxJQUFJaUIsY0FBYyxHQUFHYixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUMvRFksY0FBYyxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVQLG1CQUFtQixDQUFDO0FBRTdELElBQUlTLFdBQVcsR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ3pEYSxXQUFXLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUwsZ0JBQWdCLENBQUMifQ==
//# sourceURL=https://z2vh5.codesandbox.io/src/index.js
})
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

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
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

// Feature #1
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Feature #2
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Bonus Feature
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
