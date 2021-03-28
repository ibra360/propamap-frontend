import fetch from "isomorphic-unfetch";

import htmlHelper from "../helpers/htmlHelper";
import cookies from "./cookie";
import { COOKIE_IDENTIFIER } from "../../core/constants/auth";
import config from "../../core/config";

const serviceHandler = {
  get: async (url, request = null, chatUrl = false) => {
    console.log("URL in service handler", url, request);
    return await fetchRequest("GET", url, request || {}, chatUrl);
  
   
    

  },

  post: async (url, request = null, chatUrl = false) => {
    return await fetchRequest("POST", url, request || {}, chatUrl);
  },

  put: async (url, request = null, chatUrl = false) => {
    return await fetchRequest("PUT", url, request || {}, chatUrl);
  },

  delete: async (url, request = null, chatUrl = false) => {
    return await fetchRequest("DELETE", url, request || {}, chatUrl);
  },
};

const fetchRequest = async (
  method,
  url,
  { body = null, headers = null, signal = null },
  chatUrl
) => {
  url = chatUrl ? config.chatApiBaseUrl + url : config.apiBaseUrl + url;
  console.log("url2 in SERVICE HANDLERS -->", url, headers);
  let request = {
    method: method,
    headers: headers || {},
  };
  if (signal !== null) {
    request.signal = signal;
  }
  if (headers !== null) {
    request.headers = headers;
  }
  if (body !== null) {
    if (headers === null)
      request.headers = {
        ...request.headers,
        "Content-Type": "application/json",
      };
    request.body = body;
  }

  if (!request.headers.Authorization && !request.headers.token) {
    request.headers.Authorization = cookies.get(COOKIE_IDENTIFIER);
  }

  let status;

  return fetch(url, request)
    .then((response) => {
      status = response.status;
      return response.text().then((text) => {
        if (text) {
          try {
            return JSON.parse(text);
          } catch (error) {
            return text;
          }
        } else {
          return {};
        }
      });
    })
    .then((responseBody) => {
      return {
        status: status,
        message: responseBody.responseMessage,
        body: responseBody.result,
        count: responseBody.count,
        errors: responseBody.errors,
        token: responseBody.token,
        result:
          htmlHelper.getStatus(status) == 200 ||
          htmlHelper.getStatus(status) == 300,
      };
    })
    .catch((error) => {
      return { status: 500, body: error, result: false };
    });
};

export default serviceHandler;
