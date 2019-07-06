"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inferno = require("inferno");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file   renameProps
 * @desc   renames the owner prop
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-06
 */

/**
 * @param   {Object}    - config ({oldName : 'newName', a : 'z'})
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
var _default = function _default(config) {
  return function (Component) {
    return function (props) {
      var newProps = Object.keys(props).reduce(function (acc, key) {
        acc[config[key] || key] = props[key];
        return acc;
      }, {});
      return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, Component, _objectSpread({}, newProps)));
    };
  };
};

exports.default = _default;