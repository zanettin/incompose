'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: _rxjs2.default.Observable.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = config;