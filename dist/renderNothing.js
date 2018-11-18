"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file   renderNothing
 * @desc   a higher order component that always renders null
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-07
 */
var _default = function _default() {
  return function () {
    return null;
  };
};

exports.default = _default;