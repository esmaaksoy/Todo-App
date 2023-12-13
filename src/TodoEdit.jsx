import { useState } from "react";

const TodoEdit = ({editTask, item}) => {
    const [value, setValue] = useState(item.task);
    const handleSubmit = (e) => {
          e.preventDefault();
          editTask(value, item.id);
        };
    return (
        <form onSubmit={handleSubmit} className="todoform">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input" placeholder='Update task' />
        <button type="submit" className='btn'>Edit Task</button>
      </form>
      )
}

export default TodoEdit
