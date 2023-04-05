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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/index */ \"./constants/index.js\");\n/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Inputs/Input */ \"./components/Inputs/Input.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_Buttons_SpinnerButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Buttons/SpinnerButton */ \"./components/Buttons/SpinnerButton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const getProviderOrSigner = async function() {\n        let needSigner = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        const provider = await web3ModalRef.current.connect();\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(provider);\n        const PRIVATE_KEY = \"a01059246a64656ab07301279da34c036a31f0bb3c83361e01f0bdfc0bb9d45b\";\n        const wallet = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Wallet(PRIVATE_KEY, web3Provider);\n        const { chainId  } = await web3Provider.getNetwork();\n        if (chainId !== 97) {\n            window.alert(\"Change network\");\n        //TODO metmask переключился на 97\n        }\n        if (needSigner) {\n            // const signer = web3Provider.getSigner(); //текущий кошелек юзера который вызывает\n            // получаем объект signer из кошелька\n            const signer2 = wallet.connect(web3Provider);\n            console.log(signer2);\n            return signer2;\n        }\n        return web3Provider;\n    };\n    const connectWallet = async ()=>{\n        try {\n            await getProviderOrSigner();\n            setWalletConnected(true);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({\n                network: 97,\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n            console.log(walletConnected);\n        }\n    }, [\n        walletConnected\n    ]);\n    const sendToken = async ()=>{\n        try {\n            const signer = await getProviderOrSigner(true);\n            // console.log(signer);\n            const tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(_constants_index__WEBPACK_IMPORTED_MODULE_2__.CONTRACT_ADDRESS, _constants_index__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n            // console.log(inputValue);\n            const transfered = await tokenContract.transfer(inputValue, 10);\n            const txReceipt = await transfered.wait(2);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleClick = async ()=>{\n        setIsLoading(true);\n        await sendToken();\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Enter address\",\n                            id: \"addrSender\",\n                            value: inputValue,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_SpinnerButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onClick: handleClick,\n                            loading: isLoading,\n                            children: walletConnected ? \"Send\" : \"Connect wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {\n                isVisible: isModal,\n                // title={titleModal}\n                content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    children: titleModal\n                }, void 0, false, void 0, void 0),\n                footer: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, void 0, void 0),\n                onClose: ()=>setModal(false)\n            }, void 0, false, {\n                fileName: \"/Users/ajsanaolpan/Desktop/Assignment4TokenAirdrop/tokenairdrop-next-project/src/pages/index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ZC/irEhtBmXCrLDQI8D5TB8FOO4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUQsV0FBV2pFLDRFQUFrQjs7c0NBQ2hDLDhEQUFDRyxnRUFBS0E7NEJBQ0ppRSxPQUFNOzRCQUNOQyxJQUFHOzRCQUNIN0MsT0FBT0w7NEJBQ1BtRCxVQUFVakQ7Ozs7OztzQ0FHWiw4REFBQ2IseUVBQWFBOzRCQUNaK0QsU0FBU2Y7NEJBQ1RnQixTQUFTeEQ7NEJBQ1R5RCxVQUFVM0Qsa0JBQWtCLFNBQVMsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLM0QsOERBQUM0RDtnQkFDQ0MsV0FBV0M7Z0JBQ1gscUJBQXFCO2dCQUNyQmhCLHVCQUFTLDhEQUFDaUI7OEJBQUlDOztnQkFDZEMsc0JBQVEsOERBQUNDO2dCQUNUQyxTQUFTLElBQU1DLFNBQVMsS0FBSzs7Ozs7Ozs7QUFJckMsQ0FBQztHQTlHdUJyRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MsIGFiaSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvaW5kZXhcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvSW5wdXRcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgQ29udHJhY3QsIHByb3ZpZGVycywgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFNwaW5uZXJCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9ucy9TcGlubmVyQnV0dG9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCBQUklWQVRFX0tFWSA9IHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZO1xuXG4gICAgY29uc3Qgd2FsbGV0ID0gbmV3IGV0aGVycy5XYWxsZXQoUFJJVkFURV9LRVksIHdlYjNQcm92aWRlcik7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDk3KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgbmV0d29ya1wiKTtcbiAgICAgIC8vVE9ETyBtZXRtYXNrINC/0LXRgNC10LrQu9GO0YfQuNC70YHRjyDQvdCwIDk3XG4gICAgfVxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICAvLyBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7IC8v0YLQtdC60YPRidC40Lkg0LrQvtGI0LXQu9C10Log0Y7Qt9C10YDQsCDQutC+0YLQvtGA0YvQuSDQstGL0LfRi9Cy0LDQtdGCXG4gICAgICAvLyDQv9C+0LvRg9GH0LDQtdC8INC+0LHRitC10LrRgiBzaWduZXIg0LjQtyDQutC+0YjQtdC70YzQutCwXG4gICAgICBjb25zdCBzaWduZXIyID0gd2FsbGV0LmNvbm5lY3Qod2ViM1Byb3ZpZGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKHNpZ25lcjIpO1xuICAgICAgcmV0dXJuIHNpZ25lcjI7XG4gICAgfVxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogOTcsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29ubmVjdFdhbGxldCgpO1xuICAgICAgY29uc29sZS5sb2cod2FsbGV0Q29ubmVjdGVkKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICBjb25zdCBzZW5kVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHNpZ25lcik7XG4gICAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIGFiaSwgc2lnbmVyKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG4gICAgICBjb25zdCB0cmFuc2ZlcmVkID0gYXdhaXQgdG9rZW5Db250cmFjdC50cmFuc2ZlcihpbnB1dFZhbHVlLCAxMCk7XG5cbiAgICAgIGNvbnN0IHR4UmVjZWlwdCA9IGF3YWl0IHRyYW5zZmVyZWQud2FpdCgyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBhd2FpdCBzZW5kVG9rZW4oKTtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkVudGVyIGFkZHJlc3NcIlxuICAgICAgICAgICAgaWQ9XCJhZGRyU2VuZGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8U3Bpbm5lckJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICBjaGlsZHJlbj17d2FsbGV0Q29ubmVjdGVkID8gXCJTZW5kXCIgOiBcIkNvbm5lY3Qgd2FsbGV0XCJ9XG4gICAgICAgICAgPjwvU3Bpbm5lckJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc1Zpc2libGU9e2lzTW9kYWx9XG4gICAgICAgIC8vIHRpdGxlPXt0aXRsZU1vZGFsfVxuICAgICAgICBjb250ZW50PXs8aDY+e3RpdGxlTW9kYWx9PC9oNj59XG4gICAgICAgIGZvb3Rlcj17PHA+PC9wPn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0TW9kYWwoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJzdHlsZXMiLCJDT05UUkFDVF9BRERSRVNTIiwiYWJpIiwiSW5wdXQiLCJXZWIzTW9kYWwiLCJDb250cmFjdCIsInByb3ZpZGVycyIsImV0aGVycyIsIlNwaW5uZXJCdXR0b24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSG9tZSIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIndlYjNNb2RhbFJlZiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwibmVlZFNpZ25lciIsInByb3ZpZGVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJ3ZWIzUHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJQUklWQVRFX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJ3YWxsZXQiLCJXYWxsZXQiLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsIndpbmRvdyIsImFsZXJ0Iiwic2lnbmVyMiIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0IiwiZXJyb3IiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJzZW5kVG9rZW4iLCJzaWduZXIiLCJ0b2tlbkNvbnRyYWN0IiwidHJhbnNmZXJlZCIsInRyYW5zZmVyIiwidHhSZWNlaXB0Iiwid2FpdCIsImhhbmRsZUNsaWNrIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsImxhYmVsIiwiaWQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJsb2FkaW5nIiwiY2hpbGRyZW4iLCJNb2RhbCIsImlzVmlzaWJsZSIsImlzTW9kYWwiLCJoNiIsInRpdGxlTW9kYWwiLCJmb290ZXIiLCJwIiwib25DbG9zZSIsInNldE1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});