# flattenProps
## Description
Flattens a prop so that its fields are spread out into the props object.

## API
```
flattenProps(
  propsName : string
) : Function
```

## Example
```javascript
import Inferno from 'inferno';

import {
  compose,
  withDefaultProps
} from 'incompose';

/**
 * original props are:
 * props.person = {
 *   name     : 'John',
 *   lastName : 'Doe',
 *   age      : 33
 * }
 *
 * flattened props are:
 * props = {
 *   name     : 'John',
 *   lastName : 'Doe',
 *   age      : 33
 * }
 */
const LeaderBoard = (props) => (
  <div>
    <h1>{props.name} {props.lastName</h1>
    age : {props.age}
  </div>
);

export default compose(
  flattenProps('person'), // define that props called person should be flattened
)(LeaderBoard);


// somewhere in your code - component call jsx
<LeaderBoard person={{name : 'John', lastName : 'Doe', age : 33}} />
```