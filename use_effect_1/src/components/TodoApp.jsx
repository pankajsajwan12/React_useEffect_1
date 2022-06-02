import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const TodoApp = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = (newTodo)=>{
        setTodo([...todo,{
            id: uuidv4(),
            value:newTodo,
        }]);
    }

    const deleteTodo = (value)=>{
        console.log("hy i am from delete");
        setTodo(todo.filter((todos) => todos !== value))
        console.log("i am after delete");
    }
  return (
    <div>
     TodoApp
    <TodoInput addTodo={addTodo}/>
    
    <TodoList>
        <ul>
        {todo.map((todo)=>(
            <TodoItem key={todo.id}
            value={todo.value}
            deleteTodo={deleteTodo}
            />
        ))}
        </ul>
    </TodoList>
    </div>
  )
}

export default TodoApp