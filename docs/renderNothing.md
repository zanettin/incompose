# renderNothing
## Description
A higher-order component that always renders `null`.

## API
```
renderNothing() : Function
```

## Example
```javascript
import Inferno from 'inferno';

import {
  compose,
  renderNothing
} from 'incompose';

const Counter = (props) => (
  <div>will never be rendered!</div>
);

export default compose(
  renderNothing,
)(Counter);
```