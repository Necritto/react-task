import { AUTH_SUCCESS, AUTH_LOGOUT, GET_AVATAR } from "./actionTypes";

export function getAvatar(avatar_url) {
  return {
    type: GET_AVATAR,
    avatar_url,
  };
}

export function authSuccess() {
  return {
    type: AUTH_SUCCESS,
  };
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT,
  };
}
