import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { changeDescription, search, add, clearDescription } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.KeyHandler = this.KeyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    KeyHandler(e) {
        const { add, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            this.props.clearDescription()
        }
    }

    render() {
        const { add, search, description, clearDescription } = this.props

        return (
            <div role='form' className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.KeyHandler}
                        value={description}
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={_ => add(description)} />
                    <IconButton style='info' icon='search' onClick={search} />
                    <IconButton style='default' icon='close'
                        onClick={clearDescription} />
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        description: state.todo.description
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeDescription, search, add, clearDescription }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)