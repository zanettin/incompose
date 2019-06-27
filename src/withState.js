/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { Component } from 'inferno';
import createHelper from './createHelper';

const withState = (
	stateName,
	stateUpdaterName,
	initialState,
) => BaseComponent => {
	const StatedComponent = class extends Component {
		state = {
			stateValue:
				typeof initialState === 'function'
					? initialState(this.props)
					: initialState,
		};

		updateStateValue = (updateFn, callback) =>
			this.setState(
				({ stateValue }) => ({
					stateValue:
						typeof updateFn === 'function' ? updateFn(stateValue) : updateFn,
				}),
				callback,
			);

		render() {
			return (
				<BaseComponent
					{...Object.assign(this.props, {
						[stateName]: this.state.stateValue,
						[stateUpdaterName]: this.updateStateValue,
					})}
				/>
			);
		}
	};
	return props => <StatedComponent {...props} />;
};

export default createHelper(withState, 'withState');
