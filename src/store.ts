import { signal } from '@preact/signals-react'

export interface ITodo {
  id: number
  text: string
  completed: boolean
}

const count = signal(0)

const todos = signal<ITodo[]>([])
const text = signal('')

const addTodo = () => {
  todos.value = [
    ...todos.value,
    { id: todos.value.length, text: text.value, completed: false },
  ]
  text.value = ''
}

const toggleTodo = (id: number) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )
}

export { count, todos, text, addTodo, toggleTodo }
