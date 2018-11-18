"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inferno = require("inferno");

var _createHelper = _interopRequireDefault(require("./createHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderComponent = function renderComponent(Component) {
  return function () {
    var RenderComponent = function RenderComponent(props) {
      return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, Component, _objectSpread({}, props)));
    };

    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable global-require */
      var wrapDisplayName = require('./wrapDisplayName').default;
      /* eslint-enable global-require */


      RenderComponent.displayName = wrapDisplayName(Component, 'renderComponent');
    }

    return RenderComponent;
  };
};

var _default = (0, _createHelper.default)(renderComponent, 'renderComponent', false);

exports.default = _default;