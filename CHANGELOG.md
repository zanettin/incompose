# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] - 2017-08-07
### Added
- componentFromStream
- createEventHandler
- setObservableConfig
- observable configs for bacon, flyd, kefir, most, rxjs4, rxjs, xstream

### Update
- updated npm dependencies

## [1.0.0] - 2017-07-29
### Update
- updated npm dependencies
- updated docs
- moved to first stable version

## [0.0.15] - 2017-05-2
### Update
- updated npm dependencies and fixes - thx to @FQ400!
- updated docs

## [0.0.14] - 2017-04-12
### Fixed
- fixed `isClassComponent` - thx to @FQ400!
- spelling fixes - thx to @FQ400!

## [0.0.13] - 2017-04-11
### Update
- updated npm dependencies and fixes - thx to @FQ400!

## [0.0.12] - 2017-04-06
### Update
- updated npm dependencies

## [0.0.11] - 2017-02-23
### Fixed
- issue #2 (inferno-devtools crashes because of withLifecycle)

### Breaking changes
- lifecycle hooks have to be named like class lifecycle hooks and no longer like the functional component lifecycle hooks.
from: `onComponentDidMount` to: `componentDidMount`.

## [0.0.10] - 2017-02-17
### Fixed
- update dependencies

## [0.0.9] - 2017-02-15
### Fixed
- update dependencies

## [0.0.8] - 2017-02-15
### Added
- pure
- branch
- renderComponent

## [0.0.7] - 2017-02-12
### Added
- nest
- withReducer

## [0.0.6] - 2017-02-10
### Added
- Documentation
- createSink

### Fixed
- isClassComponent check

## [0.0.5] - 2017-02-07
### Added
- Changelog.md
- renderNothing
- withHandlers

### Fixed
- added named imports for renameProp, renameProps, flattenProps

## [0.0.4] - 2017-02-06
### Added
- renameProp
- renameProps
- flattenProps

## [0.0.3] - 2017-02-04
### Added
- compose
- defaultProps
- withLifecycle
- withProps
- withState