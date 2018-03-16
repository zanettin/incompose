var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @file   flattenProps
 * @desc   renames the owner prop
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-06
 */

/**
 * @param   {string}    - prop name to flatten
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default (function (propName) {
  return function (component) {
    return function (props) {
      var newProps = props[propName] && _typeof(props[propName]) === 'object' ? Object.assign({}, props, props[propName]) : Object.assign({}, props);

      if (newProps[propName]) {
        delete newProps[propName];
      }

      return component(newProps);
    };
  };
});