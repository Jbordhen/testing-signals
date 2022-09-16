import { count } from './../store'

const Counter = () => {
  return (
    <div>
      {/* <h1>{count.value}</h1> */}
      <button onClick={() => count.value++}>Increase</button>
    </div>
  )
}
export default Counter
