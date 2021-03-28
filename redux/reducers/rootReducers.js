import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import FlagReducer from './flagReducer';
import ChatReducer from './chatReducer'
import CommentReducer from "./commentReducer"

const rootReducer = combineReducers({
  UserReducer,
  FlagReducer,
  ChatReducer,
  CommentReducer
});

export default rootReducer;
