![Inferno JS Logo](https://cdn-images-1.medium.com/max/1600/1*NZoKqwcj_x9W1Zh-eWWeCw.png "Inferno JS")

# Incompose
Incompose is a [Inferno.js](https://infernojs.org/) clone of the famouse [recompose](https://github.com/acdlite/recompose) lib for React.

[![Build Status](https://semaphoreci.com/api/v1/open-source/incompose/branches/master/shields_badge.svg)](https://semaphoreci.com/open-source/incompose) [![npm version](https://badge.fury.io/js/incompose.svg)](https://badge.fury.io/js/incompose) [![Code Climate](https://codeclimate.com/github/zanettin/incompose/badges/gpa.svg)](https://codeclimate.com/github/zanettin/incompose) [![Test Coverage](https://codeclimate.com/github/zanettin/incompose/badges/coverage.svg)](https://codeclimate.com/github/zanettin/incompose/coverage) [![MIT](https://img.shields.io/npm/l/express.svg)]()

## Installation
```
npm install incompose
```

## Supported methods (WIP)
- [compose](https://github.com/acdlite/recompose/blob/master/docs/API.md#compose)
- [withDefaultProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#defaultprops)
- [withLifecycle](https://github.com/acdlite/recompose/blob/master/docs/API.md#lifecycle)
- [withProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops)
- [withState](https://github.com/acdlite/recompose/blob/master/docs/API.md#withstate)
- withHandlers => **not supported**! use the nativ supported `Inferno.linkEvent(data, handler)` (https://infernojs.org/docs/api/inferno) instead!

more comming soon (PRs welcome).

## Usage
Please refer to the official recompose github page (https://github.com/acdlite/recompose/blob/master/docs/API.md)

### Import
Incompose provides named and default imports:
```javascript
import {withState} from 'incompose';
import withState from 'incompose/dist/withState';
```

## Thanks
Special thanks to all the contributors and Andrew Clark ([@acdlite](https://twitter.com/acdlite)) for creating this amazing lib for React!
