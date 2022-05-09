import { useState } from 'react';
import Task from './Task';
import "../index.css"

const Tasks = ({ todos, pagesVisited, usersPerPage, deleteTask, editTask, toggleTask }) => {
  const [query, setQuery] = useState('')
  return (
    <>
      <div className="form-control">
        <input type="text" placeholder="Search todo" onChange={(e) => setQuery(e.target.value)} />
      </div>
      {todos.slice(pagesVisited, pagesVisited + usersPerPage).filter(task => task.text.toLowerCase().includes(query)).map((task) => (<Task key={task.id} task={task} onDeleteTask={deleteTask} onEditTask={editTask} toggleTask={toggleTask} />))}
    </>
  )
}

export default Tasks;
