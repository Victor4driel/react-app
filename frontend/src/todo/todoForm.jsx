import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { changeDescription, search } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.KeyHandler = this.KeyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    KeyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.KeyHandler}
                        value={this.props.description}
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch} />
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear} />
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
    return bindActionCreators({ changeDescription, search }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)