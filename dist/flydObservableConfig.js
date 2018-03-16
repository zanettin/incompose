function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import flyd from 'flyd'; // eslint-disable-line import/no-unresolved

var noop = function noop() {};

var config = {
  fromESObservable: function fromESObservable(observable) {
    var stream = flyd.stream();

    var _observable$subscribe = observable.subscribe({
      next: function next(value) {
        return stream(value);
      },
      error: function error(_error) {
        return stream({ error: _error });
      },
      complete: function complete() {
        return stream.end(true);
      }
    }),
        unsubscribe = _observable$subscribe.unsubscribe;

    flyd.on(unsubscribe, stream.end);
    return stream;
  },

  toESObservable: function toESObservable(stream) {
    return _defineProperty({
      subscribe: function subscribe(observer) {
        var sub = flyd.on(observer.next || noop, stream);
        flyd.on(function (_) {
          return observer.complete();
        }, sub.end); // eslint-disable-line no-unused-vars
        return {
          unsubscribe: function unsubscribe() {
            return sub.end(true);
          }
        };
      }
    }, $$observable, function () {
      return this;
    });
  }
};

export default config;