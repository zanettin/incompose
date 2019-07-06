/**
 * @file   renameProps
 * @desc   renames the owner prop
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-06
 */

/**
 * @param   {Object}    - config ({oldName : 'newName', a : 'z'})
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default config => Component => props => {
	const newProps = Object.keys(props).reduce((acc, key) => {
		acc[config[key] || key] = props[key];
		return acc;
	}, {});

	return <Component {...newProps} />;
};
