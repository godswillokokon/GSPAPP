import Axios from "@utils/Axios";
// import * as types from "../types";
import Session from "../../utils/Session";
import SupportHeader from "../../utils/SupportHeader";

export const login = data => async dispatch => {
  try {
    console.log(":before");
    const response = await Axios.post(`/login`, { ...data });
    console.log("hiit res");
    console.log("TOKEN", response.data.token);
    console.log("DATA", response.data);
    console.log("USER", response.user);
    const saveToken = Session.saveToken(response.data.token);
    console.log("savve tokenn");
    Session.saveUser(response.data.user);
    await StaticStoreUserData(response.data.user)(dispatch);
    if (saveToken) {
      await dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data.token
      });
    }
    console.log(":after");
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response
    });
  }
};

export const StaticStoreUserData = data => async dispatch => {
  await dispatch({
    type: "USER_DATA",
    payload: { ...data }
  });
};

export const resetFailureAction = () => dispatch => {
  dispatch({
    type: "USER_AUTH_ERROR",
    payload: null
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: "USER_LOGIN_SUCCESS",
    payload: null
  });
};

export const createAccount = data => async dispatch => {
  try {
    console.log(":before");
    console.log(data);
    const response = await Axios.post(`/register`, { ...data });
    console.log(":after");
    console.log(...data);
    console.log("responessss", response);
    console.log("dot data", response.data);
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: response.data
    });
    login(data)(dispatch);
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response.data.message
    });
  }
};

export const refreshAuthentication = token => async dispatch => {
  try {
    await dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: token
    });
    if (!token) {
      await Session.logout();
      await Axios.get("/auth/logout");
      await dispatch({
        type: "USER_DATA",
        payload: null
      });
    }
  } catch (e) {
    return 401;
  }
};

export const GetUserData = token => async dispatch => {
  try {
    const response = await Axios.get("/user", await SupportHeader());
    Session.saveUser(response.data);
    dispatch({
      type: "USER_DATA",
      payload: { ...response.data }
    });
    return response.data;
  } catch (e) {
    // toast.error("Error Notification !");
    Session.logout();
    return 401;
  }
};