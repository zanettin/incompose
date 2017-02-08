"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @file   withHandlers
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-07
 */

exports.default = function (handlerCreators) {
  return function (component) {
    return function (props) {

      var composed = Object.keys(handlerCreators).reduce(function (acc, key) {
        acc[key] = handlerCreators[key](props);
        return acc;
      }, {});

      return component(_extends({}, props, composed));
    };
  };
};