'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = require('symbol-observable');

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

var _baconjs = require('baconjs');

var _baconjs2 = _interopRequireDefault(_baconjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author recompose (https://github.com/acdlite/recompose)
                                                                                                                                                                                                                   */

// eslint-disable-line import/no-unresolved

var config = {
  fromESObservable: function fromESObservable(observable) {
    return _baconjs2.default.fromBinder(function (sink) {
      var _observable$subscribe = observable.subscribe({
        next: function next(val) {
          return sink(new _baconjs2.default.Next(val));
        },
        error: function error(err) {
          return sink(new _baconjs2.default.Error(err));
        },
        complete: function complete() {
          return sink(new _baconjs2.default.End());
        }
      }),
          unsubscribe = _observable$subscribe.unsubscribe;

      return unsubscribe;
    });
  },
  toESObservable: function toESObservable(stream) {
    return _defineProperty({
      subscribe: function subscribe(observer) {
        var unsubscribe = stream.subscribe(function (event) {
          if (event.hasValue()) {
            observer.next(event.value());
          } else if (event.isError()) {
            observer.error(event.error);
          } else if (event.isEnd()) {
            observer.complete();
          }
        });
        return { unsubscribe: unsubscribe };
      }
    }, _symbolObservable2.default, function () {
      return this;
    });
  }
};

exports.default = config;