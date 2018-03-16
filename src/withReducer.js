/**
 * @author recompose (https://github.com/acdlite/recompose)
 */

import { Component } from 'inferno';
import createHelper from './createHelper';

const withReducer = (
	stateName,
	dispatchName,
	reducer,
	initialState,
) => BaseComponent => {
	return class extends Component {
		state = {
			stateValue: this.initializeStateValue(),
		};

		initializeStateValue() {
			if (initialState !== undefined) {
				return typeof initialState === 'function'
					? initialState(this.props)
					: initialState;
			}
			return reducer(undefined, { type: '@@incompose/INIT' });
		}

		dispatch = action =>
			this.setState(({ stateValue }) => ({
				stateValue: reducer(stateValue, action),
			}));

		render() {
			return (
				<BaseComponent
					{...Object.assign(this.props, {
						[stateName]: this.state.stateValue,
						[dispatchName]: this.dispatch,
					})}
				/>
			);
		}
	};
};

export default createHelper(withReducer, 'withReducer');
