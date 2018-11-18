"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createEventHandlerWithConfig = void 0;

var _symbolObservable = _interopRequireDefault(require("symbol-observable"));

var _changeEmitter = require("change-emitter");

var _setObservableConfig = require("./setObservableConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createEventHandlerWithConfig = function createEventHandlerWithConfig(config) {
  return function () {
    var emitter = (0, _changeEmitter.createChangeEmitter)();
    var stream = config.fromESObservable(_defineProperty({
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _symbolObservable.default, function () {
      return this;
    }));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};

exports.createEventHandlerWithConfig = createEventHandlerWithConfig;
var createEventHandler = createEventHandlerWithConfig(_setObservableConfig.config);
var _default = createEventHandler;
exports.default = _default;