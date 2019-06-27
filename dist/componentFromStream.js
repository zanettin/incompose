"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.componentFromStreamWithConfig = void 0;

var _inferno = require("inferno");

var _changeEmitter = require("change-emitter");

var _symbolObservable = _interopRequireDefault(require("symbol-observable"));

var _setObservableConfig = require("./setObservableConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var componentFromStreamWithConfig = function componentFromStreamWithConfig(config) {
  return function (propsToVdom) {
    var _temp;

    return _temp =
    /*#__PURE__*/
    function (_Component) {
      _inherits(ComponentFromStream, _Component);

      function ComponentFromStream() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, ComponentFromStream);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComponentFromStream)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "state", {
          vdom: null
        });

        _defineProperty(_assertThisInitialized(_this), "propsEmitter", (0, _changeEmitter.createChangeEmitter)());

        _defineProperty(_assertThisInitialized(_this), "props$", config.fromESObservable(_defineProperty({
          subscribe: function subscribe(observer) {
            var unsubscribe = _this.propsEmitter.listen(function (props) {
              if (props) {
                observer.next(props);
              } else {
                observer.complete();
              }
            });

            return {
              unsubscribe: unsubscribe
            };
          }
        }, _symbolObservable.default, function () {
          return this;
        })));

        _defineProperty(_assertThisInitialized(_this), "vdom$", config.toESObservable(propsToVdom(_this.props$)));

        return _this;
      }

      _createClass(ComponentFromStream, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          var _this2 = this;

          // Subscribe to child prop changes so we know when to re-render
          this.subscription = this.vdom$.subscribe({
            next: function next(vdom) {
              _this2.setState({
                vdom: vdom
              });
            }
          });
          this.propsEmitter.emit(this.props);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          // Receive new props from the owner
          this.propsEmitter.emit(nextProps);
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return nextState.vdom !== this.state.vdom;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          // Call without arguments to complete stream
          this.propsEmitter.emit(); // Clean-up subscription before un-mounting

          this.subscription.unsubscribe();
        }
      }, {
        key: "render",
        value: function render() {
          return this.state.vdom;
        }
      }]);

      return ComponentFromStream;
    }(_inferno.Component), _temp;
  };
};

exports.componentFromStreamWithConfig = componentFromStreamWithConfig;

var componentFromStream = function componentFromStream(propsToVdom) {
  return componentFromStreamWithConfig(_setObservableConfig.config)(propsToVdom);
};

var _default = componentFromStream;
exports.default = _default;