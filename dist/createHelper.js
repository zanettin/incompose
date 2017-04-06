'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

/*eslint-env node*/
var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    /* eslint-disable global-require */
    var wrapDisplayName = require('./wrapDisplayName').default;
    /* eslint-enable global-require */

    if (noArgs) {
      return function (BaseComponent) {
        var Component = func(BaseComponent);
        Component.displayName = wrapDisplayName(BaseComponent, helperName);
        return Component;
      };
    }

    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function (BaseComponent) {
        var Component = func.apply(undefined, args)(BaseComponent);
        Component.displayName = wrapDisplayName(BaseComponent, helperName);
        return Component;
      };
    };
  }

  return func;
};

exports.default = createHelper;