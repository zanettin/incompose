# withReducer
## Description
Similar to `withState()`, but state updates are applied using a reducer function. A reducer is a function that receives a state and an action, and returns a new state.

Passes two additional props to the base component: a state value, and a dispatch method. The dispatch method sends an action to the reducer, and the new state is applied.

## API
```
withReducer<S, A>(
  stateName    : string,
  dispatchName : string,
  reducer      : (state : S, action : A) => S,
  initialState : S
) : Function
```

## Example
```jsx
import Inferno from 'inferno';
import {
  compose,
  withReducer
} from 'incompose';

const INC = 'action/inc';
const DEC = 'action/dec';
const MIN = 'action/min';
const MAX = 'action/max';

const Component = (props) => (
  <div>
    <h1>reducer example</h1>
    <h2>{props.counter.count}</h2>
    <button onClick={Inferno.linkEvent(MIN, props.counterDispatch)}>min</button>
    <button onClick={Inferno.linkEvent(DEC, props.counterDispatch)}>-</button>
    <button onClick={Inferno.linkEvent(INC, props.counterDispatch)}>+</button>
    <button onClick={Inferno.linkEvent(MAX, props.counterDispatch)}>max</button>
  </div>
);

const reducer = (state, action) => {

  const newState = state;

  switch(action) {

    case INC: {
      newState.count += 1;
      return newState;
    }

    case DEC: {
      newState.count -= 1;
      return newState;
    }

    case MIN: {
      newState.count = state.min;
      return newState;
    }

    case MAX: {
      newState.count = state.max;
      return newState;
    }

    default: {
      return newState;
    }

  }
};

export default compose(
  withReducer(
   'counter',
   'counterDispatch',
   reducer,
   {
     count  : 50,
     min    : 1,
     max    : 100,
   }
  ),
)(Component);
```
