/**
 * @file   withDefaultProps
 * @desc   appends default props on component init (does not overwrite existing props)
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 * @flow
 */

/**
 * @param   {Object}    - default props config
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default (config) => (component) => (props) => component({...config, ...props});
