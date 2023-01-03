import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} onChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}