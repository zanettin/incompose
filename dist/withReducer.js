var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

import { createComponentVNode, normalizeProps } from 'inferno';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { Component } from 'inferno';
import createHelper from './createHelper';

var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    return function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          stateValue: _this.initializeStateValue()
        }, _this.dispatch = function (action) {
          return _this.setState(function (_ref2) {
            var stateValue = _ref2.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          });
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(_class2, [{
        key: 'initializeStateValue',
        value: function initializeStateValue() {
          if (initialState !== undefined) {
            return typeof initialState === 'function' ? initialState(this.props) : initialState;
          }
          return reducer(undefined, { type: '@@incompose/INIT' });
        }
      }, {
        key: 'render',
        value: function render() {
          var _Object$assign;

          return normalizeProps(createComponentVNode(2, BaseComponent, Object.assign({}, Object.assign(this.props, (_Object$assign = {}, _defineProperty(_Object$assign, stateName, this.state.stateValue), _defineProperty(_Object$assign, dispatchName, this.dispatch), _Object$assign)))));
        }
      }]);

      return _class2;
    }(Component);
  };
};

export default createHelper(withReducer, 'withReducer');