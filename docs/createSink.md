# createSink
## Description
Creates a component that renders nothing (`null`) but calls a callback when receiving new props.

## API
```
createSink(
  callback : (props : Object) => void,
) : Function
```

## Example
```javascript
import { createSink } from 'incompose';

const cb = (props) => console.warn('props are updated', props);

export default createSink(cb);
```