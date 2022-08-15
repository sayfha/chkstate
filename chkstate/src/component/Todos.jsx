import React from 'react'

const Todos = ({task,del,comp}) => {
  
  return (
    <div>
      <h1>
        {task.task}
      </h1>
      <button onClick={() =>comp(task.id)}>{task.isdone?"undo":"completed"}</button>
      <button onClick={()=>del(task.id)}>Delete</button>
    </div>
  )
}

export default Todos