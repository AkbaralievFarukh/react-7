import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const url = 'https://6564248aceac41c0761d7f0e.mockapi.io/todo'

const App = () => {

  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    axios(url)
      .then(({data}) => setTodos(data))
  },[])

  const handleAddTodo = () => {
    const newTodo = {
      title: todoTitle,
      completed: false,
      completedAt: null,
      createdAt: +new Date(),
    }
    setTodoTitle('')
    axios.post(url, newTodo)
      .then(({data}) => setTodos([...todos, data]))
  }

  // const handleDeleteTodo = () => {
  //   console.log(url);
  // }

  return (
    <div className='container'>
        <h1>Todo list</h1>
        <div>
          <input type="text" 
            onChange={(e) => setTodoTitle(e.target.value)}
            value={todoTitle}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        {
          todos.map(todo => 
              <div key={todo.id} className='todo-wrapper'>
                <p>{todo.title}</p>
                <input type="checkbox" checked={todo.completed} />
                <span>{dayjs(todo.data).format('DD:MM:YYYY HH:mm')}</span>
              </div>
            )
        }
    </div>
  );
}

export default App;