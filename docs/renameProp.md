# renameProp
## Description
Renames a single prop.

## API
```
renameProp(
  oldPropName : string,
  newPropName : string,
) : Function
```

## Example
```jsx
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
  renameProp('count', 'score'), // rename prop `count` to `score`
)(LeaderBoard);
```
