'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author recompose (https://github.com/acdlite/recompose)
 * @flow
 */

var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;