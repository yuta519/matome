import { createHotContext } from '../../node_modules/vite/dist/client/client.mjs.js';
import exports from '../../vendor/react-refresh.js';
import './features/counter/index.ts.js';
import react_jsx_dev_runtime_default from '../../vendor/deps/react_jsx-dev-runtime.js';
import { Counter } from './features/counter/Counter.tsx.js';

import.meta.hot = createHotContext("/src/content/Content.tsx.js");let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    exports.register(type, "/Users/yuta519/work/matome/src/content/Content.tsx " + id);
  };
  window.$RefreshSig$ = exports.createSignatureFunctionForTransform;
}
var _jsxFileName = "/Users/yuta519/work/matome/src/content/Content.tsx";
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
const Content = () => {
  return /* @__PURE__ */ _jsxDEV("div", {
    style: {
      position: "fixed",
      zIndex: 999,
      bottom: 0,
      right: 0,
      backgroundColor: "rgb(0 0 0 / 30%)"
    },
    children: [/* @__PURE__ */ _jsxDEV("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      },
      children: "\u30BF\u30A4\u30C8\u30EB\u5909\u66F4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ _jsxDEV(Counter, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, void 0)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, void 0);
};
_c = Content;
var _c;
$RefreshReg$(_c, "Content");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept();
  if (!window.__vite_plugin_react_timeout) {
    window.__vite_plugin_react_timeout = setTimeout(() => {
      window.__vite_plugin_react_timeout = 0;
      exports.performReactRefresh();
    }, 30);
  }
}

export { Content as default };
