webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n@media (prefers-reduced-motion: no-preference) {\\n  .App-logo {\\n    animation: App-logo-spin infinite 20s linear;\\n  }\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n@keyframes App-logo-spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\",\n      function () {\n        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/pubnub-keys.json */ \"./config/pubnub-keys.json\");\nvar _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/pubnub-keys.json */ \"./config/pubnub-keys.json\", 1);\n/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Theme */ \"./src/Theme.ts\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pubnub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ \"./src/Router.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar pubnubConfig = Object.assign({}, {\n  // Ensure that subscriptions will be retained if the network connection is lost\n  restore: true,\n  heartbeatInterval: 0\n}, _config_pubnub_keys_json__WEBPACK_IMPORTED_MODULE_1__);\nvar pubnub = new pubnub__WEBPACK_IMPORTED_MODULE_3___default.a({\n  publishKey: \"pub-c-9d0ab7cd-fac4-46d4-82b0-c45e46dd4793\",\n  subscribeKey: \"sub-c-419013b0-9953-11ea-9123-e6a08f73ae22\",\n  uuid: \"023402340SDFSFS23BBF\"\n});\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"ThemeProvider\"], {\n    theme: _Theme__WEBPACK_IMPORTED_MODULE_2__[\"appTheme\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__[\"ApplicationRouter\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ })

})