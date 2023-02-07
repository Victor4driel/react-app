const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    },
    {
        _id: 2,
        description: 'Reunião com a equipe',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta médica na terça',
        done: false
    },
    {
        _id: 4,
        description: 'Estudar para prova de React',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {
                ...state,
                description: action.payload
            }
        case 'TODO_SEARCHED':
            return {
                ...state, 
                list: action.payload.data
            }
        default:
            return state
    }
}

