import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import styles from '../Sass/style.module.scss'

const AddTask = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter the text.')
      return;
    }

    const todo = {
      id: uuid4(),
      text: text
    }
    addTodo(todo)
    setText('')
  }


  return (

    <form className={styles.newTask} onSubmit={onSubmit}>
      <input type="text" placeholder="What's the Plan for Today" value={text} onChange={(e) => setText(e.target.value)} />
      <button className='submit'>Add</button>
    </form>

  )
}

export default AddTask