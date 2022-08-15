import React from 'react'
import Todos from './Todos'

const Todo = ({saif,del}) => {
   
  return (
    <div>
        {saif.map(el=><Todos del={del} task={el} key={el.id} />)}
    </div>
  )
}

export default Todo