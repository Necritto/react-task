import { AUTH_SUCCESS, AUTH_LOGOUT, GET_AVATAR } from "./actionTypes";

const initialState = {
  isValid: false,
  userAvatar: "",
};

export default function authReducer(state = initialState, { type, avatar_url }) {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isValid: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isValid: false,
        userAvatar: "",
      };
    case GET_AVATAR:
      return {
        ...state,
        userAvatar: avatar_url,
      };
    default:
      return state;
  }
}
