"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Form = ()=>{\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //function to handle form submission\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        try {\n            //get the email value from the input field\n            const enteredEmail = e.target.email.value;\n            //validate the email format\n            const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;\n            if (!enteredEmail.match(emailPattern)) {\n                setErrorMessage(\"Valid email required\");\n                return; //don't proceed further if email is invalid\n            }\n            //store the email entered\n            setEmail(enteredEmail);\n            //show the success popup\n            setShowPopup(true);\n        } catch (error) {\n            setErrorMessage(\"An error occurred. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-full max-w-md group\",\n        noValidate: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-roboto-regular mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-column justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"block mb-2 text-xs text-gray-900 font-roboto-bold\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl\",\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"email\",\n                        className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500  invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-500  invalid:[&:not(:placeholder-shown):not(:focus)]:bg-opacity-30\",\n                        placeholder: \"email@company.com\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                //i used the group class to disable the clicking of the button if something inside the form is invalid\n                className: \"font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mb-6 md:mb-0 group-invalid:cursor-not-allowed\",\n                children: \"Subscribe to monthly newsletter\"\n            }, void 0, false, {\n                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 right-0 flex justify-center items-center h-screen z-50 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-charcoal-grey\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col bg-white border border-gray-200 md:rounded-2xl shadow text-sm md:max-w-lg md:max-h-fit p-10 h-full md:h-auto w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillCheckCircle, {\n                            className: \"text-pink text-4xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-roboto-bold text-5xl text-dark-grey py-4 mt-4\",\n                            children: \"Thanks for subscribing!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-roboto-regular text-sm\",\n                            children: [\n                                \"A confirmation email has been sent to \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-roboto-bold\",\n                                    children: email\n                                }, void 0, false, {\n                                    fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 106\n                                }, undefined),\n                                \". Please open it and click the button inside to confirm your subscription.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setShowPopup(false),\n                            className: \"font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mt-10\",\n                            children: \"Dismiss message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Form, \"w37LgjBa8aJoVU5CQmLy1AAOVAk=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNpQztBQUNrQjtBQUVuRCxNQUFNRSxPQUFPOztJQUViLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkMsb0NBQW9DO0lBQ3BDLE1BQU1TLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNBLDBDQUEwQztZQUMxQyxNQUFNQyxlQUFlRixFQUFFRyxNQUFNLENBQUNOLEtBQUssQ0FBQ08sS0FBSztZQUV6QywyQkFBMkI7WUFDM0IsTUFBTUMsZUFBZTtZQUNyQixJQUFJLENBQUNILGFBQWFJLEtBQUssQ0FBQ0QsZUFBZTtnQkFDbkNULGdCQUFnQjtnQkFDaEIsUUFBUSwyQ0FBMkM7WUFDdkQ7WUFFQSx5QkFBeUI7WUFDekJFLFNBQVNJO1lBRVQsd0JBQXdCO1lBQ3hCUixhQUFhO1FBQ2pCLEVBQUUsT0FBT2EsT0FBTztZQUNaWCxnQkFBZ0I7UUFDcEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDWTtRQUFLQyxVQUFVVjtRQUFjVyxXQUFVO1FBQXdCQyxVQUFVOzswQkFHdEUsOERBQUNDO2dCQUFJRixXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBTUMsU0FBUTtnQ0FBUUosV0FBVTswQ0FBb0Q7Ozs7Ozs0QkFJcEZmLDhCQUNHLDhEQUFDb0I7Z0NBQUVMLFdBQVU7MENBQVdmOzs7Ozs7Ozs7Ozs7a0NBR2hDLDhEQUFDcUI7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBRUhSLFdBQVU7d0JBSVZTLGFBQVk7d0JBQ1pDLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHaEIsOERBQUNDO2dCQUNESixNQUFLO2dCQUVMLHNHQUFzRztnQkFDdEdQLFdBQVU7MEJBRVQ7Ozs7OztZQUtBakIsMkJBQ0csOERBQUNtQjtnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNYLDhEQUFDbkIsNkRBQWlCQTs0QkFBQ21CLFdBQVU7Ozs7OztzQ0FDN0IsOERBQUNZOzRCQUFHWixXQUFVO3NDQUFxRDs7Ozs7O3NDQUNuRSw4REFBQ0s7NEJBQUVMLFdBQVU7O2dDQUE4Qjs4Q0FBc0MsOERBQUNhO29DQUFLYixXQUFVOzhDQUFvQmI7Ozs7OztnQ0FBYTs7Ozs7OztzQ0FDbEksOERBQUN3Qjs0QkFDR0csU0FBUyxJQUFNOUIsYUFBYTs0QkFDNUJnQixXQUFVO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd6QjtHQXpGTWxCO0tBQUFBO0FBMkZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS5qc3g/MjkxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsQ2hlY2tDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcblxuY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy9mdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9nZXQgdGhlIGVtYWlsIHZhbHVlIGZyb20gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgICAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlLnRhcmdldC5lbWFpbC52YWx1ZTtcbiAgICBcbiAgICAgICAgICAgIC8vdmFsaWRhdGUgdGhlIGVtYWlsIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17Miw0fSQvO1xuICAgICAgICAgICAgaWYgKCFlbnRlcmVkRW1haWwubWF0Y2goZW1haWxQYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnVmFsaWQgZW1haWwgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vZG9uJ3QgcHJvY2VlZCBmdXJ0aGVyIGlmIGVtYWlsIGlzIGludmFsaWRcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vc3RvcmUgdGhlIGVtYWlsIGVudGVyZWRcbiAgICAgICAgICAgIHNldEVtYWlsKGVudGVyZWRFbWFpbCk7XG4gICAgXG4gICAgICAgICAgICAvL3Nob3cgdGhlIHN1Y2Nlc3MgcG9wdXBcbiAgICAgICAgICAgIHNldFNob3dQb3B1cCh0cnVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnQW4gZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIGdyb3VwXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgIHsvKiBEaXNhYmxlIGRlZmF1bHQgdmFsaWRhdGlvbiB3aXRoIG5vVmFsaWRhdGUqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXJvYm90by1yZWd1bGFyIG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXhzIHRleHQtZ3JheS05MDAgZm9udC1yb2JvdG8tYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7LyogRGlzcGxheSBlcnJvciBtZXNzYWdlICovfVxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj57ZXJyb3JNZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ6WyY6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KDpmb2N1cyldOmJvcmRlci1yZWQtNTAwIFxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkOlsmOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOm5vdCg6Zm9jdXMpXTpiZy1yZWQtNTAwIFxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkOlsmOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOm5vdCg6Zm9jdXMpXTpiZy1vcGFjaXR5LTMwXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBjb21wYW55LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG5cbiAgICAgICAgICAgIC8vaSB1c2VkIHRoZSBncm91cCBjbGFzcyB0byBkaXNhYmxlIHRoZSBjbGlja2luZyBvZiB0aGUgYnV0dG9uIGlmIHNvbWV0aGluZyBpbnNpZGUgdGhlIGZvcm0gaXMgaW52YWxpZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1yb2JvdG8tYm9sZCB0ZXh0LXdoaXRlIGJnLWRhcmstZ3JleSBob3ZlcjpiZy1ncmFkaWVudC10by1yIGZyb20tcGluayB0by1vcmFuZ2Ugcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktNCB0ZXh0LWNlbnRlciB3LWZ1bGwgbWItNiBtZDptYi0wXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLWludmFsaWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIFN1YnNjcmliZSB0byBtb250aGx5IG5ld3NsZXR0ZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7LyogU2hvdyB0aGUgcG9wdXAgd2luZG93Ki99XG4gICAgICAgICAgICB7c2hvd1BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHotNTAgbWQ6cC00IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBtZDppbnNldC0wIGJnLWNoYXJjb2FsLWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbWQ6cm91bmRlZC0yeGwgc2hhZG93IHRleHQtc20gbWQ6bWF4LXctbGcgbWQ6bWF4LWgtZml0IHAtMTAgaC1mdWxsIG1kOmgtYXV0byB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LXBpbmsgdGV4dC00eGxcIj48L0FpRmlsbENoZWNrQ2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1yb2JvdG8tYm9sZCB0ZXh0LTV4bCB0ZXh0LWRhcmstZ3JleSBweS00IG10LTQnPlRoYW5rcyBmb3Igc3Vic2NyaWJpbmchPC9oMT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtcm9ib3RvLXJlZ3VsYXIgdGV4dC1zbSc+QSBjb25maXJtYXRpb24gZW1haWwgaGFzIGJlZW4gc2VudCB0byA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtcm9ib3RvLWJvbGQnPntlbWFpbH08L3NwYW4+LiBQbGVhc2Ugb3BlbiBpdCBhbmQgY2xpY2sgdGhlIGJ1dHRvbiBpbnNpZGUgdG8gY29uZmlybSB5b3VyIHN1YnNjcmlwdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1yb2JvdG8tYm9sZCB0ZXh0LXdoaXRlIGJnLWRhcmstZ3JleSBob3ZlcjpiZy1ncmFkaWVudC10by1yIGZyb20tcGluayB0by1vcmFuZ2Ugcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktNCB0ZXh0LWNlbnRlciB3LWZ1bGwgbXQtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc21pc3MgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKX1cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICBcbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBaUZpbGxDaGVja0NpcmNsZSIsIkZvcm0iLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbFBhdHRlcm4iLCJtYXRjaCIsImVycm9yIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibm9WYWxpZGF0ZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsInAiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJoMSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.jsx\n"));

/***/ })

});