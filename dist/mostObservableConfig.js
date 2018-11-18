"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _most = require("most");

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */
// eslint-disable-line import/no-unresolved
var config = {
  fromESObservable: _most.from || _most.Stream.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
};
var _default = config;
exports.default = _default;