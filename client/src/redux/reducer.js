import { DELETE_TODO, EDIT_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, ADD_TODO_STARTED } from './actions';


export let reducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO_STARTED:
            return [...state];
        case ADD_TODO_SUCCESS:
            return [...state, action.payload];
        case ADD_TODO_FAILURE:
            return [...state];
        case DELETE_TODO:
            return state.filter((todo) => { return todo.id !== action.payload });
        case EDIT_TODO:
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i] = action.payload;
                }
            }
            return [...state];
        default:
            return state;
    }
}



