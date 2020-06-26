webpackHotUpdate("main",{

/***/ "./src/liveevents-context.tsx":
/*!************************************!*\
  !*** ./src/liveevents-context.tsx ***!
  \************************************/
/*! exports provided: LiveEventContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveEventContext\", function() { return LiveEventContext; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar initialState = {\n  eventID: \"0001\",\n  loading: false,\n  error: null,\n  participantsCount: 0,\n  hostName: 'Your name',\n  events: [],\n  pubnubclient: null,\n  pubnubconfig: null,\n  pubnubstore: null,\n  simulateLogin: true\n};\nvar LiveEventContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(initialState);\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case \"ADD_EVENT\":\n      return {\n        events: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.events), [action.payload])\n      };\n    //   case \"DEL_CONTACT\":\n    //     return {\n    //       contacts: state.contacts.filter(\n    //         contact => contact.id !== action.payload\n    //       )\n    //     };\n    //   case \"START\":\n    //     return {\n    //       loading: true\n    //     };\n    //   case \"COMPLETE\":\n    //     return {\n    //       loading: false\n    //     };\n\n    default:\n      throw new Error();\n  }\n}; //   export const LiveEventContextProvider = props => {\n//     const [state, dispatch] = useReducer(reducer, initialState);\n//     return (\n//       <LiveEventContext.Provider value={[state, dispatch]}>\n//         {props.children}\n//       </LiveEventContext.Provider>\n//     );\n//   };\n\n//# sourceURL=webpack:///./src/liveevents-context.tsx?");

/***/ })

})