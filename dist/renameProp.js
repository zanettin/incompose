"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file   renameProp
 * @desc   renames the owner prop
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-06
 */

/**
 * @param   {string}    - old name
 * @param   {string}    - new name
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
var _default = function _default(oldName, newName) {
  return function (component) {
    return function (props) {
      var newProps = props;

      if (props[oldName]) {
        newProps[newName] = props[oldName];
        delete newProps[oldName];
      }

      return component(newProps);
    };
  };
};

exports.default = _default;