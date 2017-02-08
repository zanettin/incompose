# withProps
## Description
Like `defaultProps()`, except the passed props take precedence over props provided to the base component.

## API
```
withProps(
  props : Object
) : Function
```

## Example
```javascript
import Inferno from 'inferno';

import {
  compose,
  withProps
} from 'incompose';

const LeaderBoard = (props) => (
  <div>
    <h1>{props.name} has a score of {props.score}</h1>
  </div>
);

export default compose(
  withProps({
    score : 100,
    name  : 'John',
  }),
)(LeaderBoard);
```