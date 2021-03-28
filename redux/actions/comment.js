import serviceHandler from "../../utils/services/serviceHandler";
import cookies from "../../utils/services/cookie";
import { COOKIE_IDENTIFIER, COOKIE_ID } from "../../core/constants/auth";
import ACTIONTYPES from "../constants/actionTypes";

export const createCommentAction = async (data) => {
  console.log("comment chala -->", data);
  const USER_DATA = cookies.get(COOKIE_ID);
  if (USER_DATA) {
    const PARSED_DATA = JSON.parse(USER_DATA);
    const USER_ID = PARSED_DATA._id;
    data.userID = USER_ID;
    const res = await serviceHandler.post(
      `comment/create`,
      { body: JSON.stringify(data) },
      true
    );
    console.log("res in commentAction redux-->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } else {
    throw new Error("Please Signin to comment");
  }
};

export const createReplyAction = async (data) => {
  console.log("reply chala -->", data);
  const USER_DATA = cookies.get(COOKIE_ID);
  if (USER_DATA) {
    const PARSED_DATA = JSON.parse(USER_DATA);
    const USER_ID = PARSED_DATA._id;
    data.userID = USER_ID;
    const res = await serviceHandler.post(
      `comment/reply`,
      { body: JSON.stringify(data) },
      true
    );
    console.log("res -->", res);
    if (res.result) {
      return res;
    }
    throw res.message;
  } else {
    throw new Error("Please Signin to comment");
  }
};

export const getCommentsAction = (propertyID) => {
  return async (dispatch) => {
    const res = await serviceHandler.get(`comment/${propertyID}`, null, true);
    console.log("res getComment-->", res);
    dispatch({ type: ACTIONTYPES.COMMENTS, payload: res.body });
  };
};

export const getRepliesAction = async (body) => {
  try {
    console.log("body to send -->", body);
    const obj = {
      ids: body,
    };
    const res = await serviceHandler.post(
      "comment/getReplies",
      { body: JSON.stringify(obj) },
      true
    );
    console.log("res of get replies -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const editCommentAction = async (commentID, comment) => {
  try {
    const USER_DATA = cookies.get(COOKIE_ID);
    if (USER_DATA) {
      const PARSED_DATA = JSON.parse(USER_DATA);
      const USER_ID = PARSED_DATA._id;
      const obj = {
        commentID,
        comment,
        userID: USER_ID,
      };
      const res = await serviceHandler.put(
        "comment/edit",
        { body: JSON.stringify(obj) },
        true
      );
      console.log("res of edit comment -->", res);
      if (res.result) {
        return res.body;
      }
      throw res.message;
    }
  } catch (e) {
    throw e;
  }
};

export const deleteCommentAction = async (commentID) => {
  try {
    const obj = {
      commentID,
    };
    const res = await serviceHandler.delete(
      "comment/delete",
      { body: JSON.stringify(obj) },
      true
    );
    console.log("res of edit comment -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};
