import ActionTypes from '../constants/actionTypes';

import site from '../../core/config/sitemap';

const initial_state = {
  Sitemap: site,
  RequestedRoute: '/',
  LastPath: '/',
  ActiveRoute: { ...site.routes.home }
};

const FlagReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.CHANGEACTIVEROUTE:
      return {
        ...state,
        ActiveRoute: action.payload
      };
    case ActionTypes.REQUESTEDROUTE:
      return {
        ...state,
        RequestedRoute: action.payload
      };
    case ActionTypes.LASTPATH:
      return {
        ...state,
        LastPath: action.payload
      };
    default:
      return state;
  }
};
export default FlagReducer;
