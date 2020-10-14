import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // step3. Reducer handle the action.
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
