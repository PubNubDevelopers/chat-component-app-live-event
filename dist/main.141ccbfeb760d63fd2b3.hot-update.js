webpackHotUpdate("main",{

/***/ "./src/components/MessageListPanel/MessageListPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/components/MessageListPanel/MessageListPanel.tsx ***!
  \**************************************************************/
/*! exports provided: MessageListPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListPanel\", function() { return MessageListPanel; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ComposeMessageBox/ComposeMessageBox.styles */ \"./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx\");\n/* harmony import */ var _MessageList_MessageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MessageList/MessageList */ \"./src/components/MessageList/MessageList.tsx\");\n\n\n\nvar MessageListPanel = function MessageListPanel(props) {\n  //Dumnmy data before connecting to PubNub\n  var messages = [];\n  messages.push({});\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList_MessageList__WEBPACK_IMPORTED_MODULE_2__[\"MessageList\"], {\n    messages: messages,\n    skin: \"\",\n    store: props.store,\n    client: props.client\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"ComposeMessageBoxWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"UserImgWrapper\"], {\n    src: \"/images/hostImage@3x.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextInputWrapper\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmojiInputWrapper\"], {\n    src: \"/images/emojiInput@3x.png\"\n  })));\n};\n\n//# sourceURL=webpack:///./src/components/MessageListPanel/MessageListPanel.tsx?");

/***/ })

})