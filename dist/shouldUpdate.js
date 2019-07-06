"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file   shouldUpdate
 * @desc   use 'onComponentShouldUpdate' lifecycle hook to determine if component should update or not
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 */
// import withLifecycle from './withLifecycle';

/**
 * @param   {Function}  - onComponentShouldUpdate - should update check function returning a boolean value
 * @param   {Function}  - component
 * @returns {Function}
 */
var _default = function _default(onComponentShouldUpdate) {
  return function (Component) {
    Component.defaultHooks = {
      onComponentShouldUpdate: onComponentShouldUpdate
    };
    return Component;
  };
};

exports.default = _default;