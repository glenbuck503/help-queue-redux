import * as c from './../actions/ActionsTypes';

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {

  case c.DELETE_TICKET:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};