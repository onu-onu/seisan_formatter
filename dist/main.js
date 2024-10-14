/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nwindow.onload = () => {\n    var _a, _b;\n    (_a = document.getElementById('csvText')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', () => {\n        formating();\n        copyDivToClipboard();\n    });\n    (_b = document.querySelector('#copyBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {\n        copyDivToClipboard();\n    });\n};\nfunction formating() {\n    const textArea = document.querySelector('#csvText');\n    const outdiv = document.querySelector('#output');\n    outdiv.innerHTML = '';\n    const text = textArea.value;\n    const lines = text.split(\"\\n\");\n    lines.slice(0, 5).forEach(line => {\n        let tokens = line.split('\\t');\n        let label = tokens[0];\n        let value = tokens[1];\n        console.log(`${label} ${value}`);\n        outdiv.innerHTML += `${label} ${value}<br />`;\n    });\n    let outputStr0 = 'と→み<br />';\n    let outputStr1 = 'み→と<br />';\n    lines.slice(6, lines.length - 1).forEach(line => {\n        let tokens = line.split('\\t');\n        let use = formatString(tokens[0], '　');\n        let date = tokens[1].slice(5);\n        let price = tokens[2];\n        let who = tokens[3];\n        if (who == 'と→み') {\n            outputStr0 += `${use}　${date}　${price}<br />`;\n        }\n        else if (who == 'み→と') {\n            outputStr1 += `${use}　${date}　${price}<br />`;\n        }\n    });\n    outdiv.innerHTML += outputStr0;\n    outdiv.innerHTML += '<br>';\n    outdiv.innerHTML += outputStr1;\n}\nfunction formatString(input, fullWidthSpace) {\n    const len = 5;\n    if (input.length <= len) {\n        return input.padEnd(len, fullWidthSpace); // 10文字になるよう全角スペースで埋める\n    }\n    else {\n        return input.slice(0, len - 1) + '...'; // 10文字以上の場合は9文字で区切る\n    }\n}\nfunction copyDivToClipboard() {\n    const outdiv = document.querySelector('#output');\n    if (outdiv) {\n        const range = document.createRange();\n        range.selectNode(outdiv);\n        const selection = window.getSelection();\n        if (selection) {\n            selection.removeAllRanges();\n            selection.addRange(range);\n            try {\n                document.execCommand('copy');\n                console.log('クリップボードにコピーしました');\n            }\n            catch (err) {\n                console.error('コピーに失敗しました', err);\n            }\n            selection.removeAllRanges(); // 選択を解除\n        }\n    }\n}\n\n\n//# sourceURL=webpack://seisan_formatter/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;