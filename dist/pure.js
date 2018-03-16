var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @file   pure
 * @desc   Prevents the component from updating unless a prop has changed.
 *         Uses shallow equal to test for changes.
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-15
 */

import compose from './compose';
import shouldUpdate from './shouldUpdate';

var withUpdatePolicy = shouldUpdate(function (props, nextProps) {

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
export default (function (Component) {
  return compose(withUpdatePolicy)(Component);
});