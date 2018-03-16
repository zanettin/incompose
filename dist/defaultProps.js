/**
 * @file   defaultProps
 * @desc   sets default values for owner props
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 */

/**
 * @param   {Object}    - default props config
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default (function (config) {
  return function (component) {
    return function (props) {
      return component(Object.assign({}, config, props));
    };
  };
});