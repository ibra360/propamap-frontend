import ActionTypes from '../constants/actionTypes';

const initial_state = {
    comments:[]
};

const commentReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
};
export default commentReducer;
