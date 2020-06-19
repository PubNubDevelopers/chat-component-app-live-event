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

/***/ "./src/components/Message/Message.styles.tsx":
/*!***************************************************!*\
  !*** ./src/components/Message/Message.styles.tsx ***!
  \***************************************************/
/*! exports provided: MessageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageWrapper\", function() { return MessageWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Messagestyles__MessageWrapper\",\n  componentId: \"sc-1fjtknk-0\"\n})([\"display:flex;\"]);\n\n//# sourceURL=webpack:///./src/components/Message/Message.styles.tsx?");

/***/ }),

/***/ "./src/components/Message/Message.tsx":
/*!********************************************!*\
  !*** ./src/components/Message/Message.tsx ***!
  \********************************************/
/*! exports provided: UserMessage, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserMessage\", function() { return UserMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Message_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.styles */ \"./src/components/Message/Message.styles.tsx\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pubnub__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar UserMessage = function UserMessage(payload) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserMessage);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"internalKey\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"key\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"senderId\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"message\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"UserAvatar\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"timetoken\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"senderName\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"dateFormat\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"reactions\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addMessageReaction\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addActions\", void 0);\n\n  this.internalKey = pubnub__WEBPACK_IMPORTED_MODULE_4__[\"generateUUID\"].toString();\n  var data = JSON.parse(payload);\n\n  if (!data.key) {\n    throw new Error('Invalid message payload received: ' + payload);\n  }\n\n  this.message = data.message;\n  this.key = data.key;\n  this.UserAvatar = data.UserAvatar;\n  this.timetoken = data.timetoken;\n  this.senderId = data.senderId;\n  this.senderName = data.senderName;\n  this.dateFormat = data.dateFormat;\n  this.reactions = data.reactions;\n  this.addMessageReaction = data.addMessageReaction;\n  this.addActions = data.addActions;\n};\nvar Message = function Message(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_3__[\"MessageWrapper\"], null, props.message.key, props.message.senderName, props.message.timetoken, props.message.message);\n};\n\n//# sourceURL=webpack:///./src/components/Message/Message.tsx?");

/***/ }),

/***/ "./src/components/MessageList/MessageList.styles.tsx":
/*!***********************************************************!*\
  !*** ./src/components/MessageList/MessageList.styles.tsx ***!
  \***********************************************************/
/*! exports provided: MessageListWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListWrapper\", function() { return MessageListWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar MessageListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"MessageListstyles__MessageListWrapper\",\n  componentId: \"sc-1uvaszp-0\"\n})([\"color:white;flex-direction:column;display:flex;\"]);\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.styles.tsx?");

/***/ }),

/***/ "./src/components/MessageList/MessageList.tsx":
/*!****************************************************!*\
  !*** ./src/components/MessageList/MessageList.tsx ***!
  \****************************************************/
/*! exports provided: MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageList\", function() { return MessageList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessageList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageList.styles */ \"./src/components/MessageList/MessageList.styles.tsx\");\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Message/Message */ \"./src/components/Message/Message.tsx\");\n\n\n\nvar MessageList = function MessageList(props) {\n  var Messages = props.messages.map(function (onemessage, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n      skin: \"\",\n      store: \"\",\n      client: \"\",\n      message: onemessage,\n      key: onemessage.key\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageListWrapper\"], null, Messages);\n};\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.tsx?");

/***/ }),

/***/ "./src/components/MessageListPanel/MessageListPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/components/MessageListPanel/MessageListPanel.tsx ***!
  \**************************************************************/
/*! exports provided: MessageListPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListPanel\", function() { return MessageListPanel; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ComposeMessageBox/ComposeMessageBox.styles */ \"./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx\");\n/* harmony import */ var _MessageList_MessageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MessageList/MessageList */ \"./src/components/MessageList/MessageList.tsx\");\n/* harmony import */ var _sample_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample.json */ \"./src/components/MessageListPanel/sample.json\");\nvar _sample_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./sample.json */ \"./src/components/MessageListPanel/sample.json\", 1);\n\n\n\n\nvar MessageListPanel = function MessageListPanel(props) {\n  //Dumnmy data before connecting to PubNub\n  var messages = _sample_json__WEBPACK_IMPORTED_MODULE_3__; // messages.push(new UserMessage(`{\n  //   \"key\":\"GFTYRH1\", \n  //   \"senderId\":\"\",\n  //   \"message\":\"Incredible!!!\",\n  //   \"UserAvatar\": \"\",\n  //   \"timetoken\": \"\",\n  //   \"senderName\": \"Patricia\",\n  //   \"dateFormat\": \"\",\n  //   \"reactions\": \"\",\n  //   \"addMessageReaction\": \"\",\n  //   \"addActions\": \"\"\n  // }`));\n  //messages.push(new UserMessage(`{\"msgid\":\"DSFDFSF\", \"name\":\"Patricia\",\"message\":\"Incredible!!!\"}`));\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList_MessageList__WEBPACK_IMPORTED_MODULE_2__[\"MessageList\"], {\n    messages: messages,\n    skin: \"\",\n    store: props.store,\n    client: props.client\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"ComposeMessageBoxWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"UserImgWrapper\"], {\n    src: \"/images/hostImage@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextInputWrapper\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmojiInputWrapper\"], {\n    src: \"/images/emojiInput@3x.png\"\n  })));\n};\n\n//# sourceURL=webpack:///./src/components/MessageListPanel/MessageListPanel.tsx?");

/***/ }),

/***/ "./src/components/MessageListPanel/sample.json":
/*!*****************************************************!*\
  !*** ./src/components/MessageListPanel/sample.json ***!
  \*****************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"key\\\":\\\"GFTYRH1\\\",\\\"senderId\\\":\\\"\\\",\\\"message\\\":\\\"Incredible!!!\\\",\\\"UserAvatar\\\":\\\"\\\",\\\"timetoken\\\":\\\"\\\",\\\"senderName\\\":\\\"Patricia\\\",\\\"dateFormat\\\":\\\"\\\",\\\"reactions\\\":\\\"\\\",\\\"addMessageReaction\\\":\\\"\\\",\\\"addActions\\\":\\\"\\\"}]\");\n\n//# sourceURL=webpack:///./src/components/MessageListPanel/sample.json?");

/***/ })

})