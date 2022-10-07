import {
  SET_LOGIN_ERROR_MESSAGE,
  SET_PASSWORD_ERROR_MESSAGE,
  SET_LOGIN_VALUE,
  SET_PASSWORD_VALUE,
  CLEAR_FORM,
  SET_CHECKED,
  SET_CLEAR_LOGIN_ERROR_MESSAGE,
  SET_CLEAR_PASSWORD_ERROR_MESSAGE
} from "./constants";

import { LoginType } from "./types";

export const INITIAL_STATE: LoginType = {
  isChecked: false,
  login: {
    value: '',
    errorMessage: ''
  },
  password: {
    value: '',
    errorMessage: ''
  }
}

const loginReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case SET_LOGIN_VALUE:
      return { ...state, login: { ...state.login, value: action.payload }};
    case SET_PASSWORD_VALUE:
      return { ...state, password: { ...state.password, value: action.payload }};
    case SET_LOGIN_ERROR_MESSAGE:
      return { ...state, login: {...state.login, errorMessage: action.payload }};
    case SET_PASSWORD_ERROR_MESSAGE:
      return { ...state, password: {...state.password, errorMessage: action.payload }};
    case SET_CLEAR_LOGIN_ERROR_MESSAGE:
      return { ...state, login: { ...state.login, errorMessage: '' }};
    case SET_CLEAR_PASSWORD_ERROR_MESSAGE:
      return { ...state, password: { ...state.password, errorMessage: '' }};
    case CLEAR_FORM:
      return INITIAL_STATE;
    case SET_CHECKED:
      return { ...state, isChecked: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
