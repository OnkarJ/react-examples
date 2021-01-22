import {useCounter, decrement, increment} from './ContextCounter'
import './buttonStyle.css'

export default function Counter() {
  const [state, dispatch] = useCounter()
  return (
    <div style={{ textAlign: 'center' }}>
      <div>Counter: {state.count}</div>
      <button className="button1" onClick={() => decrement(dispatch)}>Decrement</button>
      <button className="button1" onClick={() => increment(dispatch)}>Increment</button>
    </div>
  )
}