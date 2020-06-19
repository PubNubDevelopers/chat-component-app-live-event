webpackHotUpdate("main",{

/***/ "./src/components/MessageList/MessageList.styles.tsx":
false,

/***/ "./src/components/MessageList/MessageList.tsx":
false,

/***/ "./src/components/MessageListPanel/MessageListPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/components/MessageListPanel/MessageListPanel.tsx ***!
  \**************************************************************/
/*! exports provided: UserMessage, MessageListPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserMessage\", function() { return UserMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListPanel\", function() { return MessageListPanel; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ComposeMessageBox/ComposeMessageBox.styles */ \"./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx\");\n\n\n\n\nvar UserMessage = function UserMessage(payload) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserMessage);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"name\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"message\", void 0);\n\n  var data = JSON.parse(payload);\n\n  if (!data.name || !data.message) {\n    throw new Error('Invalid message payload received: ' + payload);\n  }\n\n  this.name = data.name;\n  this.message = data.message;\n};\nvar MessageListPanel = function MessageListPanel(props) {\n  //Dumnmy data before connecting to PubNub\n  var messages;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"ComposeMessageBoxWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"UserImgWrapper\"], {\n    src: \"/images/hostImage@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextInputWrapper\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmojiInputWrapper\"], {\n    src: \"/images/emojiInput@3x.png\"\n  })));\n};\n\n//# sourceURL=webpack:///./src/components/MessageListPanel/MessageListPanel.tsx?");

/***/ })

})