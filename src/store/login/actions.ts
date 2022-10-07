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

export const setLoginValue = (payload: string) => ({ type: SET_LOGIN_VALUE, payload });
export const setPasswordValue = (payload: string) => ({ type: SET_PASSWORD_VALUE, payload});
export const setLoginErrorMessage = (payload: string) => ({ type: SET_LOGIN_ERROR_MESSAGE, payload});
export const setPasswordErrorMessage = (payload: string) => ({ type: SET_PASSWORD_ERROR_MESSAGE, payload});
export const setClearLoginErrorMessage = () => ({ type: SET_CLEAR_LOGIN_ERROR_MESSAGE });
export const setClearPasswordErrorMessage = () => ({ type: SET_CLEAR_PASSWORD_ERROR_MESSAGE });
export const clearForm = () => ({ type: CLEAR_FORM });
export const setChecked = (payload: boolean) => ({ type: SET_CHECKED, payload });
