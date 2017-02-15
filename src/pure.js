/**
 * @file   pure
 * @desc   Prevents the component from updating unless a prop has changed.
 *         Uses shallow equal to test for changes.
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-15
 */

import compose from './compose';
import shouldUpdate from './shouldUpdate';

const withUpdatePolicy = shouldUpdate((props, nextProps) => {

  // handle invalid props
  if (!props || !nextProps || typeof(props) !== 'object' || typeof(nextProps) !== 'object') {
    return true;
  }

  const keys = Object.keys(props);

  for(let i = 0; i < keys; i += 1) {
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
export default (Component) => compose(
  withUpdatePolicy,
)(Component);