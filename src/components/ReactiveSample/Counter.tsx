import {
  createSignal,
  createMemo,
  Component,
} from 'solid-js'

// コンポーネントはただの関数
const Counter: Component = () => {
  // createStateではなくcreateSignal
  const [count, setCount] = createSignal(0)
  // computedな値を作ることもできる
  const msg = createMemo(() => `count = ${count()}`)

  const handleChange = (event: Event): void => {
    if (!(event.target instanceof HTMLInputElement)) {
      return
    }
    const n = Number(event.target.value)
    if (Number.isSafeInteger(n)) {
      setCount(n)
    }
  }

  return (
    <div class="counter">
      <label>{msg()}</label>
      <input
        type="number"
        value={count()}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Counter;