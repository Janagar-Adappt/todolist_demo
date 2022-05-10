import { useState } from 'react';
import { BsTrash } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'

import styles from '../Sass/style.module.scss'

const Tasks = ({ tasks, pagesVisited, usersPerPage, deleteTask, editTask, toggleTask }) => {
  const [query, setQuery] = useState('')
  return (
    <>
      <div className={styles.searchTask}>
        <input type="text" placeholder="Search todo" onChange={(e) => setQuery(e.target.value)} />
      </div>
      {tasks.slice(pagesVisited, pagesVisited + usersPerPage).filter(task => task.text?.toLowerCase().includes(query)).map((task) => (<div key={task.id}>
        <div className={styles.task} >
          <div>
            <p className="textBold">
              <span onClick={() => toggleTask(task.id)} style={{ 'textDecoration': task.completed ? 'line-through' : 'none' }}> {task.text} </span>
            </p>
          </div>
          <div>
            <button onClick={() => deleteTask(task.id)}><BsTrash className="delIcon" /></button>
            <button onClick={() => editTask(task.id)}><AiFillEdit className="editIcon" /></button>
          </div>
        </div>
      </div>))}
    </>
  )
}

export default Tasks;
