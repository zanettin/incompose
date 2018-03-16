function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import xstream from 'xstream'; // eslint-disable-line import/no-unresolved

var noop = function noop() {};

var config = {
	fromESObservable: function fromESObservable(observable) {
		return xstream.create({
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
		}, $$observable, function () {
			return this;
		});
	}
};

export default config;