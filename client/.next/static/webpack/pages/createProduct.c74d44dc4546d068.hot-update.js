"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createProduct",{

/***/ "./src/components/UI/slider/gallerySlider/GallerySlider.tsx":
/*!******************************************************************!*\
  !*** ./src/components/UI/slider/gallerySlider/GallerySlider.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GallerySlider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ \"./node_modules/@mui/icons-material/KeyboardArrowUp.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UI/slider/gallerySlider/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\iosif\\\\Documents\\\\pet projects\\\\eCommerse\\\\client\\\\src\\\\components\\\\UI\\\\slider\\\\gallerySlider\\\\GallerySlider.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GallerySlider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-340),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      pages = _useState2[0],\n      setPages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      transition = _useState3[0],\n      setTransition = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 2) {\n      setPages([/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 3]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 2]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) - 1])].concat((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children), [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[0]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[1]), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children[2])]));\n      return;\n    }\n\n    setPages((0,C_Users_iosif_Documents_pet_projects_eCommerse_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(children));\n    setOffset;\n  }, [children]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // if (offset === -890) {\n    if (offset === ((pages.length - 3) * 110 + 10) * -1) {\n      setOffset(-340);\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n\n    if (offset === -10) {\n      setOffset(((pages.length - 6) * 110 + 10) * -1); // setOffset(-560)\n\n      setTimeout(function () {\n        setTransition(true);\n      }, 50);\n    }\n  }, [transition]);\n\n  var hendleUpArrowClick = function hendleUpArrowClick() {\n    if (offset !== -120) {\n      setOffset(offset + 110);\n    } else {\n      setOffset(offset + 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  var hendleDownArrowClick = function hendleDownArrowClick() {\n    // if (offset !== -780) {\n    if (offset !== ((pages.length - 4) * 110 + 10) * -1) {\n      setOffset(offset - 110);\n    } else {\n      setOffset(offset - 110);\n      setTimeout(function () {\n        setTransition(false);\n      }, 300);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n    children: [react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onClick: hendleUpArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Window, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Pages, {\n        transition: transition,\n        count: offset,\n        children: pages\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 4\n    }, this), react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onClick: hendleDownArrowClick,\n      sx: {\n        cursor: 'pointer'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }, this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 3\n  }, this);\n}\n\n_s(GallerySlider, \"p1OtW8IqK67rV2x0DImAG6bB7PU=\");\n\n_c = GallerySlider;\n\nvar _c;\n\n$RefreshReg$(_c, \"GallerySlider\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9zbGlkZXIvZ2FsbGVyeVNsaWRlci9HYWxsZXJ5U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNVLGFBQVQsT0FBNEM7RUFBQTs7RUFBQSxJQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztFQUMxRCxnQkFBNEJMLCtDQUFRLENBQUMsQ0FBQyxHQUFGLENBQXBDO0VBQUEsSUFBT00sTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBQ0EsaUJBQTBCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPUSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBb0NULCtDQUFRLENBQUMsSUFBRCxDQUE1QztFQUFBLElBQU9VLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBSUFaLGdEQUFTLENBQUMsWUFBTTtJQUNmLElBQUlGLDJDQUFRLENBQUNlLEtBQVQsQ0FBZVAsUUFBZixJQUEyQixDQUEvQixFQUFrQztNQUNqQ0ksUUFBUSxlQUNQWCxtREFBWSxDQUFDTyxRQUFRLENBQUNSLDJDQUFRLENBQUNlLEtBQVQsQ0FBZVAsUUFBZixJQUEyQixDQUE1QixDQUFULENBREwsZUFFUFAsbURBQVksQ0FBQ08sUUFBUSxDQUFDUiwyQ0FBUSxDQUFDZSxLQUFULENBQWVQLFFBQWYsSUFBMkIsQ0FBNUIsQ0FBVCxDQUZMLGVBR1BQLG1EQUFZLENBQUNPLFFBQVEsQ0FBQ1IsMkNBQVEsQ0FBQ2UsS0FBVCxDQUFlUCxRQUFmLElBQTJCLENBQTVCLENBQVQsQ0FITCwwTEFJSkEsUUFKSSxpQkFLUFAsbURBQVksQ0FBQ08sUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUxMLGVBTVBQLG1EQUFZLENBQUNPLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FOTCxlQU9QUCxtREFBWSxDQUFDTyxRQUFRLENBQUMsQ0FBRCxDQUFULENBUEwsR0FBUjtNQVNBO0lBQ0E7O0lBQ0RJLFFBQVEs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R2FsbGVyeVNsaWRlci50c3g/ODhlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24nXHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyLCBQYWdlcywgV2luZG93IH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG50eXBlIFByb3BzID0geyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnlTbGlkZXIoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xyXG5cdGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgtMzQwKVxyXG5cdGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW3RyYW5zaXRpb24sIHNldFRyYW5zaXRpb25dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDIpIHtcclxuXHRcdFx0c2V0UGFnZXMoW1xyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlbltDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgLSAzXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuW0NoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAtIDJdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pIC0gMV0pLFxyXG5cdFx0XHRcdC4uLmNoaWxkcmVuLFxyXG5cdFx0XHRcdGNsb25lRWxlbWVudChjaGlsZHJlblswXSksXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50KGNoaWxkcmVuWzFdKSxcclxuXHRcdFx0XHRjbG9uZUVsZW1lbnQoY2hpbGRyZW5bMl0pXHJcblx0XHRcdF0pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0c2V0UGFnZXMoWy4uLmNoaWxkcmVuXSlcclxuICAgIHNldE9mZnNldFxyXG5cdH0sIFtjaGlsZHJlbl0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBpZiAob2Zmc2V0ID09PSAtODkwKSB7XHJcblx0XHRpZiAob2Zmc2V0ID09PSAoKHBhZ2VzLmxlbmd0aCAtIDMpICogMTEwICsgMTApICogLTEpIHtcclxuXHRcdFx0c2V0T2Zmc2V0KC0zNDApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblx0XHRpZiAob2Zmc2V0ID09PSAtMTApIHtcclxuXHRcdFx0c2V0T2Zmc2V0KCgocGFnZXMubGVuZ3RoIC0gNikgKiAxMTAgKyAxMCkgKiAtMSlcclxuXHRcdFx0Ly8gc2V0T2Zmc2V0KC01NjApXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNldFRyYW5zaXRpb24odHJ1ZSlcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblx0fSwgW3RyYW5zaXRpb25dKVxyXG5cclxuXHRjb25zdCBoZW5kbGVVcEFycm93Q2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAob2Zmc2V0ICE9PSAtMTIwKSB7XHJcblx0XHRcdHNldE9mZnNldChvZmZzZXQgKyAxMTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0ICsgMTEwKVxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRUcmFuc2l0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoZW5kbGVEb3duQXJyb3dDbGljayA9ICgpID0+IHtcclxuXHRcdC8vIGlmIChvZmZzZXQgIT09IC03ODApIHtcclxuXHRcdGlmIChvZmZzZXQgIT09ICgocGFnZXMubGVuZ3RoIC0gNCkgKiAxMTAgKyAxMCkgKiAtMSkge1xyXG5cdFx0XHRzZXRPZmZzZXQob2Zmc2V0IC0gMTEwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0T2Zmc2V0KG9mZnNldCAtIDExMClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VHJhbnNpdGlvbihmYWxzZSlcclxuXHRcdFx0fSwgMzAwKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNYWluQ29udGFpbmVyPlxyXG5cdFx0XHR7Q2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMiA/IChcclxuXHRcdFx0XHQ8S2V5Ym9hcmRBcnJvd1VwSWNvblxyXG5cdFx0XHRcdFx0b25DbGljaz17aGVuZGxlVXBBcnJvd0NsaWNrfVxyXG5cdFx0XHRcdFx0c3g9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0PFdpbmRvdz5cclxuXHRcdFx0XHQ8UGFnZXMgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn0gY291bnQ9e29mZnNldH0+XHJcblx0XHRcdFx0XHR7cGFnZXN9XHJcblx0XHRcdFx0PC9QYWdlcz5cclxuXHRcdFx0PC9XaW5kb3c+XHJcblx0XHRcdHtDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAyID8gKFxyXG5cdFx0XHRcdDxLZXlib2FyZEFycm93RG93bkljb25cclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hlbmRsZURvd25BcnJvd0NsaWNrfVxyXG5cdFx0XHRcdFx0c3g9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdDwvTWFpbkNvbnRhaW5lcj5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIktleWJvYXJkQXJyb3dVcEljb24iLCJSZWFjdCIsIkNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWluQ29udGFpbmVyIiwiUGFnZXMiLCJXaW5kb3ciLCJHYWxsZXJ5U2xpZGVyIiwiY2hpbGRyZW4iLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJwYWdlcyIsInNldFBhZ2VzIiwidHJhbnNpdGlvbiIsInNldFRyYW5zaXRpb24iLCJjb3VudCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJoZW5kbGVVcEFycm93Q2xpY2siLCJoZW5kbGVEb3duQXJyb3dDbGljayIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/slider/gallerySlider/GallerySlider.tsx\n"));

/***/ })

});