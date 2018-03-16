import { createComponentVNode, normalizeProps } from 'inferno';
/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { createClass } from 'inferno-create-class';
import createHelper from './createHelper';

var lifecycle = function lifecycle(spec) {
	return function (BaseComponent) {
		if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
			console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
		}

		/* eslint-disable react/prefer-es6-class */
		return createClass(Object.assign({}, spec, {
			render: function render() {
				return normalizeProps(createComponentVNode(2, BaseComponent, Object.assign({}, this.props)));
			}
		}));
		/* eslint-enable react/prefer-es6-class */
	};
};

export default createHelper(lifecycle, 'lifecycle');