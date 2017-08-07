# setObservableConfig
## Description
Observables in Incompose are plain objects that conform to the ES Observable proposal. Usually, you'll want to use them alongside an observable library like RxJS so that you have access to its suite of operators. By default, this requires you to convert the observables provided by Incompose before applying any transforms:

```
mapPropsStream(props$ => {
  const rxjsProps$ = Rx.Observable.from(props$)
  // ...now you can use map, filter, scan, etc.
  return transformedProps$
})
```

This quickly becomes tedious. Rather than performing this transform for each stream individually, `setObservableConfig()` sets a global observable transform that is applied automatically.

```
import Rx from 'rxjs'
import { setObservableConfig } from 'incompose'

setObservableConfig({
  // Converts a plain ES observable to an RxJS 5 observable
  fromESObservable: Rx.Observable.from
})
```

In addition to `fromESObservable`, the config object also accepts `toESObservable`, which converts a stream back into an ES observable. Because RxJS 5 observables already conform to the ES observable spec, `toESObservable` is not necessary in the above example. However, it is required for libraries like RxJS 4 or xstream, whose streams do not conform to the ES observable spec.

Fortunately, you likely don't need to worry about how to configure Incompose for your favorite stream library, because Incompose provides drop-in configuration for you.

Note: The following configuration modules are not included in the main export. You must import them individually, as shown in the examples.

## API
```
setObservableConfig<Stream>({
  fromESObservable<T>: ?(observable: Observable<T>) => Stream<T>,
  toESObservable<T>: ?(stream: Stream<T>) => Observable<T>
})
```

## Example

### RxJS
```jsx
import rxjsconfig from 'incompose/dist/rxjsObservableConfig'
setObservableConfig(rxjsconfig)
```

### RxJS 4 (legacy)
```jsx
import rxjs4config from 'incompose/dist/rxjs4ObservableConfig'
setObservableConfig(rxjs4config)
```

### most
```jsx
import mostConfig from 'incompose/dist/mostObservableConfig'
setObservableConfig(mostConfig)
```

### xstream
```jsx
import xstreamConfig from 'incompose/dist/xstreamObservableConfig'
setObservableConfig(xstreamConfig)
```

### Bacon
```jsx
import baconConfig from 'incompose/dist/baconObservableConfig'
setObservableConfig(baconConfig)
```

### Kefir
```jsx
import kefirConfig from 'incompose/dist/kefirObservableConfig'
setObservableConfig(kefirConfig)
```

### Flyd
```jsx
import flydConfig from 'incompose/dist/flydObservableConfig'
setObservableConfig(flydConfig)
```