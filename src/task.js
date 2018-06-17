import React, { Component } from 'react';
import { addTodo, removeTodo } from './actions/index.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {rootReducers} from './reducers/index.js'
import Todo from './todo';
import task from './style/task.css'


class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTodos = this.deleteTodos.bind(this);
    }

    handleSubmit(event){
    event.preventDefault()
    if( this.state.value !== '' ) {
        const { addTodo } = this.props;
        addTodo(this.state.value)
        this.setState({
            value: ''
            })

         }
    }

    handleChange(event){
    this.setState({
        value: event.target.value
        })
    }

    deleteTodos(id){
        const { removeTodo } = this.props;
        console.log(removeTodo(id))
          return removeTodo(id)
    }

    render(){
        return (
            <div className="todocomponent">
                <div className="todo-wrapper">
                    <h1>Todo App</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input  type="text" 
                                name="task"
                                className = "task"
                                value={this.state.value}
                                onChange = {this.handleChange}
                        />
                        <input  type="submit" 
                                value="Submit" 
                                className="btn"/>
                    </form >
                    <div>
                        <ul>
                            {this.props.tasks.map((todo,index) => 
                            <Todo  key={index} todo={todo} id={index} onRemove={this.deleteTodos}/>)}
                        </ul>    
                    </div>  
                </div>  
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return (
        rootReducers
    )
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodo, removeTodo},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);

