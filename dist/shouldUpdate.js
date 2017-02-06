'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withLifecycle = require('./withLifecycle');

var _withLifecycle2 = _interopRequireDefault(_withLifecycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param   {Function}  - onComponentShouldUpdate - should update check function returning a boolean value
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
exports.default = function (onComponentShouldUpdate) {
  return function (component) {
    return function (props) {
      return (0, _withLifecycle2.default)({ onComponentShouldUpdate: onComponentShouldUpdate })(component)(props);
    };
  };
}; /**
    * @file   shouldUpdate
    * @desc   use 'onComponentShouldUpdate' lifecycle hook to determine if component should update or not
    * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
    * @date   2017-01-06
    */