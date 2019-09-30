import Axios from "@utils/Axios";
import Alert from 'react-native';
// import * as types from "../types";
import Session from "../../utils/Session";
import SupportHeader from "../../utils/SupportHeader";


export const login = data => async dispatch => {
  try {
    const response = await Axios.post(`/login`, { ...data });
    const saveToken = Session.saveToken(response.data.token);
    // const tok = response.data.token
    // Session.saveToken('token', tok);
    if (saveToken) {
      await dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data.token
      });
    }

    Session.saveUser(response.data.userDetails);
    await StaticStoreUserData(response.data.userDetails)(dispatch);
    this.props.navigation.navigate("Profile");
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response.data.errors,
    });
    let err = e.response.data.errors
    alert(err[0].detail);
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
  // AsyncStorage.clear();
  dispatch({
    type: "USER_LOGIN_SUCCESS",
    payload: null
  });
};

export const createAccount = data => async dispatch => {
  try {
    const response = await Axios.post(`/register`, { ...data });
    dispatch({
      type: "USER_CREATE_ACCOUNT_SUCCESS",
      payload: response.data.token
    });
    login(data)(dispatch);
    this.props.navigation.navigate("Profile");
  } catch (e) {
    dispatch({
      type: "USER_CREATE_ACCOUNT_FAILURE",
      payload: e.response.data.message,
    });
    let errr = e.response.data.errors
    alert(errr[0].detail);

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
    const response = await Axios.get(`/user`, await SupportHeader());
    // Session.saveUser(response.data);
    // console.log("profile", response)
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
export const GetLibrary = data => async dispatch => {
  try {

    const response = await Axios.get(`/admin/course`, { ...data });
    // Session.saveUser(response.data);
    console.log("topics", response)
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
