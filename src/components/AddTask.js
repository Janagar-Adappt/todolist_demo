import React, { useState } from 'react'

const AddTask = ({ onSave }) => {
  const [text, setText] = useState('')
  const [desc, setDesc] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text && !desc) {
      alert('please fill text and desc')
    } else if (text && desc) {
      onSave({ text, desc })
    }

    setText('')
    setDesc('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input type="text" placeholder='add task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <input type="text" placeholder="desc " value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}

export default AddTask