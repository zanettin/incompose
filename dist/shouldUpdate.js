/**
 * @file   shouldUpdate
 * @desc   use 'onComponentShouldUpdate' lifecycle hook to determine if component should update or not
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 */

import withLifecycle from './withLifecycle';

/**
 * @param   {Function}  - onComponentShouldUpdate - should update check function returning a boolean value
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default (function (onComponentShouldUpdate) {
  return function (component) {
    return function (props) {
      return withLifecycle({ onComponentShouldUpdate: onComponentShouldUpdate })(component)(props);
    };
  };
});