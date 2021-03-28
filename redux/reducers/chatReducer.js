import ActionTypes from "../constants/actionTypes";

const initial_state = {
  chatrooms: [],
  chatProperties: [],
  chatroomData: [],
};

const chatReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.BUYER_CHATROOMS:
      return {
        ...state,
        chatrooms: action.payload,
      };
    case ActionTypes.SELLER_CHATROOMS:
      return {
        ...state,
        chatProperties: action.payload,
      };
    case ActionTypes.CHATROOM_DATA:
      return {
        ...state,
        chatroomData: action.payload,
      };
    default:
      return state;
  }
};
export default chatReducer;
