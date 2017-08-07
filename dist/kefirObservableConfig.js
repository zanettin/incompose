'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kefir = require('kefir');

var _kefir2 = _interopRequireDefault(_kefir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: _kefir2.default.fromESObservable,
  toESObservable: function toESObservable(stream) {
    return stream.toESObservable();
  }
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = config;