"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nfunction Index() {\n    var downloadImages = function() {\n        var imageSrcs = [\n            \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n            \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n            \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\", \n        ];\n        var urls = imageSrcs;\n        urls.forEach(function(url, index) {\n            var filename = url.substring(url.lastIndexOf(\"/\") + 1);\n            fetch(url, {\n                responseType: \"blob\"\n            }).then(function(response) {\n                return response.blob();\n            }).then(function(blob) {\n                var _$url = window.URL.createObjectURL(new Blob([\n                    blob\n                ]));\n                var link = document.createElement(\"a\");\n                link.href = _$url;\n                link.setAttribute(\"download\", filename);\n                document.body.appendChild(link);\n                link.click();\n                link.remove();\n                if (index === urls.length - 1) {\n                    window.alert(\"All images downloaded successfully!\");\n                }\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                className: \"main-text\",\n                children: \"Ape Digital Assets\"\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                className: \"main-text dow-ape\",\n                children: \"Download Your New Art\"\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"number-input-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    placeholder: \"Your current lbac number\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                className: \"main-text youtribe\",\n                children: \"Your Ape\"\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"number-input-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"please enter your lbac number again\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"view-button\",\n                        children: \"View\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: downloadImages,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"footer-social-icons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"social-icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFacebookF, {}, void 0, false, {\n                                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"social-icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {}, void 0, false, {\n                                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"social-icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaLinkedinIn, {}, void 0, false, {\n                                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"footer-social-icons f-r\",\n                        children: \"Ape shop\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQUNTLFNBQVMsRUFBQyxhQUFhOzBDQUNqQyw0RUFBQ2xDLHVEQUFXOzs7O3dDQUFHOzs7OztvQ0FDYjswQ0FDSiw4REFBQzBDLEdBQUM7Z0NBQUNqQixJQUFJLEVBQUMsR0FBRztnQ0FBQ1MsU0FBUyxFQUFDLGFBQWE7MENBQ2pDLDRFQUFDakMscURBQVM7Ozs7d0NBQUc7Ozs7O29DQUNYOzBDQUNKLDhEQUFDeUMsR0FBQztnQ0FBQ2pCLElBQUksRUFBQyxHQUFHO2dDQUFDUyxTQUFTLEVBQUMsYUFBYTswQ0FDakMsNEVBQUNoQyx3REFBWTs7Ozt3Q0FBRzs7Ozs7b0NBQ2Q7Ozs7Ozs0QkFDQTtrQ0FDTiw4REFBQ2lDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7a0NBQUMsVUFFekM7Ozs7OzRCQUFNOzs7Ozs7b0JBRUM7O29CQUNSLENBQ0g7QUFDSixDQUFDO0FBbkV1Qi9CLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUxpbmtlZGluSW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgZG93bmxvYWRJbWFnZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBpbWFnZVNyY3MgPSBbXG4gICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZycsXG4gICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZycsXG4gICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZycsXG4gICAgXTtcblxuICAgIGNvbnN0IHVybHMgPSBpbWFnZVNyY3M7XG4gICAgdXJscy5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmaWxlbmFtZSA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAgIC50aGVuKGJsb2IgPT4ge1xuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtibG9iXSkpO1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVuYW1lKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgICBsaW5rLnJlbW92ZSgpO1xuICAgICAgICAgIGlmIChpbmRleCA9PT0gdXJscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0FsbCBpbWFnZXMgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGNlbnRlciBjbGFzc05hbWU9XCJtYWluLXRleHRcIj5BcGUgRGlnaXRhbCBBc3NldHM8L2NlbnRlcj5cblxuXG4gICAgICA8Y2VudGVyIGNsYXNzTmFtZT1cIm1haW4tdGV4dCBkb3ctYXBlXCI+RG93bmxvYWQgWW91ciBOZXcgQXJ0PC9jZW50ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIllvdXIgY3VycmVudCBsYmFjIG51bWJlclwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGNlbnRlciBjbGFzc05hbWU9XCJtYWluLXRleHQgeW91dHJpYmVcIj5Zb3VyIEFwZTwvY2VudGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXItaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJwbGVhc2UgZW50ZXIgeW91ciBsYmFjIG51bWJlciBhZ2FpblwiIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidmlldy1idXR0b25cIj5WaWV3PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZG93bmxvYWQtYnV0dG9uXCIgb25DbGljaz17ZG93bmxvYWRJbWFnZXN9PkRvd25sb2FkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsLWljb25zXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgPEZhRmFjZWJvb2tGIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgPEZhTGlua2VkaW5JbiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbC1pY29ucyBmLXJcIj5cbiAgICAgICAgICBBcGUgc2hvcFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGYUZhY2Vib29rRiIsIkZhVHdpdHRlciIsIkZhTGlua2VkaW5JbiIsIkluZGV4IiwiZG93bmxvYWRJbWFnZXMiLCJpbWFnZVNyY3MiLCJ1cmxzIiwiZm9yRWFjaCIsInVybCIsImluZGV4IiwiZmlsZW5hbWUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImZldGNoIiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiYmxvYiIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlIiwibGVuZ3RoIiwiYWxlcnQiLCJjZW50ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb290ZXIiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});