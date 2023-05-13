import { __commonJS } from './chunk-TWLJ45QX.js';

// node_modules/lodash.assignin/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.assignin/index.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeMax = Math.max;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseRest(func, start) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = assignIn;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/constants/index.js
var require_constants = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_PORT_NAME = exports.PATCH_STATE_TYPE = exports.STATE_TYPE = exports.FETCH_STATE_TYPE = exports.DISPATCH_TYPE = void 0;
    var DISPATCH_TYPE = "chromex.dispatch";
    exports.DISPATCH_TYPE = DISPATCH_TYPE;
    var FETCH_STATE_TYPE = "chromex.fetch_state";
    exports.FETCH_STATE_TYPE = FETCH_STATE_TYPE;
    var STATE_TYPE = "chromex.state";
    exports.STATE_TYPE = STATE_TYPE;
    var PATCH_STATE_TYPE = "chromex.patch_state";
    exports.PATCH_STATE_TYPE = PATCH_STATE_TYPE;
    var DEFAULT_PORT_NAME = "chromex.port_name";
    exports.DEFAULT_PORT_NAME = DEFAULT_PORT_NAME;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/serialization.js
var require_serialization = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/serialization.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.withSerializer = exports.withDeserializer = exports.noop = void 0;
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var noop = function noop2(payload) {
      return payload;
    };
    exports.noop = noop;
    var transformPayload = function transformPayload2(message) {
      var transformer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      return _objectSpread({}, message, message.payload ? {
        payload: transformer(message.payload)
      } : {});
    };
    var deserializeListener = function deserializeListener2(listener) {
      var deserializer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var shouldDeserialize = arguments.length > 2 ? arguments[2] : void 0;
      if (shouldDeserialize) {
        return function(message) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (shouldDeserialize.apply(void 0, [message].concat(args))) {
            return listener.apply(void 0, [transformPayload(message, deserializer)].concat(args));
          }
          return listener.apply(void 0, [message].concat(args));
        };
      }
      return function(message) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        return listener.apply(void 0, [transformPayload(message, deserializer)].concat(args));
      };
    };
    var withDeserializer = function withDeserializer2() {
      var deserializer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : noop;
      return function(addListenerFn) {
        return function(listener, shouldDeserialize) {
          return addListenerFn(deserializeListener(listener, deserializer, shouldDeserialize));
        };
      };
    };
    exports.withDeserializer = withDeserializer;
    var withSerializer = function withSerializer2() {
      var serializer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : noop;
      return function(sendMessageFn) {
        var messageArgIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return function() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          if (args.length <= messageArgIndex) {
            throw new Error("Message in request could not be serialized. " + "Expected message in position ".concat(messageArgIndex, " but only received ").concat(args.length, " args."));
          }
          args[messageArgIndex] = transformPayload(args[messageArgIndex], serializer);
          return sendMessageFn.apply(void 0, args);
        };
      };
    };
    exports.withSerializer = withSerializer;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/constants.js
var require_constants2 = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DIFF_STATUS_ARRAY_UPDATED = exports.DIFF_STATUS_KEYS_UPDATED = exports.DIFF_STATUS_REMOVED = exports.DIFF_STATUS_UPDATED = void 0;
    var DIFF_STATUS_UPDATED = "updated";
    exports.DIFF_STATUS_UPDATED = DIFF_STATUS_UPDATED;
    var DIFF_STATUS_REMOVED = "removed";
    exports.DIFF_STATUS_REMOVED = DIFF_STATUS_REMOVED;
    var DIFF_STATUS_KEYS_UPDATED = "updated_keys";
    exports.DIFF_STATUS_KEYS_UPDATED = DIFF_STATUS_KEYS_UPDATED;
    var DIFF_STATUS_ARRAY_UPDATED = "updated_array";
    exports.DIFF_STATUS_ARRAY_UPDATED = DIFF_STATUS_ARRAY_UPDATED;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/shallowDiff/patch.js
var require_patch = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/shallowDiff/patch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var _constants = require_constants2();
    function _default(obj, difference) {
      var newObj = Object.assign({}, obj);
      difference.forEach(function(_ref) {
        var change = _ref.change, key = _ref.key, value = _ref.value;
        switch (change) {
          case _constants.DIFF_STATUS_UPDATED:
            newObj[key] = value;
            break;
          case _constants.DIFF_STATUS_REMOVED:
            Reflect.deleteProperty(newObj, key);
            break;
          default:
        }
      });
      return newObj;
    }
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/util.js
var require_util = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getBrowserAPI = getBrowserAPI;
    function getBrowserAPI() {
      var api;
      try {
        api = self.chrome || self.browser || browser;
      } catch (error) {
        api = browser;
      }
      if (!api) {
        throw new Error("Browser API is not present");
      }
      return api;
    }
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/store/Store.js
var require_Store = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/store/Store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _lodash = _interopRequireDefault(require_lodash());
    var _constants = require_constants();
    var _serialization = require_serialization();
    var _patch = _interopRequireDefault(require_patch());
    var _util = require_util();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var backgroundErrPrefix = "\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n";
    var defaultOpts = {
      portName: _constants.DEFAULT_PORT_NAME,
      state: {},
      extensionId: null,
      serializer: _serialization.noop,
      deserializer: _serialization.noop,
      patchStrategy: _patch.default
    };
    var Store = function() {
      function Store2() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultOpts, _ref$portName = _ref.portName, portName = _ref$portName === void 0 ? defaultOpts.portName : _ref$portName, _ref$state = _ref.state, state = _ref$state === void 0 ? defaultOpts.state : _ref$state, _ref$extensionId = _ref.extensionId, extensionId = _ref$extensionId === void 0 ? defaultOpts.extensionId : _ref$extensionId, _ref$serializer = _ref.serializer, serializer = _ref$serializer === void 0 ? defaultOpts.serializer : _ref$serializer, _ref$deserializer = _ref.deserializer, deserializer = _ref$deserializer === void 0 ? defaultOpts.deserializer : _ref$deserializer, _ref$patchStrategy = _ref.patchStrategy, patchStrategy = _ref$patchStrategy === void 0 ? defaultOpts.patchStrategy : _ref$patchStrategy;
        _classCallCheck(this, Store2);
        if (!portName) {
          throw new Error("portName is required in options");
        }
        if (typeof serializer !== "function") {
          throw new Error("serializer must be a function");
        }
        if (typeof deserializer !== "function") {
          throw new Error("deserializer must be a function");
        }
        if (typeof patchStrategy !== "function") {
          throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");
        }
        this.portName = portName;
        this.readyResolved = false;
        this.readyPromise = new Promise(function(resolve) {
          return _this.readyResolve = resolve;
        });
        this.browserAPI = (0, _util.getBrowserAPI)();
        this.extensionId = extensionId;
        this.initializeStore = this.initializeStore.bind(this);
        this.browserAPI.runtime.sendMessage(this.extensionId, {
          type: _constants.FETCH_STATE_TYPE,
          portName
        }, void 0, this.initializeStore);
        this.deserializer = deserializer;
        this.serializedPortListener = (0, _serialization.withDeserializer)(deserializer)(function() {
          var _this$browserAPI$runt;
          return (_this$browserAPI$runt = _this.browserAPI.runtime.onMessage).addListener.apply(_this$browserAPI$runt, arguments);
        });
        this.serializedMessageSender = (0, _serialization.withSerializer)(serializer)(function() {
          var _this$browserAPI$runt2;
          return (_this$browserAPI$runt2 = _this.browserAPI.runtime).sendMessage.apply(_this$browserAPI$runt2, arguments);
        }, 1);
        this.listeners = [];
        this.state = state;
        this.patchStrategy = patchStrategy;
        this.serializedPortListener(function(message) {
          if (message.portName === _this.portName) {
            switch (message.type) {
              case _constants.STATE_TYPE:
                _this.replaceState(message.payload);
                if (!_this.readyResolved) {
                  _this.readyResolved = true;
                  _this.readyResolve();
                }
                break;
              case _constants.PATCH_STATE_TYPE:
                _this.patchState(message.payload);
                break;
              default:
            }
          }
        });
        this.dispatch = this.dispatch.bind(this);
      }
      _createClass(Store2, [{
        key: "ready",
        value: function ready() {
          var cb = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          if (cb !== null) {
            return this.readyPromise.then(cb);
          }
          return this.readyPromise;
        }
      }, {
        key: "subscribe",
        value: function subscribe(listener) {
          var _this2 = this;
          this.listeners.push(listener);
          return function() {
            _this2.listeners = _this2.listeners.filter(function(l) {
              return l !== listener;
            });
          };
        }
      }, {
        key: "patchState",
        value: function patchState(difference) {
          this.state = this.patchStrategy(this.state, difference);
          this.listeners.forEach(function(l) {
            return l();
          });
        }
      }, {
        key: "replaceState",
        value: function replaceState(state) {
          this.state = state;
          this.listeners.forEach(function(l) {
            return l();
          });
        }
      }, {
        key: "getState",
        value: function getState() {
          return this.state;
        }
      }, {
        key: "replaceReducer",
        value: function replaceReducer() {
          return;
        }
      }, {
        key: "dispatch",
        value: function dispatch(data) {
          var _this3 = this;
          return new Promise(function(resolve, reject) {
            _this3.serializedMessageSender(_this3.extensionId, {
              type: _constants.DISPATCH_TYPE,
              portName: _this3.portName,
              payload: data
            }, null, function(resp) {
              if (!resp) {
                var _error = _this3.browserAPI.runtime.lastError;
                var bgErr = new Error("".concat(backgroundErrPrefix).concat(_error));
                reject((0, _lodash.default)(bgErr, _error));
                return;
              }
              var error = resp.error, value = resp.value;
              if (error) {
                var _bgErr = new Error("".concat(backgroundErrPrefix).concat(error));
                reject((0, _lodash.default)(_bgErr, error));
              } else {
                resolve(value && value.payload);
              }
            });
          });
        }
      }, {
        key: "initializeStore",
        value: function initializeStore(message) {
          if (message && message.type === _constants.FETCH_STATE_TYPE) {
            this.replaceState(message.payload);
            if (!this.readyResolved) {
              this.readyResolved = true;
              this.readyResolve();
            }
          }
        }
      }]);
      return Store2;
    }();
    var _default = Store;
    exports.default = _default;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/store/applyMiddleware.js
var require_applyMiddleware = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/store/applyMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = applyMiddleware;
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function compose() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }
      if (funcs.length === 0) {
        return function(arg) {
          return arg;
        };
      }
      if (funcs.length === 1) {
        return funcs[0];
      }
      return funcs.reduce(function(a, b) {
        return function() {
          return a(b.apply(void 0, arguments));
        };
      });
    }
    function applyMiddleware(store) {
      for (var _len2 = arguments.length, middlewares = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        middlewares[_key2 - 1] = arguments[_key2];
      }
      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var middlewareAPI = {
        getState: store.getState.bind(store),
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      middlewares = (middlewares || []).map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, _toConsumableArray(middlewares))(store.dispatch);
      store.dispatch = _dispatch;
      return store;
    }
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/shallowDiff/diff.js
var require_diff = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/strategies/shallowDiff/diff.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = shallowDiff;
    var _constants = require_constants2();
    function shallowDiff(oldObj, newObj) {
      var difference = [];
      Object.keys(newObj).forEach(function(key) {
        if (oldObj[key] !== newObj[key]) {
          difference.push({
            key,
            value: newObj[key],
            change: _constants.DIFF_STATUS_UPDATED
          });
        }
      });
      Object.keys(oldObj).forEach(function(key) {
        if (!newObj.hasOwnProperty(key)) {
          difference.push({
            key,
            change: _constants.DIFF_STATUS_REMOVED
          });
        }
      });
      return difference;
    }
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/wrap-store/wrapStore.js
var require_wrapStore = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/wrap-store/wrapStore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _serialization = require_serialization();
    var _util = require_util();
    var _diff = _interopRequireDefault(require_diff());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var promiseResponder = function promiseResponder2(dispatchResult, send) {
      Promise.resolve(dispatchResult).then(function(res) {
        send({
          error: null,
          value: res
        });
      }).catch(function(err) {
        console.error("error dispatching result:", err);
        send({
          error: err.message,
          value: null
        });
      });
    };
    var defaultOpts = {
      portName: _constants.DEFAULT_PORT_NAME,
      dispatchResponder: promiseResponder,
      serializer: _serialization.noop,
      deserializer: _serialization.noop,
      diffStrategy: _diff.default
    };
    var _default = function _default2(store) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOpts, _ref$portName = _ref.portName, portName = _ref$portName === void 0 ? defaultOpts.portName : _ref$portName, _ref$dispatchResponde = _ref.dispatchResponder, dispatchResponder = _ref$dispatchResponde === void 0 ? defaultOpts.dispatchResponder : _ref$dispatchResponde, _ref$serializer = _ref.serializer, serializer = _ref$serializer === void 0 ? defaultOpts.serializer : _ref$serializer, _ref$deserializer = _ref.deserializer, deserializer = _ref$deserializer === void 0 ? defaultOpts.deserializer : _ref$deserializer, _ref$diffStrategy = _ref.diffStrategy, diffStrategy = _ref$diffStrategy === void 0 ? defaultOpts.diffStrategy : _ref$diffStrategy;
      if (!portName) {
        throw new Error("portName is required in options");
      }
      if (typeof serializer !== "function") {
        throw new Error("serializer must be a function");
      }
      if (typeof deserializer !== "function") {
        throw new Error("deserializer must be a function");
      }
      if (typeof diffStrategy !== "function") {
        throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");
      }
      var browserAPI = (0, _util.getBrowserAPI)();
      var dispatchResponse = function dispatchResponse2(request, sender, sendResponse) {
        if (request.type === _constants.DISPATCH_TYPE && request.portName === portName) {
          var action = Object.assign({}, request.payload, {
            _sender: sender
          });
          var dispatchResult = null;
          try {
            dispatchResult = store.dispatch(action);
          } catch (e) {
            dispatchResult = Promise.reject(e.message);
            console.error(e);
          }
          dispatchResponder(dispatchResult, sendResponse);
          return true;
        }
      };
      var serializedMessagePoster = (0, _serialization.withSerializer)(serializer)(function() {
        var _browserAPI$runtime;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var onErrorCallback = function onErrorCallback2() {
          if (browserAPI.runtime.lastError) {
          }
        };
        (_browserAPI$runtime = browserAPI.runtime).sendMessage.apply(_browserAPI$runtime, args.concat([onErrorCallback]));
        return browserAPI.tabs.query({}, function(tabs) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _browserAPI$tabs;
              var tab = _step.value;
              (_browserAPI$tabs = browserAPI.tabs).sendMessage.apply(_browserAPI$tabs, [tab.id].concat(args, [onErrorCallback]));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      });
      var currentState = store.getState();
      var patchState = function patchState2() {
        var newState = store.getState();
        var diff = diffStrategy(currentState, newState);
        if (diff.length) {
          currentState = newState;
          serializedMessagePoster({
            type: _constants.PATCH_STATE_TYPE,
            payload: diff,
            portName
          });
        }
      };
      store.subscribe(patchState);
      serializedMessagePoster({
        type: _constants.STATE_TYPE,
        payload: currentState,
        portName
      });
      var withPayloadDeserializer = (0, _serialization.withDeserializer)(deserializer);
      var shouldDeserialize = function shouldDeserialize2(request) {
        return request.type === _constants.DISPATCH_TYPE && request.portName === portName;
      };
      browserAPI.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        var state = store.getState();
        if (request.type === _constants.FETCH_STATE_TYPE && request.portName === portName) {
          sendResponse({
            type: _constants.FETCH_STATE_TYPE,
            payload: state
          });
        }
      });
      withPayloadDeserializer(function() {
        var _browserAPI$runtime$o;
        return (_browserAPI$runtime$o = browserAPI.runtime.onMessage).addListener.apply(_browserAPI$runtime$o, arguments);
      })(dispatchResponse, shouldDeserialize);
      if (browserAPI.runtime.onMessageExternal) {
        withPayloadDeserializer(function() {
          var _browserAPI$runtime$o2;
          return (_browserAPI$runtime$o2 = browserAPI.runtime.onMessageExternal).addListener.apply(_browserAPI$runtime$o2, arguments);
        })(dispatchResponse, shouldDeserialize);
      } else {
        console.warn("runtime.onMessageExternal is not supported");
      }
    };
    exports.default = _default;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/alias/alias.js
var require_alias = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/alias/alias.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2(aliases) {
      return function() {
        return function(next) {
          return function(action) {
            var alias = aliases[action.type];
            if (alias) {
              return next(alias(action));
            }
            return next(action);
          };
        };
      };
    };
    exports.default = _default;
  }
});

// node_modules/@eduardoac-skimlinks/webext-redux/lib/index.js
var require_lib = __commonJS({
  "node_modules/@eduardoac-skimlinks/webext-redux/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Store", {
      enumerable: true,
      get: function get() {
        return _Store.default;
      }
    });
    Object.defineProperty(exports, "applyMiddleware", {
      enumerable: true,
      get: function get() {
        return _applyMiddleware.default;
      }
    });
    Object.defineProperty(exports, "wrapStore", {
      enumerable: true,
      get: function get() {
        return _wrapStore.default;
      }
    });
    Object.defineProperty(exports, "alias", {
      enumerable: true,
      get: function get() {
        return _alias.default;
      }
    });
    var _Store = _interopRequireDefault(require_Store());
    var _applyMiddleware = _interopRequireDefault(require_applyMiddleware());
    var _wrapStore = _interopRequireDefault(require_wrapStore());
    var _alias = _interopRequireDefault(require_alias());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// dep:@eduardoac-skimlinks_webext-redux
var eduardoac_skimlinks_webext_redux_default = require_lib();

export { eduardoac_skimlinks_webext_redux_default as default };
