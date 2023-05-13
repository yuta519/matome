import { createHotContext } from '../../../../node_modules/vite/dist/client/client.mjs.js';
import exports from '../../../../vendor/react-refresh.js';
import react_default from '../../../../vendor/deps/react.js';
import { useAppSelector, useAppDispatch } from '../../../app/hooks.ts.js';
import { selectCount, decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd } from './counterSlice.ts.js';
import styles from './Counter.module.css.js';
import react_jsx_dev_runtime_default from '../../../../vendor/deps/react_jsx-dev-runtime.js';

import.meta.hot = createHotContext("/src/content/features/counter/Counter.tsx.js");let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    exports.register(type, "/Users/yuta519/work/matome/src/content/features/counter/Counter.tsx " + id);
  };
  window.$RefreshSig$ = exports.createSignatureFunctionForTransform;
}
var _jsxFileName = "/Users/yuta519/work/matome/src/content/features/counter/Counter.tsx", _s = $RefreshSig$();
 const useState = react_default["useState"];
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
function Counter() {
  _s();
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;
  return /* @__PURE__ */ _jsxDEV("div", {
    children: [/* @__PURE__ */ _jsxDEV("div", {
      className: styles.row,
      children: [/* @__PURE__ */ _jsxDEV("button", {
        className: styles.button,
        "aria-label": "Decrement value",
        onClick: () => dispatch(decrement()),
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("span", {
        className: styles.value,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("button", {
        className: styles.button,
        "aria-label": "Increment value",
        onClick: () => dispatch(increment()),
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /* @__PURE__ */ _jsxDEV("div", {
      className: styles.row,
      children: [/* @__PURE__ */ _jsxDEV("input", {
        className: styles.textbox,
        "aria-label": "Set increment amount",
        value: incrementAmount,
        onChange: (e) => setIncrementAmount(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("button", {
        className: styles.button,
        onClick: () => dispatch(incrementByAmount(incrementValue)),
        children: "Add Amount"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("button", {
        className: styles.asyncButton,
        onClick: () => dispatch(incrementAsync(incrementValue)),
        children: "Add Async"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("button", {
        className: styles.button,
        onClick: () => dispatch(incrementIfOdd(incrementValue)),
        children: "Add If Odd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
_s(Counter, "xPXvS5jhiKTyFS+7srqCbzY5J9A=", false, function() {
  return [useAppSelector, useAppDispatch];
});
_c = Counter;
var _c;
$RefreshReg$(_c, "Counter");
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

export { Counter };
