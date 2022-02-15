"use strict";

var doc = document;
var btn1 = doc.getElementById("js-btn1");
var URL = "https://weather.tsukumijima.net/api/forecast/city/";
var div3 = doc.getElementById("div3");
var btn2 = doc.getElementById("js-btn2");

var HttpFetchAPI = function HttpFetchAPI() {
  var cityId, res, resJson;
  return regeneratorRuntime.async(function HttpFetchAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          cityId = "016010";
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(URL).concat(cityId)));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          resJson = _context.sent;
          console.log("\u5730\u70B9".concat(cityId, " : \u672D\u5E4C\u5E02\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3057\u305F"));
          console.log(resJson);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

btn1.addEventListener("click", HttpFetchAPI);

var displayJsonData = function displayJsonData(resJson) {
  var param1 = doc.createElement("p");
  var param2 = doc.createElement("p");
  var loc = resJson.location;
  var weather = resJson.forecasts[0].detail;
  param1.textContent = "\u5834\u6240 : ".concat(loc.area + " " + loc.city + " " + loc.district);
  div3.appendChild(param1);
  param2.textContent = "\u5929\u6C17 : ".concat(weather.weather);
  div3.appendChild(param2);
  console.log(resJson.location);
};

var displayBody = function displayBody() {
  var cityId, res, resJson;
  return regeneratorRuntime.async(function displayBody$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          cityId = "017010";
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(URL).concat(cityId)));

        case 4:
          res = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          resJson = _context2.sent;
          console.log(resJson);
          displayJsonData(resJson);
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

btn2.addEventListener("click", displayBody);