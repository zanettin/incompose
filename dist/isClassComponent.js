'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infernoComponent = require('inferno-component');

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClassComponent = function isClassComponent(ComponentArg) {
  return Boolean(ComponentArg && ComponentArg.prototype && typeof ComponentArg.prototype.render === 'function' && _infernoComponent2.default.isPrototypeOf(ComponentArg));
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = isClassComponent;