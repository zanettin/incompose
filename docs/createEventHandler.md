# createEventHandler
## Description
Returns an object with properties `handler` and `stream`. `stream` is an observable sequence, and `handler` is a function that pushes new values onto the sequence. Useful for creating event handlers like `onClick`.

## API
```
createEventHandler<T>(): {
  handler: (value: T) => void
  stream: Observable<T>,
}
```

## Example
```jsx
const Counter = componentFromStream(props$ => {
  const { handler: increment, stream: increment$ } = createEventHandler()
  const { handler: decrement, stream: decrement$ } = createEventHandler()
  const count$ = Observable.merge(
      increment$.mapTo(1),
      decrement$.mapTo(-1)
    )
    .startWith(0)
    .scan((count, n) => count + n, 0)

  return props$.combineLatest(
    count$,
    (props, count) =>
      <div {...props}>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
  )
})
```
