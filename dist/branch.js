/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import compose from './compose';
import createHelper from './createHelper';

var identity = function identity(Component) {
  return Component;
};

var branch = function branch(test, left) {
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return function (BaseComponent) {
    var leftFactory = void 0;
    var rightFactory = void 0;
    return function (props) {
      if (test(props)) {
        leftFactory = leftFactory || compose(left)(BaseComponent);
        return leftFactory(props);
      }
      rightFactory = rightFactory || compose(right)(BaseComponent);
      return rightFactory(props);
    };
  };
};

export default createHelper(branch, 'branch');