webpackHotUpdate("main",{

/***/ "./src/AppStateContext.tsx":
/*!*********************************!*\
  !*** ./src/AppStateContext.tsx ***!
  \*********************************/
/*! exports provided: AppStateContext, AppStateProvider, useAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateContext\", function() { return AppStateContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateProvider\", function() { return AppStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppState\", function() { return useAppState; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n/* harmony import */ var pubnub__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pubnub__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar PubNub = __webpack_require__(/*! pubnub */ \"./node_modules/pubnub/dist/web/pubnub.min.js\");\n\nvar AppStateContext = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"createContext\"])({});\n\nvar appStateReducer = function appStateReducer(state, action) {\n  switch (action.type) {\n    case \"ADD_MESSAGE\":\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          messages: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(state.messages), [_objectSpread(_objectSpread({}, action.payload), {}, {\n            messages: []\n          })])\n        });\n        /*\n              internalKey: string,\n              key: string,\n              senderId: string,\n              message: string,\n              UserAvatar: string,\n              timetoken: null,\n              senderName: string,\n              dateFormat: string,\n              reactions: null,\n              addMessageReaction: null,\n              addActions: null\n        */\n      }\n\n    case \"SEND_MESSAGE\":\n      {\n        state.pubnub.publish({\n          channel: 'liveeventdemo',\n          message: \"{\\n          \\\"internalKey\\\": \\\"86e41229-37a3-44ac-9979-fe91d49f59be\\\",\\n          \\\"key\\\": \\\"fd856b37-daba-4fef-aaf9-238be310df4a\\\",\\n          \\\"senderId\\\": \\\"bc296603-b349-43de-8574-0a3a9392e30a\\\",\\n          \\\"message\\\": \\\"\".concat(action.payload, \"\\\",\\n          \\\"UserAvatar\\\": \\\"https://robohash.org/ipsaquodeserunt.jpg?size=50x50&set=set1\\\",\\n          \\\"timetoken\\\": \\\"1592439990\\\",\\n          \\\"senderName\\\": \\\"noswick1\\\",\\n          \\\"dateFormat\\\": null,\\n          \\\"reactions\\\": null,\\n          \\\"addMessageReaction\\\": null,\\n          \\\"addActions\\\": null\\n      }\")\n        });\n        return _objectSpread({}, state);\n      }\n\n    case \"ADD_EVENT\":\n      {\n        state.events.events.push({\n          id: pubnub__WEBPACK_IMPORTED_MODULE_6__[\"generateUUID\"].toString(),\n          eventname: action.payload.eventname,\n          eventchannel: action.payload.eventchannel\n        });\n        return _objectSpread({}, state);\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\nvar appData = {\n  simulateLogin: true,\n  users: [],\n  messages: [],\n  events: [],\n  pubnub: new PubNub({\n    publishKey: \"pub-c-9d0ab7cd-fac4-46d4-82b0-c45e46dd4793\",\n    subscribeKey: \"sub-c-419013b0-9953-11ea-9123-e6a08f73ae22\",\n    uuid: pubnub__WEBPACK_IMPORTED_MODULE_6__[\"generateUUID\"].toString()\n  }),\n  defaultchannel: {\n    channels: ['liveeventdemo'],\n    withPresence: true\n  }\n};\nvar AppStateProvider = function AppStateProvider(_ref) {\n  var children = _ref.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useReducer\"])(appStateReducer, appData),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    try {\n      state.pubnub.addListener({\n        message: function message(messageEvent) {\n          console.log(\"RECEIVING MESSAGE \".concat(messageEvent.message));\n          debugger;\n          dispatch({\n            type: \"ADD_MESSAGE\",\n            payload: messageEvent.message\n          });\n        }\n      });\n      state.pubnub.subscribe(state.defaultchannel);\n      state.pubnub.publish({\n        channel: 'liveeventdemo',\n        message: '{\"status\":\"test after subscribe\"}'\n      });\n    } catch (e) {\n      console.log(\"Subscribe error \".concat(e.message));\n    }\n  }, [state.pubnub]);\n  var sendMessage = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(message) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return state.pubnub.publish({\n                channel: 'liveeventdemo',\n                message: message\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [//pubnub, \n    //setInput\n  ]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    return console.log(state.pubnub);\n  }, [state.pubnub]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AppStateContext.Provider, {\n    value: {\n      state: appData\n    }\n  }, children);\n};\nvar useAppState = function useAppState() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useContext\"])(AppStateContext);\n};\n\n//# sourceURL=webpack:///./src/AppStateContext.tsx?");

/***/ })

})