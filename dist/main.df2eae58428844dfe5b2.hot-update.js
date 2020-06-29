webpackHotUpdate("main",{

/***/ "./src/components/MessageList/MessageList.tsx":
/*!****************************************************!*\
  !*** ./src/components/MessageList/MessageList.tsx ***!
  \****************************************************/
/*! exports provided: MessageList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageList\", function() { return MessageList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MessageList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageList.styles */ \"./src/components/MessageList/MessageList.styles.tsx\");\n/* harmony import */ var _AppStateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AppStateContext */ \"./src/AppStateContext.tsx\");\n\n //import { Message,UserMessage } from '../Message/Message';\n\n\nvar MessageList = function MessageList(props) {\n  var Messages = Array.from(props.messages).map(function (onemessage) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppStateContext__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], {\n      message: onemessage,\n      key: onemessage.key\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageListWrapper\"], null, Messages);\n};\n\n//# sourceURL=webpack:///./src/components/MessageList/MessageList.tsx?");

/***/ })

})