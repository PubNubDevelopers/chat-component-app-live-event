webpackHotUpdate("main",{

/***/ "./src/components/Message/Message.styles.tsx":
/*!***************************************************!*\
  !*** ./src/components/Message/Message.styles.tsx ***!
  \***************************************************/
/*! exports provided: MessageWrapper, MessageMessageWrapper, SenderNameWrapper, AvatarWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageWrapper\", function() { return MessageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageMessageWrapper\", function() { return MessageMessageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SenderNameWrapper\", function() { return SenderNameWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AvatarWrapper\", function() { return AvatarWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Messagestyles__MessageWrapper\",\n  componentId: \"sc-1fjtknk-0\"\n})([\"height:100px;width:308px;flex-shrink:0;\"]);\nvar MessageMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"Messagestyles__MessageMessageWrapper\",\n  componentId: \"sc-1fjtknk-1\"\n})([\"top:20px;left:50px;width:90px;height:50px;width:250px;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;text-overflow:ellipsis;overflow-wrap:true white-space:nowrap;\"]);\nvar SenderNameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"Messagestyles__SenderNameWrapper\",\n  componentId: \"sc-1fjtknk-2\"\n})([\"top:5px;left:20px;width:50px;height:30px;width:auto;position:relative;\"]);\nvar AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img.withConfig({\n  displayName: \"Messagestyles__AvatarWrapper\",\n  componentId: \"sc-1fjtknk-3\"\n})([\"top:20px;left:7px;width:52px;height:30px;width:auto;position:relative;\"]);\n\n//# sourceURL=webpack:///./src/components/Message/Message.styles.tsx?");

/***/ }),

/***/ "./src/components/Message/Message.tsx":
/*!********************************************!*\
  !*** ./src/components/Message/Message.tsx ***!
  \********************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Message_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.styles */ \"./src/components/Message/Message.styles.tsx\");\n\n\nvar Message = function Message(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"AvatarWrapper\"], {\n    src: props.message.UserAvatar\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"SenderNameWrapper\"], null, props.message.senderName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageMessageWrapper\"], null, props.message.message));\n};\n\n//# sourceURL=webpack:///./src/components/Message/Message.tsx?");

/***/ })

})