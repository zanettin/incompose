# renameProps
## Description
Renames multiple props, using a map of old prop names to new prop names.

## API
```
renameProps(
  nameMap: { [key : string] : string }
) : Function
```

## Example
```jsx
import Inferno from 'inferno';

import {
  compose,
  renameProp
} from 'incompose';

const LeaderBoard = (props) => (
  <div>
    <h1>{props.name} has a score of {props.score}</h1>
  </div>
);

export default compose(
  renameProps({
    count     : 'score',  // rename prop `count` to `score`
    lastName  : 'name',   // rename prop `lastName` to `name`
  }),
)(LeaderBoard);
```
