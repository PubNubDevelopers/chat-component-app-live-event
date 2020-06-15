webpackHotUpdate("main",{

/***/ "./src/components/LiveFeedPanel/LiveFeedPanel.tsx":
/*!********************************************************!*\
  !*** ./src/components/LiveFeedPanel/LiveFeedPanel.tsx ***!
  \********************************************************/
/*! exports provided: LiveFeedPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveFeedPanel\", function() { return LiveFeedPanel; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jitsi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jitsi */ \"./node_modules/react-jitsi/dist/react-jitsi.esm.js\");\n/* harmony import */ var _LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveFeedPanel.styles */ \"./src/components/LiveFeedPanel/LiveFeedPanel.styles.tsx\");\n\n\n\n\nvar theme = {\n  main: \"mediumseagreen\"\n};\nvar LiveFeedPanel = function LiveFeedPanel(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('eSport: Las Vegas Tournament 2020'),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      displayName = _useState2[0],\n      setDisplayName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('vegas-esport-2020'),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      roomName = _useState4[0],\n      setRoomName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      password = _useState6[0],\n      setPassword = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      loader = _useState8[0],\n      setLoader = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      onCall = _useState10[0],\n      setOnCall = _useState10[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"LiveFeedPanelWrapper\"], null, onCall ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jitsi__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    roomName: roomName,\n    displayName: displayName //password={password}\n    //loadingComponent={loader}\n    ,\n    containerStyle: {\n      width: '100%',\n      height: '100%',\n      //display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], {\n    htmlFor: \"label\"\n  }, \"Label\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    id: \"eventName\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"Message\"], null, \"This is the validation message\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"FormGroup\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"Label\"], null, \"Label 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"Message\"], null, \"This is the validation message\"))), \";\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"Crate your own Event\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Event name\",\n    value: roomName,\n    onChange: function onChange(e) {\n      return setRoomName(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Your name\",\n    value: displayName,\n    onChange: function onChange(e) {\n      return setDisplayName(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setOnCall(true);\n    },\n    type: \"submit\"\n  }, \" Let's start! \")));\n};\n\n//# sourceURL=webpack:///./src/components/LiveFeedPanel/LiveFeedPanel.tsx?");

/***/ })

})