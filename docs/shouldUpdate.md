# shouldUpdate
## Description
Higher-order component version of `shouldComponentUpdate()`. The test function accepts both the current props and the next props.
If the return value of the defined expression is `false`, the component won't update.

## API
```
shouldUpdate(
  expression : (props, nextProps) : boolean,
) : Function;
```

## Example
```jsx
import {
  default as Inferno,
  linkEvent
} from 'inferno';

import {
  compose,
  withState,
  shouldUpdate
} from 'incompose';

const inc = (props) => {
  props.setCount(props.count += 1);
};

const dec = (props) => {
  props.setCount(props.count -= 1);
};

const Counter = (props) => (
  <div>
    <h1>count : {props.count}</h1>
    <button onClick={linkEvent(props, dec)}>-</button>
    <button onClick={linkEvent(props, inc)}>+</button>
  </div>
);

const withCounterState = withState('count', 'setCount', 1);

/**
 * should update prevents the component of re-render (shouldUpdate lifecycle hook)
 * you can compare current and next props and decide whether the component
 * should update or not. In this example, the counter just updates if
 * props.count is even.
 */
const withUpdatePolicy = shouldUpdate((props, nextProps) => (
  nextProps.count % 2 === 0
));

export default compose(
  withCounterState,
  withUpdatePolicy,
)(Counter);
```
