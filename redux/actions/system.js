import ActionTypes from '../constants/actionTypes';

export const ActiveRouteDispatch = (route) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CHANGEACTIVEROUTE, payload: route });
  };
};

export const LastRouteDispatch = (route) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LASTPATH, payload: route });
  };
};

export const RequestedRouteDispatch = (route) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.REQUESTEDROUTE, payload: route });
  };
};

export const UserDispatch = (user) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER, payload: user });
  };
};

export const UserVerified = (user) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_VERIFIED, payload: user });
  };
};

export const ProfileDispatch = (profile) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.PROFILE, payload: profile });
  };
};

export const PropertyDispatch = (property) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.PROPERTY, payload: property });
  };
};

export const SearchPropertyDispatch = (property) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SEARCHPROPERTY, payload: property });
  };
};

export const SearchOptionsDispatch = (options) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SEARCHOPTIONS, payload: options });
  };
};

export const SearchPropertyCountDispatch = (count) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SEARCHCOUNT, payload: count });
  };
};


export const ChatPropertiesDispatch = (properties) => {
  return (dispatch) => {
    dispatch({type: ActionTypes.SELLER_CHATROOMS, payload:properties})
  }
}

export const ChatroomsDispatch = (chatrooms) => {
  return (dispatch) => {
    dispatch({type: ActionTypes.BUYER_CHATROOMS, payload:chatrooms})
  }
}


export const ChatroomDataDispatch = (chatroomdata) => {
  console.log('REDUX========',chatroomdata)
  return (dispatch) => {
    dispatch({type: ActionTypes.CHATROOM_DATA, payload:chatroomdata})
  }
}