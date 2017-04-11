'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @file   pure
                                                                                                                                                                                                                                                                               * @desc   Prevents the component from updating unless a prop has changed.
                                                                                                                                                                                                                                                                               *         Uses shallow equal to test for changes.
                                                                                                                                                                                                                                                                               * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
                                                                                                                                                                                                                                                                               * @date   2017-02-15
                                                                                                                                                                                                                                                                               */

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _shouldUpdate = require('./shouldUpdate');

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withUpdatePolicy = (0, _shouldUpdate2.default)(function (props, nextProps) {

  // handle invalid props
  if (!props || !nextProps || (typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object' || (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) !== 'object') {
    return true;
  }

  var keys = Object.keys(props);

  for (var i = 0; i < keys.length; i += 1) {
    if (props[keys[i]] !== nextProps[keys[i]]) {
      return true; // just update if we find a shallow diff
    }
  }

  return false;
});

/**
 * @param   {Function} component
 * @returns {Function}
 */

exports.default = function (Component) {
  return (0, _compose2.default)(withUpdatePolicy)(Component);
};