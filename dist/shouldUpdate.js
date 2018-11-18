"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _withLifecycle = _interopRequireDefault(require("./withLifecycle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file   shouldUpdate
 * @desc   use 'onComponentShouldUpdate' lifecycle hook to determine if component should update or not
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 */

/**
 * @param   {Function}  - onComponentShouldUpdate - should update check function returning a boolean value
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
var _default = function _default(onComponentShouldUpdate) {
  return function (component) {
    return function (props) {
      return (0, _withLifecycle.default)({
        onComponentShouldUpdate: onComponentShouldUpdate
      })(component)(props);
    };
  };
};

exports.default = _default;