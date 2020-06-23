import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList'
import Context from './context';
import Loader from './Loader'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {

  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
        setLoading(false)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo (title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return ( 
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
        <h1 className='header'>Today</h1>

        {loading && <Loader />}
        {todos.length ? (
            <TodoList className='todo-list' todos={todos} onToggle={toggleTodo} /> 
          ) : ( 
            loading ? null : <p>No todos</p>
        )} 

        <div className="add-todo">
          <React.Suspense fallback={<p>Loading... </p>}>
            <AddTodo onCreate={addTodo} />
          </React.Suspense>
        </div>

        
        
      </div>
    </Context.Provider>
  )
}

export default App;
