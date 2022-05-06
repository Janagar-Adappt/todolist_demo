import React, { useState, useEffect } from 'react'
import { v4 as uuid4 } from 'uuid'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([]) //task state
  const [showAddTask, setShowAddTask] = useState(false)

  // Fetching from Local Storage
  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

  useEffect(() => {
    if (getTasks == null) {
      setTasks([])
    } else {
      setTasks(getTasks);
    }
  }, [])

  const addTask = (task) => {
    const id = uuid4();
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));

  }

  // Delete Task

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);

    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  }

  // Edit task

  const editTask = (id) => {

    const text = prompt("Task Name")
    const desc = prompt("Desc Name")
    let data = JSON.parse(localStorage.getItem('taskAdded'));

    const myData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          text,
          desc,
          id: uuid4()
        }
      }
      return item
    })

    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();

  }

  return (
    <div className="container">
      <Header showForm={() => setShowAddTask(!showAddTask)} changeTextColor={showAddTask} />
      {showAddTask && <AddTask onSave={addTask} />}


      {
        tasks.length > 0
          ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
          :
          ('No Task Found!')
      }
    </div>
  )
}

export default App