import React, { useReducer } from "react"

let initialCount = 0;

function init(initialCount) {
  while (initialCount < 1000) {
    initialCount++
  }

  return { count: initialCount }
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return init(action.payload)
    default:
      throw new Error()
  }
}

function ReactReducer() {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <div style={{ textAlign: 'center' }}>
      Count: {state.count}
      <br />
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  )
}

export default ReactReducer
