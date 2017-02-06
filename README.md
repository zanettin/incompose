![Inferno JS Logo](https://cdn-images-1.medium.com/max/1600/1*NZoKqwcj_x9W1Zh-eWWeCw.png "Inferno JS")

# Incompose
Incompose is a [Inferno.js](https://infernojs.org/) clone of the famouse [recompose](https://github.com/acdlite/recompose) lib for React.

[![Build Status](https://semaphoreci.com/api/v1/open-source/incompose/branches/master/shields_badge.svg)](https://semaphoreci.com/open-source/incompose) [![npm version](https://badge.fury.io/js/incompose.svg)](https://badge.fury.io/js/incompose) [![Code Climate](https://codeclimate.com/github/zanettin/incompose/badges/gpa.svg)](https://codeclimate.com/github/zanettin/incompose) [![Test Coverage](https://codeclimate.com/github/zanettin/incompose/badges/coverage.svg)](https://codeclimate.com/github/zanettin/incompose/coverage) [![MIT](https://img.shields.io/npm/l/express.svg)]()

## Installation
```
npm install incompose
```

## Support
This project is under development. New functions will be added soon. PRs are welcome.

* [compose](https://github.com/acdlite/recompose/blob/master/docs/API.md#compose) (>= v0.0.3)
* [defaultProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#defaultprops) (>= v0.0.3)
* [renameProp](https://github.com/acdlite/recompose/blob/master/docs/API.md#renameprop) (>= v0.0.4)
* [renameProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#renameprops) (>= v0.0.4)
* [flattenProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#flattenprops) (>= v0.0.4)
* [withLifecycle](https://github.com/acdlite/recompose/blob/master/docs/API.md#lifecycle (>= v0.0.3))
* [withProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops) (>= v0.0.3)
* [withState](https://github.com/acdlite/recompose/blob/master/docs/API.md#withstate) (>= v0.0.3)

## Usage
Please refer to the official [recompose Github page](https://github.com/acdlite/recompose/blob/master/docs/API.md)

### Import
Incompose provides named and default imports:
```javascript
import {withState} from 'incompose';
import withState from 'incompose/dist/withState';
```

### Example
```javascript
import {
  default as Inferno,
  linkEvent
} from 'inferno';

import {
  compose,
  withState,
  shouldUpdate
} from 'incompose';

const inc = (props) => {
  props.setCount(props.count += 1);
};

const dec = (props) => {
  props.setCount(props.count -= 1);
};

const Counter = (props) => (
  <div>
    <h1>count : {props.count}</h1>
    <button onClick={linkEvent(props, dec)}>-</button>
    <button onClick={linkEvent(props, inc)}>+</button>
  </div>
);

/**
 * with state creates 2 new props on the component props
 * props.count		-	contains the value (1 is set as default value)
 * props.setCount	-	contains the setter function
 */
const withCounterState = withState('count', 'setCount', 1);

/**
 * should update prevents the component of re-render (shouldUpdate lifecycle hook)
 * you can compare current and next props and decide whether the component
 * should update or not. In this example, the counter just updates if
 * props.count is even.
 */
const withUpdatePolicy = shouldUpdate((props, nextProps) => (
  nextProps.count % 2 === 0
));

/**
 * with compose all the extendend functions are composed BEFORE Counter
 * gets rendered. Please not that order matters.
 */
export default compose(
  withCounterState,
  withUpdatePolicy,
)(Counter);
```

## Thanks
Special thanks to all the contributors and Andrew Clark ([@acdlite](https://twitter.com/acdlite)) for creating this amazing lib for React!
