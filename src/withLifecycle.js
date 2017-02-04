/**
 * @file   withLifecycle
 * @desc   use the lifecycle hooks of functional inferno components and make them usable inside of the component
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-01-06
 * @flow
 */

import createElement from 'inferno-create-element'

/**
 * @param   {Object}    - lifecycle config
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
export default (config) => (component) => (props) => createElement(component, {...props, ...config});
