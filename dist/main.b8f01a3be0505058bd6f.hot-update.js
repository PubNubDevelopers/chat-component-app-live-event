webpackHotUpdate("main",{

/***/ "./src/Router.tsx":
/*!************************!*\
  !*** ./src/Router.tsx ***!
  \************************/
/*! exports provided: ApplicationRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApplicationRouter\", function() { return ApplicationRouter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.tsx\");\n/* harmony import */ var _components_ChatDemo_ChatDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChatDemo/ChatDemo */ \"./src/components/ChatDemo/ChatDemo.tsx\");\n/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Login/Login */ \"./src/components/Login/Login.tsx\");\n/* harmony import */ var _liveevents_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liveevents-context */ \"./src/liveevents-context.tsx\");\n/* harmony import */ var _AppStateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppStateContext */ \"./src/AppStateContext.tsx\");\n\n\n\n //import Pubnub from \"pubnub\";\n\n\n\nvar ApplicationRouter = function ApplicationRouter(props) {\n  //This loggedIn variable is used to show the login screen first if the user is not logged in.\n  var _useAppState = Object(_AppStateContext__WEBPACK_IMPORTED_MODULE_5__[\"useAppState\"])(),\n      state = _useAppState.state,\n      dispatch = _useAppState.dispatch;\n\n  var liveEventContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_liveevents_context__WEBPACK_IMPORTED_MODULE_4__[\"LiveEventContext\"]); //view will contain the login screen or chat depending if the user is logged in or not:\n\n  var view = liveEventContext.simulateLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChatDemo_ChatDemo__WEBPACK_IMPORTED_MODULE_2__[\"ChatDemo\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_3__[\"Login\"], null); // We return the view, as defined above, inside the Wrapper element\n  // defined in ./syle\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppStateContext__WEBPACK_IMPORTED_MODULE_5__[\"AppStateProvider\"], null, view));\n};\n\n//# sourceURL=webpack:///./src/Router.tsx?");

/***/ }),

/***/ "./src/config/pubnub-keys.json":
false

})