# nest
## Description
Composes components by nesting each one inside the previous.

## API
```
nest(
  ...Components : Array<InfernoFunctionalComponents>
) : Function
```

## Example
```jsx
import Inferno from 'inferno';
import {nest} from 'incompose';

const A = (props) => (
  <div>
    <h1>I'm A</h1>
    {props.children}
  </div>
);

const B = (props) => (
  <div>
    <h2>I'm B</h2>
    {props.children}
  </div>
);

const C = (props) => (
  <div>
    <h3>I'm C</h3>
    {props.children}
  </div>
);

const D = (props) => (
  <div>
    <h4>I'm D</h4>
    {props.children}
  </div>
);

const E = (props) => (
  <div>
    <h5>I'm E</h5>
    {props.children}
  </div>
);

export default nest(A, B, C, D, E);
```
