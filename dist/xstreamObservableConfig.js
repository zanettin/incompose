'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = require('symbol-observable');

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

var _xstream = require('xstream');

var _xstream2 = _interopRequireDefault(_xstream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author recompose (https://github.com/acdlite/recompose)
                                                                                                                                                                                                                   */

// eslint-disable-line import/no-unresolved

var noop = function noop() {};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return _xstream2.default.create({
      subscription: null,
      start: function start(listener) {
        this.subscription = observable.subscribe(listener);
      },
      stop: function stop() {
        this.subscription.unsubscribe();
      }
    });
  },
  toESObservable: function toESObservable(stream) {
    return _defineProperty({
      subscribe: function subscribe(observer) {
        var listener = {
          next: observer.next || noop,
          error: observer.error || noop,
          complete: observer.complete || noop
        };
        stream.addListener(listener);
        return {
          unsubscribe: function unsubscribe() {
            return stream.removeListener(listener);
          }
        };
      }
    }, _symbolObservable2.default, function () {
      return this;
    });
  }
};

exports.default = config;