# withLifecycle
## Description
Adds lifecycle hooks to the base component. The full API list can be found [here](https://infernojs.org/docs/guides/components).
Please note that Inferno itself offers lifecycle hooks for functional components as described in the docs.
The difference is, that this hook can be used INSIDE the component and not from the parent component.

## API
```
withLifecycle(
  hooks : Object,
) : Function;
```

## Example
```jsx
import {
  compose,
  withLifecycle
} from 'incompose';

const Counter = (props) => (
  <div>
    <h1>component with lifecycle</h1>
  </div>
);

export default compose(
  withLifecycle({
    componentDidMount     : (el) => console.warn('mounted'),
    componentWillUnmount  : () => console.warn('will unmount'),
    componentShouldUpdate : (props, nextProps)  => true, // on false, component won't update
  }),
)(Counter);
```
