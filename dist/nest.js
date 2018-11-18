"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inferno = _interopRequireWildcard(require("inferno"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  return function (props) {
    if (!Components || Components.length < 1) {
      return null;
    }

    var MainComponent = Components[0];
    var components = Components.reverse();
    var propsMap = components.map(function (Component, index) {
      var PrevComponent = components[index - 1] || null;
      var nextProps = props;

      if (PrevComponent !== null) {
        nextProps.children = (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, PrevComponent, _objectSpread({}, nextProps)));
      }

      return nextProps;
    });
    return MainComponent(propsMap.reverse()[0]);
  };
};

exports.default = _default;