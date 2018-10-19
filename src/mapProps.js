/**
 * @file   mapProps
 * @desc   maps props on component init
 * @author Zoltan Dalmadi <dmz985@gmail.com>
 * @date   2018-10-18
 */

/**
 * @param   {Object}    - mapper function
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default mapper => component => props => component(mapper(props));
