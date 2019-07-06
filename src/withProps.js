/**
 * @file   withProps
 * @desc   appends props on component init (does overwrite existing props)
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 */

/**
 * @param   {Object}    - default props config
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default config => Component => props => (
	<Component {...props} {...config} />
);
