"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDisplayName = _interopRequireDefault(require("./getDisplayName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return "".concat(hocName, "(").concat((0, _getDisplayName.default)(BaseComponent), ")");
};

var _default = wrapDisplayName;
exports.default = _default;