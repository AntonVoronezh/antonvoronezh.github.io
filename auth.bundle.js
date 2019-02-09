/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/scroll */ \"./src/assets/scripts/modules/scroll.js\");\n\nvar _flip = __webpack_require__(/*! ./modules/flip */ \"./src/assets/scripts/modules/flip.js\");\n\nvar _flip2 = _interopRequireDefault(_flip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(\"auth module loaded\");\n(0, _flip2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7OztBQUNBQSxRQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL3Njcm9sbFwiO1xyXG5pbXBvcnQgZmxpcENhcmQgZnJvbSBcIi4vbW9kdWxlcy9mbGlwXCI7XHJcbmNvbnNvbGUubG9nKFwiYXV0aCBtb2R1bGUgbG9hZGVkXCIpO1xyXG5mbGlwQ2FyZCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/flip.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/flip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = flipCard;\nfunction flipCard() {\n\n    var button = document.querySelectorAll(\".portfolio__block-more\");\n    var flipper = document.querySelectorAll(\".flipper\");\n    var mainPage = document.querySelectorAll(\".portfolio__block-index\");\n\n    button.forEach(function (elem, i) {\n\n        elem.addEventListener('click', function () {\n\n            flipper[i].classList.toggle('flip-active');\n        });\n    });\n\n    mainPage.forEach(function (elem, i) {\n\n        elem.addEventListener('click', function () {\n\n            flipper[i].classList.toggle('flip-active');\n        });\n    });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiZmxpcENhcmQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmbGlwcGVyIiwibWFpblBhZ2UiLCJmb3JFYWNoIiwiZWxlbSIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBd0JBLFE7QUFBVCxTQUFTQSxRQUFULEdBQW9COztBQUUvQixRQUFNQyxTQUFTQyxTQUFTQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBZjtBQUNBLFFBQU1DLFVBQVVGLFNBQVNDLGdCQUFULENBQTBCLFVBQTFCLENBQWhCO0FBQ0EsUUFBTUUsV0FBV0gsU0FBU0MsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWpCOztBQUVBRixXQUFPSyxPQUFQLENBQWUsVUFBQ0MsSUFBRCxFQUFNQyxDQUFOLEVBQVk7O0FBRXZCRCxhQUFLRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFXOztBQUV0Q0wsb0JBQVFJLENBQVIsRUFBV0UsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsYUFBNUI7QUFFSCxTQUpEO0FBTUgsS0FSRDs7QUFVQU4sYUFBU0MsT0FBVCxDQUFpQixVQUFDQyxJQUFELEVBQU1DLENBQU4sRUFBWTs7QUFFekJELGFBQUtFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7O0FBRXRDTCxvQkFBUUksQ0FBUixFQUFXRSxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixhQUE1QjtBQUVILFNBSkQ7QUFNSCxLQVJEO0FBU0giLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxpcENhcmQoKSB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3J0Zm9saW9fX2Jsb2NrLW1vcmVcIik7XHJcbiAgICBjb25zdCBmbGlwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mbGlwcGVyXCIpO1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcnRmb2xpb19fYmxvY2staW5kZXhcIik7XHJcblxyXG4gICAgYnV0dG9uLmZvckVhY2goKGVsZW0saSkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBmbGlwcGVyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXAtYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYWluUGFnZS5mb3JFYWNoKChlbGVtLGkpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgZmxpcHBlcltpXS5jbGFzc0xpc3QudG9nZ2xlKCdmbGlwLWFjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/scroll.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/modules/scroll.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.smoothScrollTo = function () {\n  var timer, start, factor;\n\n  return function (target, duration) {\n    var offset = window.pageYOffset,\n        delta = target - window.pageYOffset; // Y-offset difference\n    duration = duration || 1500; // default 1 sec animation\n    start = Date.now(); // get start time\n    factor = 0;\n\n    if (timer) {\n      clearInterval(timer); // stop any running animations\n    }\n\n    function step() {\n      var y;\n      factor = (Date.now() - start) / duration; // get interpolation factor\n      if (factor >= 1) {\n        clearInterval(timer); // stop animation\n        factor = 1; // clip to max 1.0\n      }\n      y = factor * delta + offset;\n      window.scrollBy(0, y - window.pageYOffset);\n    }\n\n    timer = setInterval(step, 10);\n    return timer;\n  };\n}();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwuanM/ZjllNiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJzbW9vdGhTY3JvbGxUbyIsInRpbWVyIiwic3RhcnQiLCJmYWN0b3IiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsIm9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiZGVsdGEiLCJEYXRlIiwibm93IiwiY2xlYXJJbnRlcnZhbCIsInN0ZXAiLCJ5Iiwic2Nyb2xsQnkiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsY0FBUCxHQUF5QixZQUFZO0FBQ2pDLE1BQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsTUFBbEI7O0FBRUEsU0FBTyxVQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixFQUE0QjtBQUNqQyxRQUFJQyxTQUFTUCxPQUFPUSxXQUFwQjtBQUFBLFFBQ0lDLFFBQVNKLFNBQVNMLE9BQU9RLFdBRDdCLENBRGlDLENBRVM7QUFDMUNGLGVBQVdBLFlBQVksSUFBdkIsQ0FIaUMsQ0FHUztBQUMxQ0gsWUFBUU8sS0FBS0MsR0FBTCxFQUFSLENBSmlDLENBSVM7QUFDMUNQLGFBQVMsQ0FBVDs7QUFFQSxRQUFJRixLQUFKLEVBQVk7QUFDVlUsb0JBQWNWLEtBQWQsRUFEVSxDQUNZO0FBQ3ZCOztBQUVELGFBQVNXLElBQVQsR0FBZ0I7QUFDZCxVQUFJQyxDQUFKO0FBQ0FWLGVBQVMsQ0FBQ00sS0FBS0MsR0FBTCxLQUFhUixLQUFkLElBQXVCRyxRQUFoQyxDQUZjLENBRTRCO0FBQzFDLFVBQUlGLFVBQVUsQ0FBZCxFQUFrQjtBQUNoQlEsc0JBQWNWLEtBQWQsRUFEZ0IsQ0FDTTtBQUN0QkUsaUJBQVMsQ0FBVCxDQUZnQixDQUVNO0FBQ3ZCO0FBQ0RVLFVBQUlWLFNBQVNLLEtBQVQsR0FBaUJGLE1BQXJCO0FBQ0FQLGFBQU9lLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJELElBQUlkLE9BQU9RLFdBQTlCO0FBQ0Q7O0FBRUROLFlBQVFjLFlBQVlILElBQVosRUFBa0IsRUFBbEIsQ0FBUjtBQUNBLFdBQU9YLEtBQVA7QUFDRCxHQXhCRDtBQXlCRCxDQTVCc0IsRUFBekIiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuc21vb3RoU2Nyb2xsVG8gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRpbWVyLCBzdGFydCwgZmFjdG9yO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgZHVyYXRpb24pIHtcclxuICAgICAgdmFyIG9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgICAgIGRlbHRhICA9IHRhcmdldCAtIHdpbmRvdy5wYWdlWU9mZnNldDsgLy8gWS1vZmZzZXQgZGlmZmVyZW5jZVxyXG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDE1MDA7ICAgICAgICAgICAgICAvLyBkZWZhdWx0IDEgc2VjIGFuaW1hdGlvblxyXG4gICAgICBzdGFydCA9IERhdGUubm93KCk7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgc3RhcnQgdGltZVxyXG4gICAgICBmYWN0b3IgPSAwO1xyXG4gICAgICBcclxuICAgICAgaWYoIHRpbWVyICkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpOyAvLyBzdG9wIGFueSBydW5uaW5nIGFuaW1hdGlvbnNcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZnVuY3Rpb24gc3RlcCgpIHtcclxuICAgICAgICB2YXIgeTtcclxuICAgICAgICBmYWN0b3IgPSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSAvIGR1cmF0aW9uOyAvLyBnZXQgaW50ZXJwb2xhdGlvbiBmYWN0b3JcclxuICAgICAgICBpZiggZmFjdG9yID49IDEgKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTsgLy8gc3RvcCBhbmltYXRpb25cclxuICAgICAgICAgIGZhY3RvciA9IDE7ICAgICAgICAgICAvLyBjbGlwIHRvIG1heCAxLjBcclxuICAgICAgICB9IFxyXG4gICAgICAgIHkgPSBmYWN0b3IgKiBkZWx0YSArIG9mZnNldDtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgeSAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoc3RlcCwgMTApO1xyXG4gICAgICByZXR1cm4gdGltZXI7XHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/scroll.js\n");

/***/ })

/******/ });