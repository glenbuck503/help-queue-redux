import * as c from './../actions/ActionsTypes';

export default (state = false, action) => {
  switch (action.type) {
  case c.TOGGLE_FORM:
    return !state;
  default:
    return state;
  }
};