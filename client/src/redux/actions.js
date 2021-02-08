import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const ADD_TODO_STARTED = "ADD_TODO_STARTED";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";


export const addTodo = ( todo ) => {
    return dispatch => {
        dispatch(addTodoStarted());

        axios.post('http://localhost:5000/todos', 
                todo
            )
            .then(res => {
                dispatch(addTodoSuccess(res.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};


const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
  });

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
      ...todo
    }
  });
  
  const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
      error
    }
  });








export function addTodoOld(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}


