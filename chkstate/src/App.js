import React, { Component } from 'react'
import Todo from './component/Todo.jsx'

export default class App extends Component {
  state={
    todose:[
      {
        id:Math.random(),task:"learn",isdone:false
      },
      {
        id:Math.random(),task:"take",isdone:false
      },
      {
        id:Math.random(),task:"give",isdone:false
      }
    ]
  }
  handlDelete=(x)=>this.setState({todose:this.state.todose.filter(el=>el.id!==x)})

  render() {
    return (
      <div>
        <Todo saif={this.state.todose} del={this.handlDelete} />
      </div>
    )
  }
}
