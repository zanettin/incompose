'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

// todo: find a way to detect inferno classes!! prototype.render is a indice
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};

exports.default = isClassComponent;