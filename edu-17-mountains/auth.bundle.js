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
eval("\n\nvar _moveParallax = __webpack_require__(/*! ./modules/moveParallax */ \"./src/assets/scripts/modules/moveParallax.js\");\n\nvar _moveParallax2 = _interopRequireDefault(_moveParallax);\n\nvar _flip = __webpack_require__(/*! ./modules/flip */ \"./src/assets/scripts/modules/flip.js\");\n\nvar _flip2 = _interopRequireDefault(_flip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(\"auth module loaded\");\n(0, _moveParallax2.default)();\n(0, _flip2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFFBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZlUGFyYWxsYXggZnJvbSBcIi4vbW9kdWxlcy9tb3ZlUGFyYWxsYXhcIjtcclxuaW1wb3J0IGZsaXBDYXJkIGZyb20gXCIuL21vZHVsZXMvZmxpcFwiO1xyXG5cclxuY29uc29sZS5sb2coXCJhdXRoIG1vZHVsZSBsb2FkZWRcIik7XHJcbm1vdmVQYXJhbGxheCgpO1xyXG5mbGlwQ2FyZCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/flip.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/flip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = flipCard;\nfunction flipCard() {\n\n    var button = document.querySelector(\".btn--welcome\");\n    var flipper = document.querySelector(\".flipper\");\n    var mainPage = document.querySelector(\".btn-card--back\");\n\n    var makeFlip = function makeFlip() {\n\n        flipper.classList.toggle('flip-active');\n    };\n\n    var deleteBtn = function deleteBtn(e) {\n\n        e.preventDefault();\n\n        button.classList.toggle('visually-hidden');\n    };\n\n    button.addEventListener('click', makeFlip);\n    button.addEventListener('click', deleteBtn);\n\n    mainPage.addEventListener('click', makeFlip);\n    mainPage.addEventListener('click', deleteBtn);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiZmxpcENhcmQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmbGlwcGVyIiwibWFpblBhZ2UiLCJtYWtlRmxpcCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRlbGV0ZUJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsUTtBQUFULFNBQVNBLFFBQVQsR0FBb0I7O0FBRS9CLFFBQU1DLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNBLFFBQU1DLFVBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxRQUFNRSxXQUFXSCxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjs7QUFFQSxRQUFNRyxXQUFXLFNBQVhBLFFBQVcsR0FBTTs7QUFFbkJGLGdCQUFRRyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixhQUF6QjtBQUVILEtBSkQ7O0FBTUEsUUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTzs7QUFFckJBLFVBQUVDLGNBQUY7O0FBRUFWLGVBQU9NLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLGlCQUF4QjtBQUVILEtBTkQ7O0FBUUFQLFdBQU9XLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDTixRQUFqQztBQUNBTCxXQUFPVyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0gsU0FBakM7O0FBRUFKLGFBQVNPLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DTixRQUFuQztBQUNBRCxhQUFTTyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0gsU0FBbkM7QUFFSCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2ZsaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmbGlwQ2FyZCgpIHtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0td2VsY29tZVwiKTtcclxuICAgIGNvbnN0IGZsaXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsaXBwZXJcIik7XHJcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhcmQtLWJhY2tcIik7XHJcblxyXG4gICAgY29uc3QgbWFrZUZsaXAgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGZsaXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmxpcC1hY3RpdmUnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUZsaXApO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQnRuKTtcclxuXHJcbiAgICBtYWluUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VGbGlwKTtcclxuICAgIG1haW5QYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQnRuKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/moveParallax.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/modules/moveParallax.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = moveParallax;\nfunction moveParallax() {\n  var parallaxContainer = document.querySelector(\".parallax\");\n  var layers = Array.from(parallaxContainer.children);\n\n  var moveLayers = function moveLayers(e) {\n    var initialX = window.innerWidth / 2 - e.pageX;\n    var initialY = window.innerHeight / 2 - e.pageY;\n\n    layers.forEach(function (layer, i) {\n      var divider = i / 50;\n      var positionX = initialX * divider;\n      var positionY = initialY * divider;\n\n      layer.style.transform = \"translate3d(\" + positionX + \"px, \" + positionY + \"px, 0)\";\n    });\n  };\n\n  window.addEventListener(\"mousemove\", moveLayers);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tb3ZlUGFyYWxsYXguanM/MzUwMCJdLCJuYW1lcyI6WyJtb3ZlUGFyYWxsYXgiLCJwYXJhbGxheENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxheWVycyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwibW92ZUxheWVycyIsImluaXRpYWxYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImUiLCJwYWdlWCIsImluaXRpYWxZIiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsImZvckVhY2giLCJsYXllciIsImkiLCJkaXZpZGVyIiwicG9zaXRpb25YIiwicG9zaXRpb25ZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBd0JBLFk7QUFBVCxTQUFTQSxZQUFULEdBQXdCO0FBQ25DLE1BQU1DLG9CQUFvQkMsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUExQjtBQUNBLE1BQU1DLFNBQVNDLE1BQU1DLElBQU4sQ0FBV0wsa0JBQWtCTSxRQUE3QixDQUFmOztBQUVBLE1BQU1DLGFBQWEsU0FBYkEsVUFBYSxJQUFLO0FBQ3RCLFFBQU1DLFdBQVdDLE9BQU9DLFVBQVAsR0FBb0IsQ0FBcEIsR0FBd0JDLEVBQUVDLEtBQTNDO0FBQ0EsUUFBTUMsV0FBV0osT0FBT0ssV0FBUCxHQUFxQixDQUFyQixHQUF5QkgsRUFBRUksS0FBNUM7O0FBRUFaLFdBQU9hLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMzQixVQUFNQyxVQUFVRCxJQUFJLEVBQXBCO0FBQ0EsVUFBTUUsWUFBWVosV0FBV1csT0FBN0I7QUFDQSxVQUFNRSxZQUFZUixXQUFXTSxPQUE3Qjs7QUFFQUYsWUFBTUssS0FBTixDQUFZQyxTQUFaLG9CQUF1Q0gsU0FBdkMsWUFBdURDLFNBQXZEO0FBQ0QsS0FORDtBQU9ELEdBWEQ7O0FBYUFaLFNBQU9lLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDakIsVUFBckM7QUFDRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL21vdmVQYXJhbGxheC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdmVQYXJhbGxheCgpIHtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheFwiKTtcclxuICAgIGNvbnN0IGxheWVycyA9IEFycmF5LmZyb20ocGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW4pO1xyXG4gIFxyXG4gICAgY29uc3QgbW92ZUxheWVycyA9IGUgPT4ge1xyXG4gICAgICBjb25zdCBpbml0aWFsWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGUucGFnZVg7XHJcbiAgICAgIGNvbnN0IGluaXRpYWxZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGUucGFnZVk7XHJcbiAgXHJcbiAgICAgIGxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSBpIC8gNTA7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuICBcclxuICAgICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvblh9cHgsICR7cG9zaXRpb25ZfXB4LCAwKWA7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVMYXllcnMpO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/moveParallax.js\n");

/***/ })

/******/ });