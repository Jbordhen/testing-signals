import { ITodo, todos, toggleTodo } from '../store'

const Todos = () => {
  return (
    <div>
      <h1>Todos</h1>
      {todos.value.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.text}</h3>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
        </div>
      ))}
    </div>
  )
}

export default Todos
