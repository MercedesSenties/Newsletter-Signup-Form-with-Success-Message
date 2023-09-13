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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Form = ()=>{\n    _s();\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //function to handle form submission\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        try {\n            //get the email value from the input field\n            const enteredEmail = e.target.email.value;\n            //validate the email format\n            const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;\n            if (!enteredEmail.match(emailPattern)) {\n                setErrorMessage(\"Please enter a valid email address.\");\n                return; //don't proceed further if email is invalid\n            }\n            //store the email entered\n            setEmail(enteredEmail);\n            //show the success popup\n            setShowPopup(true);\n        } catch (error) {\n            setErrorMessage(\"An error occurred. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-full max-w-md group\",\n        noValidate: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-roboto-regular mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"block mb-2 text-xs text-gray-900 font-roboto-bold\",\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-600\",\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"email\",\n                        className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500  invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-500  invalid:[&:not(:placeholder-shown):not(:focus)]:bg-opacity-30\",\n                        placeholder: \"email@company.com\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                //i used the group class to disable the clicking of the button if something inside the form is invalid\n                className: \"font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mb-6 md:mb-0 group-invalid:cursor-not-allowed\",\n                children: \"Subscribe to monthly newsletter\"\n            }, void 0, false, {\n                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 right-0 flex justify-center items-center h-screen z-50 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-charcoal-grey\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col bg-white border border-gray-200 md:rounded-2xl shadow text-sm md:max-w-lg md:max-h-fit p-10 h-full md:h-auto w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillCheckCircle, {\n                            className: \"text-pink text-4xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-roboto-bold text-5xl text-dark-grey py-4 mt-4\",\n                            children: \"Thanks for subscribing!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-roboto-regular text-sm\",\n                            children: [\n                                \"A confirmation email has been sent to \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-roboto-bold\",\n                                    children: email\n                                }, void 0, false, {\n                                    fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 106\n                                }, undefined),\n                                \". Please open it and click the button inside to confirm your subscription.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setShowPopup(false),\n                            className: \"font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mt-10\",\n                            children: \"Dismiss message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amsrr/Desktop/Newsletter-Signup-Form-with-Success-Message/components/Form.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Form, \"w37LgjBa8aJoVU5CQmLy1AAOVAk=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNpQztBQUNrQjtBQUVuRCxNQUFNRSxPQUFPOztJQUViLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkMsb0NBQW9DO0lBQ3BDLE1BQU1TLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNBLDBDQUEwQztZQUMxQyxNQUFNQyxlQUFlRixFQUFFRyxNQUFNLENBQUNOLEtBQUssQ0FBQ08sS0FBSztZQUV6QywyQkFBMkI7WUFDM0IsTUFBTUMsZUFBZTtZQUNyQixJQUFJLENBQUNILGFBQWFJLEtBQUssQ0FBQ0QsZUFBZTtnQkFDbkNULGdCQUFnQjtnQkFDaEIsUUFBUSwyQ0FBMkM7WUFDdkQ7WUFFQSx5QkFBeUI7WUFDekJFLFNBQVNJO1lBRVQsd0JBQXdCO1lBQ3hCUixhQUFhO1FBQ2pCLEVBQUUsT0FBT2EsT0FBTztZQUNaWCxnQkFBZ0I7UUFDcEI7SUFDSjtJQUdBLHFCQUNJLDhEQUFDWTtRQUFLQyxVQUFVVjtRQUFjVyxXQUFVO1FBQXdCQyxVQUFVOzswQkFHdEUsOERBQUNDO2dCQUFJRixXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBTUMsU0FBUTtnQ0FBUUosV0FBVTswQ0FBb0Q7Ozs7Ozs0QkFJcEZmLDhCQUNHLDhEQUFDb0I7Z0NBQUVMLFdBQVU7MENBQWdCZjs7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQ3FCO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUVIUixXQUFVO3dCQUlWUyxhQUFZO3dCQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDQztnQkFDREosTUFBSztnQkFFTCxzR0FBc0c7Z0JBQ3RHUCxXQUFVOzBCQUVUOzs7Ozs7WUFLQWpCLDJCQUNHLDhEQUFDbUI7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDWCw4REFBQ25CLDZEQUFpQkE7NEJBQUNtQixXQUFVOzs7Ozs7c0NBQzdCLDhEQUFDWTs0QkFBR1osV0FBVTtzQ0FBcUQ7Ozs7OztzQ0FDbkUsOERBQUNLOzRCQUFFTCxXQUFVOztnQ0FBOEI7OENBQXNDLDhEQUFDYTtvQ0FBS2IsV0FBVTs4Q0FBb0JiOzs7Ozs7Z0NBQWE7Ozs7Ozs7c0NBQ2xJLDhEQUFDd0I7NEJBQ0dHLFNBQVMsSUFBTTlCLGFBQWE7NEJBQzVCZ0IsV0FBVTtzQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXekI7R0F6Rk1sQjtLQUFBQTtBQTJGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0uanN4PzI5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG5cbmNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8vZnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vZ2V0IHRoZSBlbWFpbCB2YWx1ZSBmcm9tIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICAgICAgY29uc3QgZW50ZXJlZEVtYWlsID0gZS50YXJnZXQuZW1haWwudmFsdWU7XG4gICAgXG4gICAgICAgICAgICAvL3ZhbGlkYXRlIHRoZSBlbWFpbCBmb3JtYXRcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsNH0kLztcbiAgICAgICAgICAgIGlmICghZW50ZXJlZEVtYWlsLm1hdGNoKGVtYWlsUGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL2Rvbid0IHByb2NlZWQgZnVydGhlciBpZiBlbWFpbCBpcyBpbnZhbGlkXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvL3N0b3JlIHRoZSBlbWFpbCBlbnRlcmVkXG4gICAgICAgICAgICBzZXRFbWFpbChlbnRlcmVkRW1haWwpO1xuICAgIFxuICAgICAgICAgICAgLy9zaG93IHRoZSBzdWNjZXNzIHBvcHVwXG4gICAgICAgICAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0FuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBncm91cFwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICB7LyogRGlzYWJsZSBkZWZhdWx0IHZhbGlkYXRpb24gd2l0aCBub1ZhbGlkYXRlKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1yb2JvdG8tcmVndWxhciBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXhzIHRleHQtZ3JheS05MDAgZm9udC1yb2JvdG8tYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7LyogRGlzcGxheSBlcnJvciBtZXNzYWdlICovfVxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiPntlcnJvck1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZDpbJjpub3QoOnBsYWNlaG9sZGVyLXNob3duKTpub3QoOmZvY3VzKV06Ym9yZGVyLXJlZC01MDAgXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ6WyY6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KDpmb2N1cyldOmJnLXJlZC01MDAgXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ6WyY6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KDpmb2N1cyldOmJnLW9wYWNpdHktMzBcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGNvbXBhbnkuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcblxuICAgICAgICAgICAgLy9pIHVzZWQgdGhlIGdyb3VwIGNsYXNzIHRvIGRpc2FibGUgdGhlIGNsaWNraW5nIG9mIHRoZSBidXR0b24gaWYgc29tZXRoaW5nIGluc2lkZSB0aGUgZm9ybSBpcyBpbnZhbGlkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXJvYm90by1ib2xkIHRleHQtd2hpdGUgYmctZGFyay1ncmV5IGhvdmVyOmJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rIHRvLW9yYW5nZSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS00IHRleHQtY2VudGVyIHctZnVsbCBtYi02IG1kOm1iLTBcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAtaW52YWxpZDpjdXJzb3Itbm90LWFsbG93ZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG1vbnRobHkgbmV3c2xldHRlclxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIHsvKiBTaG93IHRoZSBwb3B1cCB3aW5kb3cqL31cbiAgICAgICAgICAgIHtzaG93UG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4gei01MCBtZDpwLTQgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIG1kOmluc2V0LTAgYmctY2hhcmNvYWwtZ3JleVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtZDpyb3VuZGVkLTJ4bCBzaGFkb3cgdGV4dC1zbSBtZDptYXgtdy1sZyBtZDptYXgtaC1maXQgcC0xMCBoLWZ1bGwgbWQ6aC1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtcGluayB0ZXh0LTR4bFwiPjwvQWlGaWxsQ2hlY2tDaXJjbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LXJvYm90by1ib2xkIHRleHQtNXhsIHRleHQtZGFyay1ncmV5IHB5LTQgbXQtNCc+VGhhbmtzIGZvciBzdWJzY3JpYmluZyE8L2gxPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1yb2JvdG8tcmVndWxhciB0ZXh0LXNtJz5BIGNvbmZpcm1hdGlvbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1yb2JvdG8tYm9sZCc+e2VtYWlsfTwvc3Bhbj4uIFBsZWFzZSBvcGVuIGl0IGFuZCBjbGljayB0aGUgYnV0dG9uIGluc2lkZSB0byBjb25maXJtIHlvdXIgc3Vic2NyaXB0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXJvYm90by1ib2xkIHRleHQtd2hpdGUgYmctZGFyay1ncmV5IGhvdmVyOmJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rIHRvLW9yYW5nZSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS00IHRleHQtY2VudGVyIHctZnVsbCBtdC0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzbWlzcyBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApfVxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIFxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFpRmlsbENoZWNrQ2lyY2xlIiwiRm9ybSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsUGF0dGVybiIsIm1hdGNoIiwiZXJyb3IiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJub1ZhbGlkYXRlIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwicCIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsImgxIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.jsx\n"));

/***/ })

});