# withPropsOnChange
## Description
Like `withProps()`, except the new props are only created when one of the owner props specified by `shouldMapOrKeys` changes. This helps ensure that expensive computations inside `createProps()` are only executed when necessary.

Instead of an array of prop keys, the first parameter can also be a function that returns a boolean, given the current props and the next props. This allows you to customize when `createProps()` should be called.

## API
```
withPropsOnChange(
  shouldMapOrKeys : Array<string>| (props : Object, nextProps : Object) => boolean,
  createProps     : (ownerProps : Object) => Object
) : Function
```

## Example
```javascript
import Inferno from 'inferno';

import {
  compose,
  withPropsOnChange,
  withState
} from 'incompose';

const inc = (props) => {
  props.setCount(props.count += 1);
};

const dec = (props) => {
  props.setCount(props.count -= 1);
};

const performHeavyCalculation = (props) => {
  // ... do some heavy lifting
  return 1;
}

const Counter = (props) => (
  <div>
    <h1>count : {props.count}</h1>
    <button onClick={Inferno.linkEvent(props, dec)}>-</button>
    <button onClick={Inferno.linkEvent(props, inc)}>+</button>
  </div>
);

const withCounterState = withState('count', 'setCount', 1);

/**
 * if next counter value can be divided by 2 without any rest
 * the function on the `specialProp` key will be re-executed
 * and the new value set. Otherwise nothing will change and
 * your heavy calculation won't be executed.
 */
const withExtendedProps = withPropsOnChange(
  (props, nextProps) => nextProps.count % 2 === 0,
  (props) => ({
    specialProp : performHeavyCalculation(props.count),
  })
)

export default compose(
  withCounterState,
  withExtendedProps,
)(Counter);
```