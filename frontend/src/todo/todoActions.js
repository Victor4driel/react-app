import axios from "axios"

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

// export const add = (description) => {
//     const request = axios.post(URL, { description })
//     return [
//         {
//             type: 'TODO_ADDED',
//             payload: request
//         },
//         search()
//     ]
// }

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(search()))
            .then(resp => dispatch(clearDescription()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPeding = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clearDescription = () => {
    return [{type: 'TODO_CLEAR'}, search()]  
}



