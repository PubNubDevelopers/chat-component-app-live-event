webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx ***!
  \***********************************************************************/
/*! exports provided: ComposeMessageBoxWrapper, TextInputWrapper, UserImgWrapper, EmojiInputWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ComposeMessageBoxWrapper\", function() { return ComposeMessageBoxWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextInputWrapper\", function() { return TextInputWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserImgWrapper\", function() { return UserImgWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmojiInputWrapper\", function() { return EmojiInputWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar ComposeMessageBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"ComposeMessageBoxstyles__ComposeMessageBoxWrapper\",\n  componentId: \"sc-1dhdbky-0\"\n})([\"background-color:black;width:200px;height:60px;margin-left:0px;left:0px;top:658px;position:absolute;\"]);\nvar TextInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.withConfig({\n  displayName: \"ComposeMessageBoxstyles__TextInputWrapper\",\n  componentId: \"sc-1dhdbky-1\"\n})([\"margin-top:9px;margin-left:0px;left:55px;top:0px;height:47px;width:260px;border-width:0px;border-radius:230px;background-color:rgba(255,255,255,0.1);color:white;position:absolute;\"]);\nvar UserImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"ComposeMessageBoxstyles__UserImgWrapper\",\n  componentId: \"sc-1dhdbky-2\"\n})([\"margin-top:14px;margin-left:10px;top:0px;height:40px;width:40px;position:absolute;\"]);\nvar EmojiInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"ComposeMessageBoxstyles__EmojiInputWrapper\",\n  componentId: \"sc-1dhdbky-3\"\n})([\"margin-top:14px;margin-left:0px;left:265px;top:2px;height:40px;width:40px;position:absolute;\"]);\n\n//# sourceURL=webpack:///./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx?");

/***/ }),

/***/ "./src/components/MessageList/MessageList.styles.tsx":
/*!***********************************************************!*\
  !*** ./src/components/MessageList/MessageList.styles.tsx ***!
  \***********************************************************/
/*! exports provided: MessageListWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListWrapper\", function() { return MessageListWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar MessageListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"MessageListstyles__MessageListWrapper\",\n  componentId: \"sc-1uvaszp-0\"\n})([\"color:white;display:flex;\"]);\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.styles.tsx?");

/***/ }),

/***/ "./src/components/MessageList/MessageList.tsx":
/*!****************************************************!*\
  !*** ./src/components/MessageList/MessageList.tsx ***!
  \****************************************************/
/*! exports provided: MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageList\", function() { return MessageList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessageList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageList.styles */ \"./src/components/MessageList/MessageList.styles.tsx\");\n\n\nvar MessageList = function MessageList(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageListWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n};\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.tsx?");

/***/ }),

/***/ "./src/components/MessageListPanel/MessageListPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/components/MessageListPanel/MessageListPanel.tsx ***!
  \**************************************************************/
/*! exports provided: UserMessage, MessageListPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserMessage\", function() { return UserMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListPanel\", function() { return MessageListPanel; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ComposeMessageBox/ComposeMessageBox.styles */ \"./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx\");\n/* harmony import */ var _MessageList_MessageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MessageList/MessageList */ \"./src/components/MessageList/MessageList.tsx\");\n\n\n\n\n\nvar UserMessage = function UserMessage(payload) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserMessage);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"name\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"message\", void 0);\n\n  var data = JSON.parse(payload);\n\n  if (!data.name || !data.message) {\n    throw new Error('Invalid message payload received: ' + payload);\n  }\n\n  this.name = data.name;\n  this.message = data.message;\n};\nvar MessageListPanel = function MessageListPanel(props) {\n  //Dumnmy data before connecting to PubNub\n  var messages;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MessageList_MessageList__WEBPACK_IMPORTED_MODULE_4__[\"MessageList\"], {\n    skin: \"\",\n    store: props.store,\n    client: props.client\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"ComposeMessageBoxWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"UserImgWrapper\"], {\n    src: \"/images/hostImage@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextInputWrapper\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmojiInputWrapper\"], {\n    src: \"/images/emojiInput@3x.png\"\n  })));\n};\n\n//# sourceURL=webpack:///./src/components/MessageListPanel/MessageListPanel.tsx?");

/***/ })

})