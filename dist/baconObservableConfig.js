function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import Bacon from 'baconjs'; // eslint-disable-line import/no-unresolved

var config = {
	fromESObservable: function fromESObservable(observable) {
		return Bacon.fromBinder(function (sink) {
			var _observable$subscribe = observable.subscribe({
				next: function next(val) {
					return sink(new Bacon.Next(val));
				},
				error: function error(err) {
					return sink(new Bacon.Error(err));
				},
				complete: function complete() {
					return sink(new Bacon.End());
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
		}, $$observable, function () {
			return this;
		});
	}
};

export default config;