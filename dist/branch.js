"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose = _interopRequireDefault(require("./compose"));

var _createHelper = _interopRequireDefault(require("./createHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
var identity = function identity(Component) {
  return Component;
};

var branch = function branch(test, left) {
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return function (BaseComponent) {
    var leftFactory;
    var rightFactory;
    return function (props) {
      if (test(props)) {
        leftFactory = leftFactory || (0, _compose.default)(left)(BaseComponent);
        return leftFactory(props);
      }

      rightFactory = rightFactory || (0, _compose.default)(right)(BaseComponent);
      return rightFactory(props);
    };
  };
};

var _default = (0, _createHelper.default)(branch, 'branch');

exports.default = _default;