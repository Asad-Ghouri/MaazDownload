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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nfunction Index() {\n    var downloadImages = function() {\n        var imageSrcs = [\n            \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n            \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n            \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\", \n        ];\n        var urls = imageSrcs;\n        urls.forEach(function(url, index) {\n            var filename = url.substring(url.lastIndexOf(\"/\") + 1);\n            fetch(url, {\n                responseType: \"blob\"\n            }).then(function(response) {\n                return response.blob();\n            }).then(function(blob) {\n                var _$url = window.URL.createObjectURL(new Blob([\n                    blob\n                ]));\n                var link = document.createElement(\"a\");\n                link.href = _$url;\n                link.setAttribute(\"download\", filename);\n                document.body.appendChild(link);\n                link.click();\n                link.remove();\n                if (index === urls.length - 1) {\n                    window.alert(\"All images downloaded successfully!\");\n                }\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                className: \"main-text\",\n                children: \"Ape Digital Assets\"\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                className: \"main-text dow-ape\",\n                children: \"Download Your New Art\"\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"number-input-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    placeholder: \"Your current lbac number\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"number-input-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"view-button\",\n                        children: \"View\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: downloadImages,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"footer-social-icons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"social-icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFacebookF, {}, void 0, false, {\n                                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"social-icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {}, void 0, false, {\n                                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"social-icon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaLinkedinIn, {}, void 0, false, {\n                                    fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"footer-social-icons f-r\",\n                        children: \"Ape shop\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MyProducts\\\\nft_marketplace-master-for-Download\\\\nft_marketplace-master\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCLElBQUksRUFBQyxHQUFHO2dDQUFDUyxTQUFTLEVBQUMsYUFBYTswQ0FDakMsNEVBQUNqQyxxREFBUzs7Ozt3Q0FBRzs7Ozs7b0NBQ1g7MENBQ0osOERBQUMwQyxHQUFDO2dDQUFDbEIsSUFBSSxFQUFDLEdBQUc7Z0NBQUNTLFNBQVMsRUFBQyxhQUFhOzBDQUNqQyw0RUFBQ2hDLHdEQUFZOzs7O3dDQUFHOzs7OztvQ0FDZDs7Ozs7OzRCQUNBO2tDQUNOLDhEQUFDaUMsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLHlCQUF5QjtrQ0FBQyxVQUV6Qzs7Ozs7NEJBQU07Ozs7OztvQkFFQzs7b0JBQ1IsQ0FDSDtBQUNKLENBQUM7QUF6RXVCL0IsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhTGlua2VkaW5JbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICBjb25zdCBkb3dubG9hZEltYWdlcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGltYWdlU3JjcyA9IFtcbiAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnJyxcbiAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnJyxcbiAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnJyxcbiAgICBdO1xuXG4gICAgY29uc3QgdXJscyA9IGltYWdlU3JjcztcbiAgICB1cmxzLmZvckVhY2goKHVybCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCJcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgLnRoZW4oYmxvYiA9PiB7XG4gICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2Jsb2JdKSk7XG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgIGxpbmsucmVtb3ZlKCk7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSB1cmxzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnQWxsIGltYWdlcyBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Y2VudGVyIGNsYXNzTmFtZT1cIm1haW4tdGV4dFwiPkFwZSBEaWdpdGFsIEFzc2V0czwvY2VudGVyPlxuXG5cbiAgICAgIDxjZW50ZXIgY2xhc3NOYW1lPVwibWFpbi10ZXh0IGRvdy1hcGVcIj5Eb3dubG9hZCBZb3VyIE5ldyBBcnQ8L2NlbnRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiWW91ciBjdXJyZW50IGxiYWMgbnVtYmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXItaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidmlldy1idXR0b25cIj5WaWV3PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZG93bmxvYWQtYnV0dG9uXCIgb25DbGljaz17ZG93bmxvYWRJbWFnZXN9PkRvd25sb2FkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8Y2VudGVyIGNsYXNzTmFtZT1cIm1haW4tdGV4dCB5b3V0cmliZVwiPllvdXIgQXBlPC9jZW50ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cInBsZWFzZSBlbnRlciB5b3VyIGxiYWMgbnVtYmVyIGFnYWluXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aWV3LWJ1dHRvblwiPlZpZXc8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkb3dubG9hZC1idXR0b25cIiBvbkNsaWNrPXtkb3dubG9hZEltYWdlc30+RG93bmxvYWQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsLWljb25zXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgPEZhRmFjZWJvb2tGIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgPEZhTGlua2VkaW5JbiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbC1pY29ucyBmLXJcIj5cbiAgICAgICAgICBBcGUgc2hvcFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGYUZhY2Vib29rRiIsIkZhVHdpdHRlciIsIkZhTGlua2VkaW5JbiIsIkluZGV4IiwiZG93bmxvYWRJbWFnZXMiLCJpbWFnZVNyY3MiLCJ1cmxzIiwiZm9yRWFjaCIsInVybCIsImluZGV4IiwiZmlsZW5hbWUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImZldGNoIiwicmVzcG9uc2VUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwiYmxvYiIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlIiwibGVuZ3RoIiwiYWxlcnQiLCJjZW50ZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImZvb3RlciIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});