import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  
  return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function loadCourses() {

  return function(dispatch) { // anonymous return function needed for each thunk
    return courseApi.getAllCourses().then( courses => {
        dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
