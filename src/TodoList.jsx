import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
const TodoList = ({task,id,deleteTodo,editTodo}) => {
 
  return (
    <div className="list">
      <p>{task}</p>
      <div>
      <CiEdit className="edit" onClick={()=>editTodo(id)}/>
      <FaTrashAlt className="delete" onClick={()=>deleteTodo(id)}/>
      </div>
    </div>
  )
}

export default TodoList
