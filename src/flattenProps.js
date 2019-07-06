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
export default propName => Component => props => {
	const newProps =
		props[propName] && typeof props[propName] === 'object'
			? { ...props, ...props[propName] }
			: { ...props };

	if (newProps[propName]) {
		delete newProps[propName];
	}

	return <Component {...newProps} />;
};
