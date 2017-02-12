'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @file   nest
                                                                                                                                                                                                                                                                   * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
                                                                                                                                                                                                                                                                   * @date   2017-02-12
                                                                                                                                                                                                                                                                   */

var _inferno = require('inferno');

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode;

exports.default = function () {
  for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
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
        nextProps.children = createVNode(16, PrevComponent, _extends({}, nextProps));
      }

      return nextProps;
    });

    return MainComponent(propsMap.reverse()[0]);
  };
};