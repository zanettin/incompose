/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { createClass } from 'inferno-create-class';
import createHelper from './createHelper';

const lifecycle = spec => BaseComponent => {
	if (process.env.NODE_ENV !== 'production' && spec.render) {
		console.error(
			'lifecycle() does not support the render method; its behavior is to ' +
				'pass all props and state to the base component.',
		);
	}

	return createClass({
		...spec,
		render() {
			return <BaseComponent {...this.props} />;
		},
	});
};

export default createHelper(lifecycle, 'lifecycle');
