# pure
## Description
Prevents the component from updating unless a prop has changed. Uses `shallowEqual()` to test for changes.

## API
```
pure : Function
```

## Example
```jsx
import Inferno from 'inferno';
import {
  compose,
  pure,
} from 'incompose';

const A = (props) => (
  <h1>a</h1>
);

export default compose(
  pure,
)(A);
```
