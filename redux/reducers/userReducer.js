import ActionTypes from '../constants/actionTypes';

const initial_state = {
  User: {},
  Profile: {},
  Property: null,
  SearchProperty: [],
  SearchOptions: null,
  SearchCount: 0
};

const UserReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.USER:
      return {
        ...state,
        User: action.payload
      };
    case ActionTypes.PROFILE:
      return {
        ...state,
        Profile: action.payload
      };
    case ActionTypes.PROPERTY:
      return {
        ...state,
        Property: action.payload
      };
    case ActionTypes.SEARCHPROPERTY:
      return {
        ...state,
        SearchProperty: action.payload
      };
    case ActionTypes.SEARCHOPTIONS:
      return {
        ...state,
        SearchOptions: action.payload
      };
    case ActionTypes.SEARCHCOUNT:
      return {
        ...state,
        SearchCount: action.payload
      };
    case ActionTypes.USER_VERIFIED:
      let newUserVerify = action.payload
      newUserVerify.email_verified = true
      return {
        ...state,
        User: newUserVerify
      };
    case ActionTypes.ADD_FAVOURITE:
      let newUser = {...state.User}
      newUser.favorite = [...newUser.favorite, action.payload]
      return {
        ...state,
        User: newUser
      };
    case ActionTypes.REMOVE_FAVOURITE:
      let user = { ...state.User }
      let favoriteArray = user.favorite.filter(item => item !== action.payload)
      user.favorite = favoriteArray
      return {
        ...state,
        User: user
      };
    default:
      return state;
  }
};
export default UserReducer;
