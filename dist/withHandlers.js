"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file   withHandlers
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-07
 */
var _default = function _default(handlerCreators) {
  return function (component) {
    return function (props) {
      var composed = Object.keys(handlerCreators).reduce(function (acc, key) {
        acc[key] = handlerCreators[key](props);
        return acc;
      }, {});
      return component(_objectSpread({}, props, composed));
    };
  };
};

exports.default = _default;