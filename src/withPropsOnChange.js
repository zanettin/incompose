/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { Component } from 'inferno';
import pick from './utils/pick';
import shallowEqual from './shallowEqual';
import createHelper from './createHelper';

const withPropsOnChange = (shouldMapOrKeys, propsMapper) => BaseComponent => {
	const shouldMap =
		typeof shouldMapOrKeys === 'function'
			? shouldMapOrKeys
			: (props, nextProps) =>
					!shallowEqual(
						pick(props, shouldMapOrKeys),
						pick(nextProps, shouldMapOrKeys),
					);

	return class extends Component {
		computedProps = propsMapper(this.props);

		componentWillReceiveProps(nextProps) {
			if (shouldMap(this.props, nextProps)) {
				this.computedProps = propsMapper(nextProps);
			}
		}

		render() {
			return (
				<BaseComponent {...Object.assign(this.props, this.computedProps)} />
			);
		}
	};
};

export default createHelper(withPropsOnChange, 'withPropsOnChange');
