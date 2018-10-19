# mapProps
## Description
Applies a mapper function, which transforms the original props into a new props object.

## API
```
mapProps(
  (props) => Object
) : Function
```

## Example
```jsx
import {
  compose,
  mapProps
} from 'incompose';

const DiscountPriceIndicator = ({ discountPrice }) => (
  <div>
    <h1>Discount price: {discountPrice}</h1>
  </div>
);

export default compose(
  mapProps(({ price, discount }) => ({
    discountPrice: price - price * (discount / 100)
  })),
)(DiscountPriceIndicator);
```
