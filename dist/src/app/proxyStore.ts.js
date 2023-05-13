import eduardoac_skimlinks_webext_redux_default from '../../vendor/deps/eduardoac-skimlinks_webext-redux.js';
import redux_thunk_default from '../../vendor/deps/redux-thunk.js';

const applyMiddleware = eduardoac_skimlinks_webext_redux_default["applyMiddleware"]; const Store = eduardoac_skimlinks_webext_redux_default["Store"];
const middlewares = [redux_thunk_default];
const proxyStore = applyMiddleware(new Store(), ...middlewares);

export { proxyStore };
