# renderComponent
## Description
Takes a component and returns a higher-order component version of that component.

This is useful in combination with another helper that expects a higher-order component, like `branch()`:

## API
```
renderComponent(
  Component : Function
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
