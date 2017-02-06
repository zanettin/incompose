'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @file   flattenProps
 * @desc   renames the owner prop
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-06
 */

/**
 * @param   {string}    - prop name to flatten
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
exports.default = function (propName) {
  return function (component) {
    return function (props) {

      var newProps = props[propName] && _typeof(props[propName]) === 'object' ? _extends({}, props, props[propName]) : _extends({}, props);

      if (newProps[propName]) {
        delete newProps[propName];
      }

      return component(newProps);
    };
  };
};