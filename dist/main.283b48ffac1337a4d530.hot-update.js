webpackHotUpdate("main",{

/***/ "./src/Router.tsx":
/*!************************!*\
  !*** ./src/Router.tsx ***!
  \************************/
/*! exports provided: ApplicationRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApplicationRouter\", function() { return ApplicationRouter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.tsx\");\n/* harmony import */ var _features_authentication_authenticationModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/authentication/authenticationModel */ \"./src/features/authentication/authenticationModel.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_ErrorBanner_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ErrorBanner.style */ \"./src/styles/ErrorBanner.style.tsx\");\n/* harmony import */ var _components_ChatDemo_ChatDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChatDemo/ChatDemo */ \"./src/components/ChatDemo/ChatDemo.tsx\");\n/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login/Login */ \"./src/components/Login/Login.tsx\");\n\n\n\n\n\n\n\nvar ErrorBannerComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ErrorBanner_style__WEBPACK_IMPORTED_MODULE_4__[\"ErrorBanner\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Please run \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, \"npm setup\")));\nvar ApplicationRouter = function ApplicationRouter(props) {\n  var loggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_features_authentication_authenticationModel__WEBPACK_IMPORTED_MODULE_2__[\"isUserLoggedIn\"]);\n  var directToEvent = loggedIn || props.simulate;\n  var view = directToEvent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChatDemo_ChatDemo__WEBPACK_IMPORTED_MODULE_5__[\"ChatDemo\"], {\n    skin: \"\",\n    store: props.store,\n    client: props.client\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_6__[\"Login\"], {\n    simulate: props.simulate\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"], null, view);\n};\n\n//# sourceURL=webpack:///./src/Router.tsx?");

/***/ }),

/***/ "./src/config/pubnub-keys.json":
false,

/***/ "./src/foundations/utilities/isPubNubConfigured.tsx":
false

})