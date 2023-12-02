/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_ApiCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/ApiCity */ "./src/module/ApiCity.js");
/* harmony import */ var _module_addIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/addIcon */ "./src/module/addIcon.js");
/* harmony import */ var _module_toggleClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/toggleClass */ "./src/module/toggleClass.js");
/* harmony import */ var _module_inputFromUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/inputFromUser */ "./src/module/inputFromUser.js");





/***/ }),

/***/ "./src/module/ApiCity.js":
/*!*******************************!*\
  !*** ./src/module/ApiCity.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addIcon */ "./src/module/addIcon.js");

// import addIcon from "./addIcon";

var ApiCity = function ApiCity() {
  // #####################################
  // Section list for cities #############
  //  defaults settings & params
  var sectionList = document.querySelectorAll('.weatherForCity');
  var cities = ['Kaunas', 'Vilnius', 'Alytus', 'Klaipeda'];
  //picking all p for temperature
  var pDegreeEl = document.querySelectorAll('.degree');
  var _loop = function _loop(i) {
    fetch("https://api.meteo.lt/v1/places/".concat(cities[i], "/forecasts/long-term")).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      // console.log("apiCityUTC: ", data.forecastTimestamps);
      var inforByHour = data.forecastTimestamps;
      var firstInfo = inforByHour[0];
      pDegreeEl[i].innerText = data.forecastTimestamps[i].airTemperature;

      // Set information abput city
      sectionList[i].getElementsByTagName("h6")[0].innerText = data.place.name;
      var timeData = firstInfo.forecastTimeUtc.split(" ");
      sectionList[i].getElementsByClassName("time")[0].innerText = timeData[1].slice(0, 5);

      //set text for weather
      var description = sectionList[i].getElementsByClassName("description")[0];

      // set icon for weather all position
      var iconImg = sectionList[i].getElementsByTagName("img")[0];
      (0,_addIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(firstInfo.conditionCode, iconImg, description);
    });
  };
  for (var i = 0; i < cities.length; i++) {
    _loop(i);
  }
};
ApiCity();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiCity);

/***/ }),

/***/ "./src/module/addIcon.js":
/*!*******************************!*\
  !*** ./src/module/addIcon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import ApiCity from "./ApiCity";

//let imgTagEl = document.querySelectorAll('img');

function getWeatherIcon(conditionCode, imgTagEl, description) {
  if (conditionCode == "clear") {
    var clearImg = imgTagEl.src = "css/icons/clear.png";
    description.innerText = 'Giedra';
  } else if (conditionCode == "cloudy-with-sunny-intervals" || conditionCode == "mist") {
    var SunnyIntImg = imgTagEl.src = "css/icons/mist.png";
    description.innerText = 'Debesuota su pragiedruliais';
  } else if (conditionCode == "variable-cloudiness") {
    var variableCloud = imgTagEl.src = "css/icons/mist.png";
    description.innerText = "Nepastoviai debesuota";
  } else if (conditionCode == "isolated-clouds" || conditionCode == "partly-cloudy") {
    var cloudsImg = imgTagEl.src = "css/icons/clouds.png";
    description.innerText = 'Mažai debesuota';
  } else if (conditionCode == "scattered-clouds" || conditionCode == "overcast" || conditionCode == "cloudy") {
    var cloudsOneImg = imgTagEl.src = "css/icons/clouds.png";
    description.innerText = 'Debesuota';
  } else if (conditionCode == "light-rain" || conditionCode == "moderate-rain" || conditionCode == "heavy-rain" || conditionCode == "rain" || conditionCode == "freezing-rain") {
    var drizzleImg = imgTagEl.src = "css/icons/drizzle.png";
    description.innerText = "Numatomas lietus";
  } else if (conditionCode == "rain-showers " || conditionCode == "light-rain-at-times " || conditionCode == "rain-at-times") {
    var _drizzleImg = imgTagEl.src = "css/icons/rain.png";
    description.innerText = "Protarpiais nedidelis lietus";
  } else if (conditionCode == "sleet" || conditionCode == "sleet-at-times" || conditionCode == "sleet-showers" || conditionCode == "light-sleet ") {
    var snowImg = imgTagEl.src = "css/icons/drizzle.png";
    description.innerText = "Šlapdriba";
  } else if (conditionCode == "thunder" || conditionCode == "isolated-thunderstorms" || conditionCode == "thunderstorms ") {
    var _snowImg = imgTagEl.src = "css/icons/isolated-thunderstorms.png";
    description.innerText = "Perkūnija";
  } else if (conditionCode == "fog") {
    var fogImg = imgTagEl.src = "css/icons/drizzle.png";
    description.innerText = 'Rūkas';
  } else if (conditionCode == "snow" || conditionCode == "light-snow" || conditionCode == "snow-showers " || conditionCode == "snow-at-times" || conditionCode == "light-snow-at-times" || conditionCode == "snowstorm") {
    var _snowImg2 = imgTagEl.src = "css/icons/snow.png";
    description.innerText = 'Sniegas';
  } else if (conditionCode == "null") {
    var _snowImg3 = imgTagEl.src = "css/icons/snow.png";
    description.innerText = 'Oro sąlygos nenustatytos';
  } else {
    return "Duomenys dingo:❓";
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherIcon);

/***/ }),

/***/ "./src/module/inputFromUser.js":
/*!*************************************!*\
  !*** ./src/module/inputFromUser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addIcon */ "./src/module/addIcon.js");


//Creating and picking my variables

var inputElm = document.querySelector('.form-control');
var sectionTwoElm = document.querySelector('#show');
var headingCity = document.querySelector('h3');
var sectionWeek = document.querySelectorAll('.weatherForWeek');
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Getting input from the user
inputElm.addEventListener('keyup', setQuery);
var optionElm = document.getElementsByTagName('option');
function setQuery(event) {
  if (inputElm.value.length > 5) {
    for (var a = 0; a < optionElm.length; a++) {
      if (inputElm.value === optionElm[a].value) {
        sectionTwoElm.classList.remove('d-none');
        //sending input to function for data retrieving
        getResults(inputElm.value);
        break;
      } else {
        sectionTwoElm.classList.add('d-none');
      }
    }
  }
}

//using input to display in html data
function getResults(query) {
  var pDegreeElem = document.querySelectorAll('.degreeOne');
  var hDayOfTheWeek = document.querySelectorAll('.day');
  var _loop = function _loop(y) {
    fetch("https://api.meteo.lt/v1/places/".concat(query, "/forecasts/long-term")).then(function (response) {
      return response.json();
    }).then(function (dataOne) {
      //let changeCity =  headingCity.innerText =;
      console.log(dataOne);
      headingCity.innerText = dataOne.place.code.toUpperCase();

      // extracting data for seven days
      var forecast = dataOne.forecastTimestamps;
      var uniqueDays = new Set();
      var temp = [];
      var weekDay = [];
      var conditionForDay = [];
      console.log(conditionForDay);
      forecast.forEach(function (day) {
        var date = new Date(day.forecastTimeUtc);

        //sets day of the week
        var dayOfweek = date.toLocaleDateString('lt-LT', {
          weekday: 'long'
        });

        //filters days by date that duplicates
        if (uniqueDays.has(dayOfweek)) {
          return;
        }

        //adding to list for filtering latter
        uniqueDays.add(dayOfweek);
        var temperature = day.airTemperature;
        temp.push(temperature);
        weekDay.push(dayOfweek);
        var conditionForWeek = day.conditionCode;
        conditionForDay.push(conditionForWeek);
      });

      //  ---------------------------------------

      // sending to html
      pDegreeElem[y].innerText = temp[y];
      hDayOfTheWeek[y].innerText = weekDay[y];

      // set icon for weather for all position
      var iconImgOne = sectionWeek[y].getElementsByTagName("img")[0];
      var test = (0,_addIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(conditionForDay[y], iconImgOne, [,]); //skiping last paramater 
      console.log(conditionForDay);
    });
  };
  for (var y = 0; y < days.length; y++) {
    _loop(y);
  }
}
setQuery();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setQuery);

/***/ }),

/***/ "./src/module/toggleClass.js":
/*!***********************************!*\
  !*** ./src/module/toggleClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var searchEl = document.querySelector('input');
var sectionOneElm = document.querySelector('#hide');
var sectionWeekOne = document.querySelector('#show');
var displayToggle = function displayToggle() {
  searchEl.addEventListener('input', function () {
    if (searchEl.value === '') {
      sectionOneElm.style.display = 'inline';
      sectionWeekOne.style.display = 'd-none';
    } else if (searchEl.value.length == 0) {
      sectionOneElm.style.display = 'inline';
      sectionWeekOne.style.display = 'd-none';
    } else {
      sectionOneElm.style.display = 'none';
    }
  });
};
displayToggle();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayToggle);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweatherappathome"] = self["webpackChunkweatherappathome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;