import serviceHandler from "../../utils/services/serviceHandler";
import cookies from "../../utils/services/cookie";
import { COOKIE_IDENTIFIER, COOKIE_ID } from "../../core/constants/auth";
import ACTIONTYPES from "../constants/actionTypes";

export const getProfileAction = async () => {
  try {
    const USER_DATA = cookies.get(COOKIE_ID);
    if (USER_DATA) {
      const PARSED_DATA = JSON.parse(USER_DATA);
      const USER_ID = PARSED_DATA._id;
      const res = await serviceHandler.get(`user/profile`);
      console.log("res -->", res);
      if (res.result) {
        return res.body;
      }
      throw res.message;
    } else {
      throw new Error("Please Signin to continue");
    }
  } catch (e) {
    throw e;
  }
};

export const updateProfileAction = async (data, token) => {
  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers = { Authorization: token, 'Content-Type': 'application/json' }
  }
  try {
    console.log("profile chala -->", data);
    const res = await serviceHandler.put(`user`, {
      body: JSON.stringify(data),
      headers
    });
    console.log("res -->", res);
    if (res.result) {
      return res;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const setPasswordAction = async (data, token) => {
  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers = { Authorization: token, 'Content-Type': 'application/json' }
  }
  try {
    console.log('profile chala -->', data)
    const res = await serviceHandler.put(`user/password`, {
      body: JSON.stringify(data),
      headers
    })
    console.log('res -->', res)
    if (res.result) {
      return res
    }
    throw res.message
  } catch (e) {
    throw e
  }
}


export const updatePasswordAction = async (data) => {
    try {
      console.log("password chala -->", data);
      const res = await serviceHandler.post(`user/resetPassword`, {
        body: JSON.stringify(data),
      });
      console.log("res -->", res);
      if (res.result) {
        return res;
      }
      throw res.message;
    } catch (e) {
      throw e;
    }
  };


  export const getUserFeedback = async (data) => {
    try{
      const res = await serviceHandler.post(`user/feedback`, {
        body: JSON.stringify(data),
      });
      console.log("res -->", res);
      if (res.result) {
        return res;
      }
      throw res.message;
    }
    catch(e){
      throw e
    }
  }