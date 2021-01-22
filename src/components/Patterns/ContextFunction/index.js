import {CounterProvider} from './ContextCounter'
import Counter from './ScreenCounter';

function ContextFunction() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default ContextFunction;