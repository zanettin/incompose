/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import compose from './compose';
import createHelper from './createHelper';

const identity = Component => Component;

const branch = (test, left, right = identity) => BaseComponent => {
	let leftFactory;
	let rightFactory;
	return props => {
		if (test(props)) {
			leftFactory = leftFactory || compose(left)(BaseComponent);
			return leftFactory(props);
		}
		rightFactory = rightFactory || compose(right)(BaseComponent);
		return rightFactory(props);
	};
};

export default createHelper(branch, 'branch');
