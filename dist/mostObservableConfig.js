'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _most = require('most');

// eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: _most.from || _most.Stream.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = config;