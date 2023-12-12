import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import TodoEdit from "./TodoEdit"
const Todo = () => {
    const [todo,setTodo] = useState([])

    const addTodo =(task) =>{
        setTodo([...todo,{
           id:new Date().getTime(),
           task:task,
           completed: false,
         edit: false
        }])
     
    }
    const deleteTodo=(id)=>setTodo(todo.filter(item=> item.id !== id))
    const editTodo =(id)=> {
      setTodo(todo.map(item=> item.id === id ? {...item, edit:!item.edit}:item))
    }

    const editTask = (ali, id) => {
      setTodo(
        todo.map((item) =>
         item.id === id ? { ...item, task:ali, edit:!item.edit } : item
        )
      );
    };
  return (
    <div className="todo">
         <h1>Todo List</h1>
     <TodoForm addTodo={addTodo}/>
     {todo.map((item)=>( 
     item.edit ? <TodoEdit editTask={editTask} item={item}/> : <TodoList {...item} deleteTodo={deleteTodo} editTodo={editTodo}/>
     ))}
    </div>
  )
}

export default Todo
