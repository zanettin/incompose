# componentFromStream
## Description
Creates a React component by mapping an observable stream of props to a stream of React nodes (vdom).

You can think of propsToReactNode as a function f such that

```
const vdom$ = f(props$)
```

where props$ is a stream of props and vdom$ is a stream of React nodes. This formulation similar to the popular notion of React views as a function, often communicated as

```
v = f(d)
```

## API
```
componentFromStream(
  propsToReactNode: (props$: Observable<object>) => Observable<ReactNode>
): InfernoComponent
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
