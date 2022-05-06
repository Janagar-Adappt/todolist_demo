import { useState } from 'react';
import Task from './Task';
import "../index.css"

const Tasks = ({ tasks, onDelete, onEdit }) => {
  const [query, setQuery] = useState('')
  return (
    <>
      <div className="form-control">
        <input type="text" placeholder="Search todo" onChange={(e) => setQuery(e.target.value)} />
      </div>
      {tasks.filter(task => task.text?.toLowerCase().includes(query)).map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />))}
    </>
  )
}

export default Tasks;
