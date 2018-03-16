'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = require('inferno');

var isClassComponent = function isClassComponent(ComponentArg) {
  return Boolean(ComponentArg && ComponentArg.prototype && typeof ComponentArg.prototype.render === 'function' && _inferno.Component.isPrototypeOf(ComponentArg));
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = isClassComponent;