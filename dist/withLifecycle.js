'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @file   withLifecycle
                                                                                                                                                                                                                                                                   * @desc   use the lifecycle hooks of functional inferno components and make them usable inside of the component
                                                                                                                                                                                                                                                                   * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
                                                                                                                                                                                                                                                                   * @date   2017-01-06
                                                                                                                                                                                                                                                                   * @flow
                                                                                                                                                                                                                                                                   */

var _infernoCreateElement = require('inferno-create-element');

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {Object}    - lifecycle config
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */

exports.default = function (config) {
  return function (component) {
    return function (props) {
      return (0, _infernoCreateElement2.default)(component, _extends({}, props, config));
    };
  };
};