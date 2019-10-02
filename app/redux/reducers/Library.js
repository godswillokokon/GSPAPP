import * as types from "../types";

const initialState = {
  token: null,
  library: {},
  authError: null,
  createResponse: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LIBRARY_SUCCESS:
      return {
        ...state,
        token: payload
      };
    case types.LIBRARY_FAILED:
      return {
        ...state,
        authError: payload
      };

    default:
      return state;
  }
};
