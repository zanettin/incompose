"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _symbolObservable = _interopRequireDefault(require("symbol-observable"));

var _flyd = _interopRequireDefault(require("flyd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-line import/no-unresolved
var noop = function noop() {};

var config = {
  fromESObservable: function fromESObservable(observable) {
    var stream = _flyd.default.stream();

    var _observable$subscribe = observable.subscribe({
      next: function next(value) {
        return stream(value);
      },
      error: function error(_error) {
        return stream({
          error: _error
        });
      },
      complete: function complete() {
        return stream.end(true);
      }
    }),
        unsubscribe = _observable$subscribe.unsubscribe;

    _flyd.default.on(unsubscribe, stream.end);

    return stream;
  },
  toESObservable: function toESObservable(stream) {
    return _defineProperty({
      subscribe: function subscribe(observer) {
        var sub = _flyd.default.on(observer.next || noop, stream);

        _flyd.default.on(function (_) {
          return observer.complete();
        }, sub.end); // eslint-disable-line no-unused-vars


        return {
          unsubscribe: function unsubscribe() {
            return sub.end(true);
          }
        };
      }
    }, _symbolObservable.default, function () {
      return this;
    });
  }
};
var _default = config;
exports.default = _default;