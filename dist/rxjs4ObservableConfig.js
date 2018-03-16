function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import Rx from 'rx'; // eslint-disable-line import/no-unresolved

var config = {
	fromESObservable: function fromESObservable(observable) {
		return Rx.Observable.create(function (observer) {
			var _observable$subscribe = observable.subscribe({
				next: function next(val) {
					return observer.onNext(val);
				},
				error: function error(_error) {
					return observer.onError(_error);
				},
				complete: function complete() {
					return observer.onCompleted();
				}
			}),
			    unsubscribe = _observable$subscribe.unsubscribe;

			return unsubscribe;
		});
	},
	toESObservable: function toESObservable(rxObservable) {
		return _defineProperty({
			subscribe: function subscribe(observer) {
				var subscription = rxObservable.subscribe(function (val) {
					return observer.next(val);
				}, function (error) {
					return observer.error(error);
				}, function () {
					return observer.complete();
				});
				return { unsubscribe: function unsubscribe() {
						return subscription.dispose();
					} };
			}
		}, $$observable, function () {
			return this;
		});
	}
};

export default config;