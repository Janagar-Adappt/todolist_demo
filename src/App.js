import React, { useState, useEffect } from 'react'
import { v4 as uuid4 } from 'uuid'
import ReactPaginate from "react-paginate";
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import './index.css';

const App = () => {

  const todosList = [
    { id: 1, text: 'Buy eggs' },
    { id: 2, text: 'Walk' },
    { id: 3, text: 'Watch a movie' }
  ];

  const [tasks, setTasks] = useState(todosList) //task state
  const [showAddTask, setShowAddTask] = useState(false)

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(tasks.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Fetching from Local Storage
  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

  useEffect(() => {
    if (getTasks == null) {
      setTasks([])
    } else {
      setTasks(getTasks);
    }
  }, [])

  // Add task

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])

    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));

  }

  // Delete task

  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);

    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  }

  // Edit task

  const editTask = (id) => {

    const text = prompt("Task Name")
    let data = JSON.parse(localStorage.getItem('taskAdded'));

    const myData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          text,
          id: uuid4()
        }
      }
      return item
    })

    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();

  }

  // Line strike
  const toggleTask = id => {
    const newTasks = [...tasks];
    const doneTaskIndex = newTasks.findIndex((task) => task.id === id)
    const doneTask = newTasks[doneTaskIndex];
    doneTask.completed = !doneTask.completed;
    const allTasks = [...newTasks];
    allTasks[doneTaskIndex] = doneTask;
    setTasks(allTasks)

    localStorage.setItem("taskAdded", JSON.stringify(allTasks));

  };

  return (
    <div className="container">
      <Header showForm={() => setShowAddTask(!showAddTask)} changeTextColor={showAddTask} />
      {showAddTask && <AddTask addTodo={addTask} />}

      {
        tasks.length > 0
          ?
          (<Tasks todos={tasks} pagesVisited={pagesVisited} usersPerPage={usersPerPage} deleteTask={deleteTask} editTask={editTask} toggleTask={toggleTask} />)
          :
          ('No Task Found!')
      }
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"} />
    </div>
  )
}

export default App