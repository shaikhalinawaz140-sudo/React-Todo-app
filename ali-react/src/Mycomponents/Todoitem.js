import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
  return (
    <div className="container, my-3.5">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      <button className="btn btn-sm btn-success mx-2" onClick={() => alert("You have completed the task")}>Complete</button>
    </div>
  )
}