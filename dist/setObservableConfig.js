/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

var _config = {
	fromESObservable: null,
	toESObservable: null
};

var configureObservable = function configureObservable(c) {
	_config = c;
};

export var config = {
	fromESObservable: function fromESObservable(observable) {
		return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
	},
	toESObservable: function toESObservable(stream) {
		return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
	}
};

export default configureObservable;