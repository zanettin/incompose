"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rxjs = _interopRequireDefault(require("rxjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
// eslint-disable-line import/no-unresolved
var config = {
  fromESObservable: _rxjs.default.Observable.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
};
var _default = config;
exports.default = _default;