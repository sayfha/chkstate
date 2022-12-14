import React, { Component } from 'react'
import Todo from './component/Todo.jsx'
import './App.css'
import Addtask from './component/Addtask.jsx'
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
  handelComplete=(y)=>{this.setState({todose:this.state.todose.map(el=>el.id===y?{...el,isdone:!el.isdone}:el)})}
  
  handleAdd=(input)=>{
    const newTask={
      id: Math.random(),
      action:input,
      isdone:false
    };
    this.setState({todose:[newTask,...this.state.todose]})
  };
  render() {
    return (
      <div>
        <Addtask add={this.handleAdd} />
        <Todo saif={this.state.todose} del={this.handlDelete} comp={this.handelComplete} />
      </div>
    )
  }
}
