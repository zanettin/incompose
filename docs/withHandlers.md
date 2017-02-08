# withHandlers
## Description
This helper acts mostly like internal `Inferno.createLink` helper. Please see the example to see them both in action side-by-side.

## API
```
withHandlers(
  handlerCreators : {
    [handlerName : string] : (props : Object) => Function
  }
) : Function;
```

## Example
```javascript
import Inferno from 'inferno';
import {
  compose,
  withState,
  withHandlers,
} from 'incompose';

const generateRandomValue = (props, event) => {
  props.setValue(Math.floor(Math.random() * 10) + 1);
};

const Random = (props) => (
  <div>
    <h1>{props.value}</h1>
    <button onClick={Inferno.linkEvent(props, generateRandomValue)}>generate</button>
    <button onClick={props.doGenerateRandomValue}>generate with handler</button>
  </div>
);

const withRandomHandlers = withHandlers({
  doGenerateRandomValue : (props) => (event) => generateRandomValue(props),
});

export default compose(
  withState('value', 'setValue', 1),
  withRandomHandlers,
)(Random);
```