![Inferno JS Logo](https://cdn-images-1.medium.com/max/1600/1*NZoKqwcj_x9W1Zh-eWWeCw.png "Inferno JS")

# Incompose
Incompose is a [Inferno.js](https://infernojs.org/) clone of the famous [recompose](https://github.com/acdlite/recompose) lib for React.

[![Build Status](https://semaphoreci.com/api/v1/open-source/incompose/branches/master/shields_badge.svg)](https://semaphoreci.com/open-source/incompose) [![npm version](https://badge.fury.io/js/incompose.svg)](https://www.npmjs.com/package/incompose) [![npm downloads](https://img.shields.io/npm/dm/incompose.svg?style=flat-square)](https://www.npmjs.com/package/incompose) [![Code Climate](https://codeclimate.com/github/zanettin/incompose/badges/gpa.svg)](https://codeclimate.com/github/zanettin/incompose) [![Test Coverage](https://codeclimate.com/github/zanettin/incompose/badges/coverage.svg)](https://codeclimate.com/github/zanettin/incompose/coverage) [![MIT](https://img.shields.io/npm/l/express.svg)](LICENSE.md)

## Installation
```
npm install incompose
```

## Incompose / Inferno version map
Incompose works with specific version of inferno. Please make sure you use the correct version.

| Inferno verion | Incompose version |
| -- | -- |
| `v5.x` | `>= v.3.0.0` |
| `v4.x` | `v.2.0.0` |
| `< v4.0` | `< v.2` |

## Support
Following HoCs are available. If you miss any helper/HoC please send me a note on twitter [@roman_zanettin](https://twitter.com/roman_zanettin) or create an issue / open a PR. Thanks.

| Function | since |
| --- | :---: |
|[branch](docs/branch.md)|![0.0.8](https://img.shields.io/badge/version-0.0.8-green.svg)|
|[componentFromStream](docs/componentFromStream.md)|![1.1.0](https://img.shields.io/badge/version-1.1.0-green.svg)|
|[compose](docs/compose.md)|![0.0.3](https://img.shields.io/badge/version-0.0.3-green.svg)|
|[createEventHandler](docs/createEventHandler.md)|![1.1.0](https://img.shields.io/badge/version-1.1.0-green.svg)|
|[createSink](docs/createSink.md)|![0.0.6](https://img.shields.io/badge/version-0.0.6-green.svg)|
|[defaultProps](docs/defaultProps.md)|![0.0.3](https://img.shields.io/badge/version-0.0.3-green.svg)|
|[flattenProps](docs/flattenProps.md)|![0.0.4](https://img.shields.io/badge/version-0.0.4-green.svg)|
|[nest](docs/nest.md)|![0.0.7](https://img.shields.io/badge/version-0.0.7-green.svg)|
|[pure](docs/pure.md)|![0.0.8](https://img.shields.io/badge/version-0.0.8-green.svg)|
|[renderComponent](docs/renderComponent.md)|![0.0.8](https://img.shields.io/badge/version-0.0.8-green.svg)|
|[renderNothing](docs/renderNothing.md)|![0.0.5](https://img.shields.io/badge/version-0.0.5-green.svg)|
|[renameProp](docs/renameProp.md)|![0.0.4](https://img.shields.io/badge/version-0.0.4-green.svg)|
|[renameProps](docs/renameProps.md)|![0.0.4](https://img.shields.io/badge/version-0.0.4-green.svg)|
|[setObservableConfig](docs/setObservableConfig.md)|![1.1.0](https://img.shields.io/badge/version-1.1.0-green.svg)|
|[shouldUpdate](docs/shouldUpdate.md)|![0.0.3](https://img.shields.io/badge/version-0.0.3-green.svg)|
|[withHandlers](docs/withHandlers.md)|![0.0.5](https://img.shields.io/badge/version-0.0.5-green.svg)|
|[withLifecycle](docs/withLifecycle.md)|![0.0.3](https://img.shields.io/badge/version-0.0.3-green.svg)|
|[withProps](docs/withProps.md)|![0.0.3](https://img.shields.io/badge/version-0.0.3-green.svg)|
|[withPropsOnChange](docs/withPropsOnChange.md)|![0.0.6](https://img.shields.io/badge/version-0.0.6-green.svg)|
|[withReducer](docs/withReducer.md)|![0.0.7](https://img.shields.io/badge/version-0.0.7-green.svg)|
|[withState](docs/withState.md)|![0.0.3](https://img.shields.io/badge/version-0.0.3-green.svg)|


## Usage
Please find the API and example code in the docs folder.

### Import
Incompose provides named and default imports:
```javascript
import {withState} from 'incompose';
import withState from 'incompose/dist/withState';
```

### Example
```javascript
import {
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
 * with compose all the extended functions are composed BEFORE Counter
 * gets rendered. Please not that order matters.
 */
export default compose(
  withCounterState,
  withUpdatePolicy,
)(Counter);
```

## Thanks
Special thanks to all the contributors and Andrew Clark ([@acdlite](https://twitter.com/acdlite)) for creating this amazing lib for React!

## Changelog
Changelog is available [here](CHANGELOG.md).
