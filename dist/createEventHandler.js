function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import $$observable from 'symbol-observable';
import { createChangeEmitter } from 'change-emitter';
import { config as globalConfig } from './setObservableConfig';

export var createEventHandlerWithConfig = function createEventHandlerWithConfig(config) {
	return function () {
		var emitter = createChangeEmitter();
		var stream = config.fromESObservable(_defineProperty({
			subscribe: function subscribe(observer) {
				var unsubscribe = emitter.listen(function (value) {
					return observer.next(value);
				});
				return { unsubscribe: unsubscribe };
			}
		}, $$observable, function () {
			return this;
		}));
		return {
			handler: emitter.emit,
			stream: stream
		};
	};
};

var createEventHandler = createEventHandlerWithConfig(globalConfig);

export default createEventHandler;