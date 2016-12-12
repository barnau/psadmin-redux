import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {

  switch(action.type) {

    case types.LOAD_COURSES_SUCCESS:

      return action.courses; // point at where new state object added with new courses from api

    default:
      return state;
  }
}
