"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose = _interopRequireDefault(require("./compose"));

var _shouldUpdate = _interopRequireDefault(require("./shouldUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var withUpdatePolicy = (0, _shouldUpdate.default)(function (props, nextProps) {
  // handle invalid props
  if (!props || !nextProps || _typeof(props) !== 'object' || _typeof(nextProps) !== 'object') {
    return true;
  }

  var keys = Object.keys(props);

  for (var i = 0; i < keys.length; i += 1) {
    if (props[keys[i]] !== nextProps[keys[i]]) {
      return true; // just update if we find a shallow diff
    }
  }

  return false;
});
/**
 * @param   {Function} component
 * @returns {Function}
 */

var _default = function _default(Component) {
  return (0, _compose.default)(withUpdatePolicy)(Component);
};

exports.default = _default;