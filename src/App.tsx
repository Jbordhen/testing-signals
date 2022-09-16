import './App.css'
import AddTodo from './components/AddTodo'
import Counter from './components/counter'
import Todos from './components/Todos'
import ViewCount from './components/ViewCount'

function App() {
  return (
    <div className='App'>
      <Counter />
      <ViewCount />
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
