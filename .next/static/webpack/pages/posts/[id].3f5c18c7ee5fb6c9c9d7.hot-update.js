webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./components/date.js":
/*!****************************!*\
  !*** ./components/date.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Date; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\nvar _jsxFileName = \"/Users/jay/dev/nodejs-getting-started/sleep/nextjs-blog/components/date.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Date(_ref) {\n  var dateString = _ref.dateString;\n  var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"parseISO\"])(dateString);\n  return __jsx(\"time\", {\n    dateTime: dateString,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 12\n    }\n  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"format\"])(date, 'LLLL d, yyyy'));\n}\n_c = Date;\n\nvar _c;\n\n$RefreshReg$(_c, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXRlLmpzP2ViOTEiXSwibmFtZXMiOlsiRGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwicGFyc2VJU08iLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULE9BQThCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3pDLE1BQU1DLElBQUksR0FBR0MseURBQVEsQ0FBQ0YsVUFBRCxDQUFyQjtBQUNBLFNBQU87QUFBTSxZQUFRLEVBQUVBLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJHLHVEQUFNLENBQUNGLElBQUQsRUFBTyxjQUFQLENBQW5DLENBQVA7QUFDSDtLQUh1QkYsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZSh7IGRhdGVTdHJpbmcgfSkge1xuICAgIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxuICAgIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTCBkLCB5eXl5Jyl9PC90aW1lPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/date.js\n");

/***/ }),

/***/ "./node_modules/bail/index.js":
false,

/***/ "./node_modules/extend/index.js":
false,

/***/ "./node_modules/is-plain-obj/index.js":
false,

/***/ "./node_modules/longest-streak/index.js":
false,

/***/ "./node_modules/mdast-util-from-markdown/dist/index.js":
false,

/***/ "./node_modules/mdast-util-from-markdown/index.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/index.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/blockquote.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/break.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/code.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/definition.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/emphasis.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/heading.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/html.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/image-reference.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/image.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/index.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/link-reference.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/link.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/paragraph.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/root.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/strong.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/text.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/index.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/join.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/unsafe.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/association.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-fence.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-quote.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-rule.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-strong.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js":
false,

/***/ "./node_modules/mdast-util-to-markdown/lib/util/safe.js":
false,

/***/ "./node_modules/mdast-util-to-string/index.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-alpha.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-alphanumeric.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-atext.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-control.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-digit.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-hex-digit.js":
false,

/***/ "./node_modules/micromark/dist/character/ascii-punctuation.js":
false,

/***/ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js":
false,

/***/ "./node_modules/micromark/dist/character/markdown-line-ending.js":
false,

/***/ "./node_modules/micromark/dist/character/markdown-space.js":
false,

/***/ "./node_modules/micromark/dist/character/unicode-punctuation.js":
false,

/***/ "./node_modules/micromark/dist/character/unicode-whitespace.js":
false,

/***/ "./node_modules/micromark/dist/constant/assign.js":
false,

/***/ "./node_modules/micromark/dist/constant/from-char-code.js":
false,

/***/ "./node_modules/micromark/dist/constant/has-own-property.js":
false,

/***/ "./node_modules/micromark/dist/constant/html-block-names.js":
false,

/***/ "./node_modules/micromark/dist/constant/html-raw-names.js":
false,

/***/ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js":
false,

/***/ "./node_modules/micromark/dist/constructs.js":
false,

/***/ "./node_modules/micromark/dist/initialize/content.js":
false,

/***/ "./node_modules/micromark/dist/initialize/document.js":
false,

/***/ "./node_modules/micromark/dist/initialize/flow.js":
false,

/***/ "./node_modules/micromark/dist/initialize/text.js":
false,

/***/ "./node_modules/micromark/dist/parse.js":
false,

/***/ "./node_modules/micromark/dist/postprocess.js":
false,

/***/ "./node_modules/micromark/dist/preprocess.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/attention.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/autolink.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/block-quote.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/character-escape.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/character-reference.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/code-fenced.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/code-indented.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/code-text.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/content.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/definition.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/factory-destination.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/factory-label.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/factory-space.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/factory-title.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/factory-whitespace.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/hard-break-escape.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/heading-atx.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/html-flow.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/html-text.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/label-end.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/label-start-image.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/label-start-link.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/line-ending.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/list.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/partial-blank-line.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/setext-underline.js":
false,

/***/ "./node_modules/micromark/dist/tokenize/thematic-break.js":
false,

/***/ "./node_modules/micromark/dist/util/chunked-splice.js":
false,

/***/ "./node_modules/micromark/dist/util/classify-character.js":
false,

/***/ "./node_modules/micromark/dist/util/combine-extensions.js":
false,

/***/ "./node_modules/micromark/dist/util/create-tokenizer.js":
false,

/***/ "./node_modules/micromark/dist/util/miniflat.js":
false,

/***/ "./node_modules/micromark/dist/util/move-point.js":
false,

/***/ "./node_modules/micromark/dist/util/normalize-identifier.js":
false,

/***/ "./node_modules/micromark/dist/util/prefix-size.js":
false,

/***/ "./node_modules/micromark/dist/util/regex-check.js":
false,

/***/ "./node_modules/micromark/dist/util/resolve-all.js":
false,

/***/ "./node_modules/micromark/dist/util/safe-from-int.js":
false,

/***/ "./node_modules/micromark/dist/util/serialize-chunks.js":
false,

/***/ "./node_modules/micromark/dist/util/shallow.js":
false,

/***/ "./node_modules/micromark/dist/util/size-chunks.js":
false,

/***/ "./node_modules/micromark/dist/util/slice-chunks.js":
false,

/***/ "./node_modules/micromark/dist/util/subtokenize.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/remark-parse/index.js":
false,

/***/ "./node_modules/remark-stringify/index.js":
false,

/***/ "./node_modules/remark/index.js":
false,

/***/ "./node_modules/repeat-string/index.js":
false,

/***/ "./node_modules/replace-ext/index.js":
false,

/***/ "./node_modules/trough/index.js":
false,

/***/ "./node_modules/trough/wrap.js":
false,

/***/ "./node_modules/unified/index.js":
false,

/***/ "./node_modules/unified/node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/unist-util-stringify-position/index.js":
false,

/***/ "./node_modules/vfile-message/index.js":
false,

/***/ "./node_modules/vfile/core.js":
false,

/***/ "./node_modules/vfile/index.js":
false,

/***/ "./node_modules/vfile/node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/zwitch/index.js":
false

})