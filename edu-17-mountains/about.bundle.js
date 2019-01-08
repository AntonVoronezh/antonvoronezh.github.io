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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _menu = __webpack_require__(/*! ./modules/menu */ \"./src/assets/scripts/modules/menu.js\");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nvar _scrollParallax = __webpack_require__(/*! ./modules/scrollParallax */ \"./src/assets/scripts/modules/scrollParallax.js\");\n\nvar _scrollParallax2 = _interopRequireDefault(_scrollParallax);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _menu2.default)();\n\nwindow.addEventListener(\"scroll\", function () {\n  var wScroll = window.pageYOffset;\n\n  (0, _scrollParallax2.default)().init(wScroll);\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwid1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFHQTs7QUFFQUEsT0FBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNwQyxNQUFNQyxVQUFVRixPQUFPRyxXQUF2Qjs7QUFFQSxrQ0FBaUJDLElBQWpCLENBQXNCRixPQUF0QjtBQUNELENBSkgiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0TWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcbmltcG9ydCBzY3JvbGxQYXJhbGxheCBmcm9tIFwiLi9tb2R1bGVzL3Njcm9sbFBhcmFsbGF4XCI7XG5cblxuZ2V0TWVudSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgXG4gICAgc2Nyb2xsUGFyYWxsYXgoKS5pbml0KHdTY3JvbGwpO1xuICB9KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/menu.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = getMenu;\nfunction getMenu() {\n    var button = document.querySelector(\"#nav-icon3\");\n    var overlay = document.querySelector(\".overlay\");\n    var body = document.querySelector(\"body\");\n\n    var makeMenu = function makeMenu() {\n\n        overlay.classList.toggle('overlay-plus');\n\n        setTimeout(function () {\n\n            body.classList.toggle('body');\n        }, 1000);\n    };\n\n    button.addEventListener(\"click\", function () {\n\n        button.classList.toggle(\"open\");\n    });\n\n    button.addEventListener('click', makeMenu);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzP2JiMmYiXSwibmFtZXMiOlsiZ2V0TWVudSIsImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXkiLCJib2R5IiwibWFrZU1lbnUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxPO0FBQVQsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QixRQUFNQyxTQUFTQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxRQUFNQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsUUFBTUUsT0FBT0gsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLFFBQU1HLFdBQVcsU0FBWEEsUUFBVyxHQUFNOztBQUVuQkYsZ0JBQVFHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGNBQXpCOztBQUVBQyxtQkFBVyxZQUFXOztBQUVsQkosaUJBQUtFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixNQUF0QjtBQUVILFNBSkQsRUFJRyxJQUpIO0FBTUgsS0FWRDs7QUFhQVAsV0FBT1MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVzs7QUFFeENULGVBQU9NLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLE1BQXhCO0FBRUQsS0FKSDs7QUFNQVAsV0FBT1MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNKLFFBQWpDO0FBR0giLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWVudSgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWljb24zXCIpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgICBjb25zdCBtYWtlTWVudSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LXBsdXMnKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keScpOyBcclxuXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VNZW51KTtcclxuXHJcbiAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/menu.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/scrollParallax.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/modules/scrollParallax.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = scrollParallax;\nfunction scrollParallax() {\n  var bg = document.querySelector(\".header-wrap\");\n  var title = document.querySelector(\".header__middle-wrap\");\n  var user = document.querySelector(\".card\");\n\n  return {\n    move: function move(block, windowScroll, strafeAmount) {\n      var strafe = windowScroll / -strafeAmount + \"%\";\n      var transformString = \"translate3d(0, \" + strafe + \", 0)\";\n\n      var style = block.style;\n\n      style.transform = transformString;\n      style.webkitTransform = transformString;\n    },\n    init: function init(wScroll) {\n      this.move(bg, wScroll, 255);\n      this.move(title, wScroll, 200);\n      this.move(user, wScroll, -4);\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxQYXJhbGxheC5qcz9mMGM3Il0sIm5hbWVzIjpbInNjcm9sbFBhcmFsbGF4IiwiYmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZSIsInVzZXIiLCJtb3ZlIiwiYmxvY2siLCJ3aW5kb3dTY3JvbGwiLCJzdHJhZmVBbW91bnQiLCJzdHJhZmUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJzdHlsZSIsInRyYW5zZm9ybSIsIndlYmtpdFRyYW5zZm9ybSIsImluaXQiLCJ3U2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBd0JBLGM7QUFBVCxTQUFTQSxjQUFULEdBQTBCO0FBQ3JDLE1BQU1DLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBWDtBQUNBLE1BQU1DLFFBQVFGLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWQ7QUFDQSxNQUFNRSxPQUFPSCxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWI7O0FBRUEsU0FBTztBQUNMRyxVQUFNLGNBQVNDLEtBQVQsRUFBZ0JDLFlBQWhCLEVBQThCQyxZQUE5QixFQUE0QztBQUNoRCxVQUFJQyxTQUFTRixlQUFlLENBQUNDLFlBQWhCLEdBQStCLEdBQTVDO0FBQ0EsVUFBSUUsc0NBQW9DRCxNQUFwQyxTQUFKOztBQUVBLFVBQUlFLFFBQVFMLE1BQU1LLEtBQWxCOztBQUVBQSxZQUFNQyxTQUFOLEdBQWtCRixlQUFsQjtBQUNBQyxZQUFNRSxlQUFOLEdBQXdCSCxlQUF4QjtBQUNELEtBVEk7QUFVTEksVUFBTSxjQUFTQyxPQUFULEVBQWtCO0FBQ3RCLFdBQUtWLElBQUwsQ0FBVUwsRUFBVixFQUFjZSxPQUFkLEVBQXVCLEdBQXZCO0FBQ0EsV0FBS1YsSUFBTCxDQUFVRixLQUFWLEVBQWlCWSxPQUFqQixFQUEwQixHQUExQjtBQUNBLFdBQUtWLElBQUwsQ0FBVUQsSUFBVixFQUFnQlcsT0FBaEIsRUFBeUIsQ0FBQyxDQUExQjtBQUNEO0FBZEksR0FBUDtBQWdCRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3Njcm9sbFBhcmFsbGF4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsUGFyYWxsYXgoKSB7XHJcbiAgICBjb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXdyYXBcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19taWRkbGUtd3JhcFwiKTtcclxuICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb3ZlOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcclxuICAgICAgICBsZXQgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArIFwiJVwiO1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSBgdHJhbnNsYXRlM2QoMCwgJHtzdHJhZmV9LCAwKWA7XHJcbiAgXHJcbiAgICAgICAgbGV0IHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgXHJcbiAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgfSxcclxuICAgICAgaW5pdDogZnVuY3Rpb24od1Njcm9sbCkge1xyXG4gICAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgMjU1KTtcclxuICAgICAgICB0aGlzLm1vdmUodGl0bGUsIHdTY3JvbGwsIDIwMCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIC00KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/scrollParallax.js\n");

/***/ })

/******/ });