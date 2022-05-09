import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'

const AddTask = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

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
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input type="text" placeholder='add task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}

export default AddTask