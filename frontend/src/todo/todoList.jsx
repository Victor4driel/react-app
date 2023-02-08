import React from "react";
import { connect } from "react-redux";
import { markAsDone, markAsPeding, del } from "./todoActions";

import IconButton from "../template/iconButton";
import '../template/custom.css'
import { bindActionCreators } from "redux";

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo =>
        (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}/>
                
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.markAsPeding(todo)}
                        hide={!todo.done}/>
                
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.del(todo)}
                        hide={!todo.done}/>
                </td>
            </tr>

        )
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

function mapStateToProps(state) {
    return {
        list: state.todo.list
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ markAsDone, markAsPeding, del }, dispatch)
}

// function mapDispatchToProps(dispatch) {
//     return {
//         markAsDone: () => {
//             const action = markAsDone()
//             dispatch(action)
//         },
//         markAsPeding: () => {
//             const action = markAsPeding()
//             dispatch(action)
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)