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

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/DetailsPopup */ \"./src/components/popup/DetailsPopup.js\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Portfolio = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), activeData = ref[0], setActiveData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), popup = ref1[0], setPopup = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), portfolioData = ref2[0], setPortfolioData = ref2[1];\n    var data = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && data.user.projects) {\n            var timelineData = data.user.timeline.filter(function(timeline) {\n                return timeline.enabled;\n            }).map(function(info) {\n                return {\n                    companyName: info.company_name,\n                    jobTitle: info.jobTitle,\n                    seq: info.sequence,\n                    description: info.summary,\n                    jobLocation: info.jobLocation,\n                    startDate: info.startDate\n                };\n            });\n            setPortfolioData(timelineData);\n        }\n    }, [\n        data\n    ]);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popup_DetailsPopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                open: popup,\n                close: function() {\n                    return setPopup(false);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"devman_tm_section\",\n                id: \"portfolio\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"devman_tm_portfolio\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"devman_tm_main_title\",\n                                \"data-text-align\": \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"My Amazing Works\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"portfolio_list\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        portfolioData.map(function(info) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"wow fadeInUp\",\n                                                \"data-wow-duration\": \"1s\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"list_inner\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"background_image\",\n                                                            \"data-img-url\": \"img/portfolio/1.jpg\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 19\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"content\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"details\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"category\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            href: \"#\",\n                                                                            children: \"Youtube\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                            lineNumber: 60,\n                                                                            columnNumber: 25\n                                                                        }, _this1)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                        lineNumber: 59,\n                                                                        columnNumber: 23\n                                                                    }, _this1),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                        className: \"title\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            href: \"#\",\n                                                                            children: [\n                                                                                info.jobTitle,\n                                                                                \" for\",\n                                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                                                    fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                                    lineNumber: 65,\n                                                                                    columnNumber: 27\n                                                                                }, _this1),\n                                                                                \" \",\n                                                                                info.companyName\n                                                                            ]\n                                                                        }, void 0, true, {\n                                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                            lineNumber: 63,\n                                                                            columnNumber: 25\n                                                                        }, _this1)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                        lineNumber: 62,\n                                                                        columnNumber: 23\n                                                                    }, _this1),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"view_project\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            href: \"#\",\n                                                                            children: [\n                                                                                \"View Project \",\n                                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                                    className: \"icon-right-big\"\n                                                                                }, void 0, false, {\n                                                                                    fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                                    lineNumber: 70,\n                                                                                    columnNumber: 40\n                                                                                }, _this1)\n                                                                            ]\n                                                                        }, void 0, true, {\n                                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                            lineNumber: 69,\n                                                                            columnNumber: 25\n                                                                        }, _this1)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                        lineNumber: 68,\n                                                                        columnNumber: 23\n                                                                    }, _this1)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 21\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 19\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"overlay\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 19\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            className: \"devman_tm_full_link portfolio_popup c-pointer\",\n                                                            onClick: function() {\n                                                                setActiveData(service);\n                                                                setPopup(true);\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 19\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, _this1);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"shape_1 moving_effect\",\n                                            \"data-direction\": \"y\",\n                                            \"data-reverse\": \"yes\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"shape_2 moving_effect\",\n                                            \"data-direction\": \"y\",\n                                            \"data-reverse\": \"yes\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shahw\\\\Downloads\\\\Compressed\\\\devman\\\\devman\\\\src\\\\components\\\\Portfolio.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Portfolio, \"lOnoUcsY5W1/EEgqLQ16Hy6eEtg=\", false, function() {\n    return [\n        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEJDLGNBQVksRUFBQyxLQUFLOzs7OztpREFDbEI7c0RBQ0YsOERBQUNsQixLQUFHOzRDQUNGQyxTQUFTLEVBQUMsdUJBQXVCOzRDQUNqQ2dCLGdCQUFjLEVBQUMsR0FBRzs0Q0FDbEJDLGNBQVksRUFBQyxLQUFLOzs7OztpREFDbEI7Ozs7Ozt5Q0FDQzs7Ozs7cUNBQ0Q7Ozs7Ozs2QkFDRjs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFDRyxDQUNUO0NBQ0g7R0FuR0svQyxTQUFTOztRQU1JRCx1REFBUTs7O0FBTnJCQyxLQUFBQSxTQUFTO0FBb0dmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9ydGZvbGlvLmpzP2E2YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERldGFpbHNQb3B1cCBmcm9tIFwiLi9wb3B1cC9EZXRhaWxzUG9wdXBcIjtcclxuaW1wb3J0IHVzZUZldGNoIGZyb20gXCIuLi9ob29rcy91c2VGZXRjaFwiO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVEYXRhLCBzZXRBY3RpdmVEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3BvcnRmb2xpb0RhdGEsIHNldFBvcnRmb2xpb0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLnVzZXIucHJvamVjdHMpIHtcclxuICAgICAgY29uc3QgdGltZWxpbmVEYXRhID0gZGF0YS51c2VyLnRpbWVsaW5lXHJcbiAgICAgICAgLmZpbHRlcigodGltZWxpbmUpID0+IHRpbWVsaW5lLmVuYWJsZWQpXHJcbiAgICAgICAgLm1hcCgoaW5mbykgPT4gKHtcclxuICAgICAgICAgIGNvbXBhbnlOYW1lOiBpbmZvLmNvbXBhbnlfbmFtZSxcclxuICAgICAgICAgIGpvYlRpdGxlOiBpbmZvLmpvYlRpdGxlLFxyXG4gICAgICAgICAgc2VxOiBpbmZvLnNlcXVlbmNlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGluZm8uc3VtbWFyeSxcclxuICAgICAgICAgIGpvYkxvY2F0aW9uOiBpbmZvLmpvYkxvY2F0aW9uLFxyXG4gICAgICAgICAgc3RhcnREYXRlOiBpbmZvLnN0YXJ0RGF0ZSxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHNldFBvcnRmb2xpb0RhdGEodGltZWxpbmVEYXRhKVxyXG5cclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgPERldGFpbHNQb3B1cCBvcGVuPXtwb3B1cH0gY2xvc2U9eygpID0+IHNldFBvcHVwKGZhbHNlKX0gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2bWFuX3RtX3NlY3Rpb25cIiBpZD1cInBvcnRmb2xpb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldm1hbl90bV9wb3J0Zm9saW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXZtYW5fdG1fbWFpbl90aXRsZVwiIGRhdGEtdGV4dC1hbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz5NeSBBbWF6aW5nIFdvcmtzPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgRGxpcXVpcCBleCBlYSBjb21tbyBkbyBjb25zZSBuYW1iZXIgb25lcXVhIHV0ZSBpcnVyZSBkb2xvciBpblxyXG4gICAgICAgICAgICAgIHJlcHJlaGVuIGRlcml0IGluIHZvbHVwdGF0ZVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvX2xpc3RcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb0RhdGEubWFwKChpbmZvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmRfaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaW1nLXVybD1cImltZy9wb3J0Zm9saW8vMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+WW91dHViZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvLmpvYlRpdGxlfSBmb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4ge2luZm8uY29tcGFueU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aWV3X3Byb2plY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3QgPGkgY2xhc3NOYW1lPVwiaWNvbi1yaWdodC1iaWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXZtYW5fdG1fZnVsbF9saW5rIHBvcnRmb2xpb19wb3B1cCBjLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXRhKHNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXBlXzEgbW92aW5nX2VmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpcmVjdGlvbj1cInlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXZlcnNlPVwieWVzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXBlXzIgbW92aW5nX2VmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpcmVjdGlvbj1cInlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXZlcnNlPVwieWVzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGV0YWlsc1BvcHVwIiwidXNlRmV0Y2giLCJQb3J0Zm9saW8iLCJhY3RpdmVEYXRhIiwic2V0QWN0aXZlRGF0YSIsInBvcHVwIiwic2V0UG9wdXAiLCJwb3J0Zm9saW9EYXRhIiwic2V0UG9ydGZvbGlvRGF0YSIsImRhdGEiLCJ1c2VyIiwicHJvamVjdHMiLCJ0aW1lbGluZURhdGEiLCJ0aW1lbGluZSIsImZpbHRlciIsImVuYWJsZWQiLCJtYXAiLCJpbmZvIiwiY29tcGFueU5hbWUiLCJjb21wYW55X25hbWUiLCJqb2JUaXRsZSIsInNlcSIsInNlcXVlbmNlIiwiZGVzY3JpcHRpb24iLCJzdW1tYXJ5Iiwiam9iTG9jYXRpb24iLCJzdGFydERhdGUiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsImNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJkYXRhLXRleHQtYWxpZ24iLCJzcGFuIiwiaDMiLCJwIiwidWwiLCJsaSIsImRhdGEtd293LWR1cmF0aW9uIiwiZGF0YS1pbWctdXJsIiwiYSIsImhyZWYiLCJiciIsImkiLCJvbkNsaWNrIiwic2VydmljZSIsImRhdGEtZGlyZWN0aW9uIiwiZGF0YS1yZXZlcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Portfolio.js\n"));

/***/ })

});