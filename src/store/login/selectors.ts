import { RootState } from "../";

export const loginValueSelector = (state: RootState) => state.loginForm.login.value;
export const passwordValueSelector = (state: RootState) => state.loginForm.password.value;
export const loginErrorMessageSelector = (state: RootState) => state.loginForm.login.errorMessage;
export const passwordErrorMessageSelector = (state: RootState) => state.loginForm.password.errorMessage;
export const isCheckedSelector = (state: RootState) => state.loginForm.isChecked;
