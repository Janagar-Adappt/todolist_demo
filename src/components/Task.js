import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import '../index.css'

const Task = ({ task, onDeleteTask, onEditTask, toggleTask }) => {
  return (
    <div>
      <div className="task">
        <div>
        <p className="textBold">
            <span onClick={() => toggleTask(task.id)} style={{ 'textDecoration': task.completed ? 'line-through' : 'none' }}> {task.text} </span>
          </p>
        </div>
        <div>
          <p><FaTimes className="delIcon" onClick={() => onDeleteTask(task.id)} /></p>
          <p><FaPencilAlt className="editIcon" onClick={() => onEditTask(task.id)}/></p>
        </div>
      </div>
    </div>
  )
}

export default Task