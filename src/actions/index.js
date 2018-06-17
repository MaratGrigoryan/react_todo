export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

export const removeTodo = (taskId) => ({
    type: REMOVE_TODO,
    palyoad: taskId
});