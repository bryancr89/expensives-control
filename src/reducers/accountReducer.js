import * as actions from '../actions/accountActions';

const accountReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case actions.GET_ACCOUNTS:
      return [...action.accounts];
    default:
      return state;
  }
}

export default accountReducer;
