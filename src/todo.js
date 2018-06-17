import React, { Component } from 'react';
import Task from './task';
import todo from './style/todo.css'

class Todo extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        let {id,todo,onRemove} = this.props
        return(
            <div className="todoWrapper">
                <li className="list">
                {todo}
                <button onClick = {(id) => onRemove(id)} 
                        className="removeTodo">Remove</button>
                </li>
            </div>
        )
    }
}


export default Todo;