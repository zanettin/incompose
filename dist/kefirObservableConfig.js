"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _kefir = _interopRequireDefault(require("kefir"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
// eslint-disable-line import/no-unresolved
var config = {
  fromESObservable: _kefir.default.fromESObservable,
  toESObservable: function toESObservable(stream) {
    return stream.toESObservable();
  }
};
var _default = config;
exports.default = _default;