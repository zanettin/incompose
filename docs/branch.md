# branch
## Description
Accepts a test function and two higher-order components. The test function is passed the props from the owner. If it returns true, the `left` higher-order component is applied to `BaseComponent`; otherwise, the `right` higher-order component is applied.

## API
```
branch(
  test  : (props : Object) => boolean,
  left  : Function,
  right : Function
) : Function
```

## Example
```jsx
import {
  branch,
  compose,
  renderComponent,
} from 'incompose';

const A = () => (
  <h1>a</h1>
);

const B = () => (
  <h2>loading...</h2>
);

export default compose(
  branch(
    (props) => props.value % 2 === 0,
    renderComponent(B),
  )
)(A);
```
