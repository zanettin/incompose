"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file   defaultProps
 * @desc   sets default values for owner props
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 */

/**
 * @param   {Object}    - default props config
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
var _default = function _default(config) {
  return function (component) {
    return function (props) {
      return component(_objectSpread({}, config, props));
    };
  };
};

exports.default = _default;