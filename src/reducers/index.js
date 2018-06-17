import { ADD_TODO, REMOVE_TODO } from '../actions/index.js';
import { combineReducers } from 'redux';

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state,
          action.payload
      ]
      
    case REMOVE_TODO:
      let newState = [...state]
        // newState.filter((t) => {
        //    t !== action.taskId
        // })
      //  console.log(action.taskId);
        return newState;
        default:
      return state;
  }
};

export const rootReducers = combineReducers({
  tasks:reducers
});

