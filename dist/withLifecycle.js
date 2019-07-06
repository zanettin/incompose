"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
var _default = function _default(lifecycles) {
  return function (Component) {
    // avoid breaking changes by mapping class lifecycles to functional lifecycles
    var functionalLifecycles = {};

    if (lifecycles.componentWillMount) {
      functionalLifecycles.onComponentWillMount = lifecycles.componentWillMount;
    }

    if (lifecycles.componentDidMount) {
      functionalLifecycles.onComponentDidMount = lifecycles.componentDidMount;
    }

    if (lifecycles.shouldComponentUpdate) {
      functionalLifecycles.onComponentShouldUpdate = lifecycles.shouldComponentUpdate;
    }

    if (lifecycles.componentWillUpdate) {
      functionalLifecycles.onComponentWillUpdate = lifecycles.componentWillUpdate;
    }

    if (lifecycles.componentDidUpdate) {
      functionalLifecycles.onComponentDidUpdate = lifecycles.componentDidUpdate;
    }

    if (lifecycles.componentWillUnmount) {
      functionalLifecycles.onComponentWillUnmount = lifecycles.componentWillUnmount;
    }

    Component.defaultHooks = _objectSpread({}, functionalLifecycles);
    return Component;
  };
};

exports.default = _default;