import React from 'react'
import Todos from './Todos'

const Todo = ({saif,del,comp}) => {
   
  return (
    <div>
        {saif.map(el=><Todos del={del} task={el} comp={comp} key={el.id} />)}
    </div>
  )
}

export default Todo