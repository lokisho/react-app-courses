import * as types from './actionTypes';

export function createCourse(course) {
  // step 2. action
  return { type: types.CREATE_COURSE, course };
}
