"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @file   renderNothing
 * @desc   a higher order component that always renders null
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-07
 */

exports.default = function () {
  return function () {
    return null;
  };
};