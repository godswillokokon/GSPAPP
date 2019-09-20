import Axios from "@utils/Axios";
import Alert from 'react-native';
// import * as types from "../types";
import Session from "../../utils/Session";
import SupportHeader from "../../utils/SupportHeader";


export const login = data => async dispatch => {
  try {
    console.log(":before");
    const response = await Axios.post(`/login`, { ...data });

    console.log("TOKEN", response.data.token);

    console.log("DATA", response.data);
    // console.log("USER", response.user);
    const saveToken = Session.saveToken(response.data.token);
    const tok = response.data.token
    Session.setData('token', tok);
    if (saveToken) {
      await dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data.token
      });
    }

    let my = Session.saveUser(response.data);
    await StaticStoreUserData(response.data)(dispatch);
    console.log(":after");
    console.log(my);


    // const err = response.data.errors.detail
    // console.log("OG ERROR", err)
  } catch (e) {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true }
    );

    // this.dropdown.alertWithType('error', 'Error', e.response.data);

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
    const saveToken = Session.saveToken(response.data.token);

    const tok = response.data.token
    Session.setData('token', tok);
    if (saveToken) {
      await dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data.token
      });
    }

    let my = Session.saveUser(response.data.userDetails);
    await StaticStoreUserData(response.data.userDetails)(dispatch);
    console.log(":after");
    console.log(my);
    login(data)(dispatch);
  } catch (e) {
    dispatch({
      type: "USER_AUTH_ERROR",
      payload: e.response.data.message,

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
    const response = await Axios.get(`/user`, await SupportHeader());
    // Session.saveUser(response.data);
    console.log("profile", response)
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
