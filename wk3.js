(function $csb$eval(require, module, exports, process, global, __dirname, __filename, $csbImport) {"use strict";

var weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};
var city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  var temperature = weather[city].temp;
  var humidity = weather[city].humidity;
  var celsiusTemperature = Math.round(temperature);
  var fahrenheitTemperature = Math.round(temperature * 9 / 5 + 32);
  alert("It is currently ".concat(celsiusTemperature, "\xB0C (").concat(fahrenheitTemperature, "\xB0F) in ").concat(city, " with a humidity of ").concat(humidity, "%"));
} else {
  alert("Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+".concat(city));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3ZWF0aGVyIiwicGFyaXMiLCJ0ZW1wIiwiaHVtaWRpdHkiLCJ0b2t5byIsImxpc2JvbiIsIm1vc2NvdyIsImNpdHkiLCJwcm9tcHQiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInRlbXBlcmF0dXJlIiwiY2Vsc2l1c1RlbXBlcmF0dXJlIiwiTWF0aCIsInJvdW5kIiwiZmFocmVuaGVpdFRlbXBlcmF0dXJlIiwiYWxlcnQiLCJjb25jYXQiXSwic291cmNlcyI6WyIvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB3ZWF0aGVyID0ge1xuICBwYXJpczoge1xuICAgIHRlbXA6IDE5LjcsXG4gICAgaHVtaWRpdHk6IDgwXG4gIH0sXG4gIHRva3lvOiB7XG4gICAgdGVtcDogMTcuMyxcbiAgICBodW1pZGl0eTogNTBcbiAgfSxcbiAgbGlzYm9uOiB7XG4gICAgdGVtcDogMzAuMixcbiAgICBodW1pZGl0eTogMjBcbiAgfSxcbiAgXCJzYW4gZnJhbmNpc2NvXCI6IHtcbiAgICB0ZW1wOiAyMC45LFxuICAgIGh1bWlkaXR5OiAxMDBcbiAgfSxcbiAgbW9zY293OiB7XG4gICAgdGVtcDogLTUsXG4gICAgaHVtaWRpdHk6IDIwXG4gIH1cbn07XG5cbmxldCBjaXR5ID0gcHJvbXB0KFwiRW50ZXIgYSBjaXR5P1wiKTtcbmNpdHkgPSBjaXR5LnRvTG93ZXJDYXNlKCk7XG5pZiAod2VhdGhlcltjaXR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gIGxldCB0ZW1wZXJhdHVyZSA9IHdlYXRoZXJbY2l0eV0udGVtcDtcbiAgbGV0IGh1bWlkaXR5ID0gd2VhdGhlcltjaXR5XS5odW1pZGl0eTtcbiAgbGV0IGNlbHNpdXNUZW1wZXJhdHVyZSA9IE1hdGgucm91bmQodGVtcGVyYXR1cmUpO1xuICBsZXQgZmFocmVuaGVpdFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZCgodGVtcGVyYXR1cmUgKiA5KSAvIDUgKyAzMik7XG5cbiAgYWxlcnQoXG4gICAgYEl0IGlzIGN1cnJlbnRseSAke2NlbHNpdXNUZW1wZXJhdHVyZX3CsEMgKCR7ZmFocmVuaGVpdFRlbXBlcmF0dXJlfcKwRikgaW4gJHtjaXR5fSB3aXRoIGEgaHVtaWRpdHkgb2YgJHtodW1pZGl0eX0lYFxuICApO1xufSBlbHNlIHtcbiAgYWxlcnQoXG4gICAgYFNvcnJ5IHdlIGRvbid0IGtub3cgdGhlIHdlYXRoZXIgZm9yIHRoaXMgY2l0eSwgdHJ5IGdvaW5nIHRvIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9d2VhdGhlciske2NpdHl9YFxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU8sR0FBRztFQUNaQyxLQUFLLEVBQUU7SUFDTEMsSUFBSSxFQUFFLElBQUk7SUFDVkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDTEYsSUFBSSxFQUFFLElBQUk7SUFDVkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNERSxNQUFNLEVBQUU7SUFDTkgsSUFBSSxFQUFFLElBQUk7SUFDVkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNELGVBQWUsRUFBRTtJQUNmRCxJQUFJLEVBQUUsSUFBSTtJQUNWQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RHLE1BQU0sRUFBRTtJQUNOSixJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ1JDLFFBQVEsRUFBRTtFQUNaO0FBQ0YsQ0FBQztBQUVELElBQUlJLElBQUksR0FBR0MsTUFBTSxDQUFDLGVBQWUsQ0FBQztBQUNsQ0QsSUFBSSxHQUFHQSxJQUFJLENBQUNFLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLElBQUlULE9BQU8sQ0FBQ08sSUFBSSxDQUFDLEtBQUtHLFNBQVMsRUFBRTtFQUMvQixJQUFJQyxXQUFXLEdBQUdYLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLENBQUNMLElBQUk7RUFDcEMsSUFBSUMsUUFBUSxHQUFHSCxPQUFPLENBQUNPLElBQUksQ0FBQyxDQUFDSixRQUFRO0VBQ3JDLElBQUlTLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsV0FBVyxDQUFDO0VBQ2hELElBQUlJLHFCQUFxQixHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBRUgsV0FBVyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0VBRWxFSyxLQUFLLG9CQUFBQyxNQUFBLENBQ2dCTCxrQkFBa0IsYUFBQUssTUFBQSxDQUFPRixxQkFBcUIsZ0JBQUFFLE1BQUEsQ0FBVVYsSUFBSSwwQkFBQVUsTUFBQSxDQUF1QmQsUUFBUSxNQUNoSCxDQUFDO0FBQ0gsQ0FBQyxNQUFNO0VBQ0xhLEtBQUssd0dBQUFDLE1BQUEsQ0FDb0dWLElBQUksQ0FDN0csQ0FBQztBQUNIIn0=
//# sourceURL=https://19wbn.codesandbox.io/src/index.js
})
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
