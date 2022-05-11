import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import styles from '../Sass/style.module.scss'

const AddTask = ({ addTodo }) => {
  const [text, setText] = useState('')
  const [color, setColor] = useState('')
  const [colorText, setColorText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setColor('red')
      setColorText('Please enter the text.')
      return;
    }
    const todo = {
      id: uuid4(),
      text: text
    }
    addTodo(todo)
    setColor('')
    setColorText('')
    setText('')
  }

  return (
    <form className={styles.newTask} onSubmit={onSubmit}>
      <input type="search" placeholder="What's the Plan for Today" style={{ borderColor: color }} value={text} onChange={(e) => setText(e.target.value)} maxLength='252' />
      <button className='submit'>Add</button>
      <p>{colorText}</p>
    </form>
  )
}

export default AddTask