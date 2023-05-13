import react_dom_client_default from '../../vendor/deps/react-dom_client.js';
import { Provider as Provider_default } from '../../vendor/deps/react-redux.js';
import { proxyStore } from '../app/proxyStore.ts.js';
import Content from './Content.tsx.js';
import react_jsx_dev_runtime_default from '../../vendor/deps/react_jsx-dev-runtime.js';

var _jsxFileName = "/Users/yuta519/work/matome/src/content/index.tsx";
 const createRoot = react_dom_client_default["createRoot"];
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
withProxyStore(/* @__PURE__ */ _jsxDEV(Content, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 16
}, this), proxyStore).then((component) => {
  const container = document.createElement("my-extension-root");
  document.body.append(container);
  createRoot(container).render(component);
});
async function withProxyStore(children, proxyStore) {
  return proxyStore.ready().then(() => {
    return /* @__PURE__ */ _jsxDEV(Provider_default, {
      store: proxyStore,
      children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, this);
  });
}
