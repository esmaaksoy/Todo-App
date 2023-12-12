import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value)
        setValue('');
     
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="todoform">
        <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add a task' />
        <button type="submit" className="btn">ADD</button>
      </form>
    </div>
  )
}

export default TodoForm
