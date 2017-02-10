"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

var pick = function pick(obj, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

exports.default = pick;