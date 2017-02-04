/**
 * @author recompose (https://github.com/acdlite/recompose)
 * @flow
 */

import Component from 'inferno-component'
import createHelper from './createHelper'
import createEagerFactory from './createEagerFactory'

const withState = (stateName, stateUpdaterName, initialState) =>
  BaseComponent => {
    const factory = createEagerFactory(BaseComponent);
    return class extends Component {
      state = {
        stateValue: typeof initialState === 'function'
          ? initialState(this.props)
          : initialState
      };

      updateStateValue = (updateFn, callback) => (
        this.setState(({ stateValue }) => ({
          stateValue: typeof updateFn === 'function'
            ? updateFn(stateValue)
            : updateFn
        }), callback)
      );

      render() {
        return factory({
          ...this.props,
          [stateName]: this.state.stateValue,
          [stateUpdaterName]: this.updateStateValue
        })
      }
    }
  }

export default createHelper(withState, 'withState')
