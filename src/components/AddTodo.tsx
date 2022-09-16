import { addTodo, text } from './../store'

const AddTodo = () => {
  return (
    <div>
      <input
        value={text.value}
        type='text'
        required
        onChange={(e) => (text.value = e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}
export default AddTodo
