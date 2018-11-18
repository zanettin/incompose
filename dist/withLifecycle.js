"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inferno = require("inferno");

var _infernoCreateClass = require("inferno-create-class");

var _createHelper = _interopRequireDefault(require("./createHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }
    /* eslint-disable react/prefer-es6-class */


    return (0, _infernoCreateClass.createClass)(_objectSpread({}, spec, {
      render: function render() {
        return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, BaseComponent, _objectSpread({}, this.props)));
      }
    }));
    /* eslint-enable react/prefer-es6-class */
  };
};

var _default = (0, _createHelper.default)(lifecycle, 'lifecycle');

exports.default = _default;