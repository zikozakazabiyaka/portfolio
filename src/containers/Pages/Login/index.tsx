import React, { ChangeEventHandler, FormEventHandler } from "react";
import { connect } from "react-redux";

import Container from "../../../components/Layout/Container";
import FormGroup from "../../../components/FormGroup";
import FormGroupControl from "../../../components/FormGroup/FormGroupControl";
import Button from "../../../components/Button";
import ControlInputContainer from "../../ControlInputContainer";
import Checkbox from "../../../components/Checkbox";
import Login from "../../../components/Pages/Login";
import LoginForm from "../../../components/Pages/Login/LoginForm";
import Actions from "../../../components/Actions";
import ActionsItem from "../../../components/Actions/ActionsItem";
import Label from "../../../components/Label";
import { RootState } from "../../../store";
import {
  loginValueSelector,
  passwordValueSelector,
  loginErrorMessageSelector,
  passwordErrorMessageSelector,
  isCheckedSelector,
} from "../../../store/login/selectors";
import {
  setLoginValue,
  setPasswordValue,
  setLoginErrorMessage,
  setPasswordErrorMessage,
  setClearLoginErrorMessage,
  setClearPasswordErrorMessage,
  clearForm,
  setChecked,
} from "../../../store/login/actions";
import { isEmpty, loginIsInvalid, passwordIsInvalid } from "../../../utils/validation";
import { REQUIRED_FIELD, INCORRECT_PASSWORD, INCORRECT_LOGIN } from "../../../constants/validation";
import { PageTitle } from "../../../components/PageTitle";

interface IProps {
  loginValue: string;
  passwordValue: string;
  loginErrorMessage?: string;
  passwordErrorMessage?: string;
  isChecked?: boolean;
  setLogin: (value: string) => void;
  setPassword: (value: string) => void;
  setLoginError: (error: string) => void;
  setPasswordError: (error: string) => void;
  clearLoginError: () => void;
  clearPasswordError: () => void;
  clear: () => void;
  setChecked: (value: boolean) => void;
}

const mapStateToProps = (state: RootState) => ({
  loginValue: loginValueSelector(state),
  passwordValue: passwordValueSelector(state),
  loginErrorMessage: loginErrorMessageSelector(state),
  passwordErrorMessage: passwordErrorMessageSelector(state),
  isChecked: isCheckedSelector(state),
});

const mapDispatchToProps = {
  setLogin: setLoginValue,
  setPassword: setPasswordValue,
  setLoginError: setLoginErrorMessage,
  setPasswordError: setPasswordErrorMessage,
  clearLoginError: setClearLoginErrorMessage,
  clearPasswordError: setClearPasswordErrorMessage,
  clear: clearForm,
  setChecked: setChecked,
};

const LoginContainer = ({
  loginValue,
  passwordValue,
  loginErrorMessage,
  passwordErrorMessage,
  isChecked,
  setLogin,
  setPassword,
  setLoginError,
  setPasswordError,
  clearLoginError,
  clearPasswordError,
  clear,
  setChecked,
}: IProps) => {

  const handleChangeUserName: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setLogin(target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setPassword(target.value);
  };

  const handleChecked: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setChecked(target.checked);
  };

  const handleSubmit: FormEventHandler = (event) => {
    const loginIsEmpty = isEmpty(loginValue.trim());
    const passwordIsEmpty = isEmpty(passwordValue.trim());
    const invalidLogin = loginIsInvalid(loginValue);
    const invalidPassword = passwordIsInvalid(passwordValue);

    if (loginIsEmpty || passwordIsEmpty || invalidLogin || invalidPassword) {
      event.preventDefault();
    }

    if (loginIsEmpty) {
      setLoginError(REQUIRED_FIELD);
      setLoginValue('');
    } else if (invalidLogin) {
      setLoginError(INCORRECT_LOGIN)
    } else {
      clearLoginError();
    }

    if (passwordIsEmpty) {
      setPasswordError(REQUIRED_FIELD);
      setPasswordValue('');
    } else if (invalidPassword) {
      setPasswordError(INCORRECT_PASSWORD);
    } else {
      clearPasswordError();
    }
  };

  const handleCancel = () => {
    clear();
  };

  return (
    <>
      <PageTitle>Login form</PageTitle>
      <Login>
        <Container>
          <h2>Login form</h2>
          <LoginForm>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormGroupControl>
                  <Label htmlFor="login" isRequired>Login</Label>
                  <ControlInputContainer
                    id="login"
                    type="text"
                    onChange={handleChangeUserName}
                    value={loginValue}
                    isInvalid={!!loginErrorMessage}
                    message={loginErrorMessage}
                  />
                </FormGroupControl>
                <FormGroupControl>
                  <Label htmlFor="password" isRequired>Password</Label>
                  <ControlInputContainer
                    id="password"
                    type="password"
                    onChange={handleChangePassword}
                    value={passwordValue}
                    isInvalid={!!passwordErrorMessage}
                    message={passwordErrorMessage}
                  />
                </FormGroupControl>
                <FormGroupControl>
                  <Checkbox onChange={handleChecked} isChecked={isChecked} text="Remember me" />
                </FormGroupControl>
                <FormGroupControl>
                  <Actions fullWidth>
                    <ActionsItem>
                      <Button fill="secondary" onClick={handleCancel} >Cancel</Button>
                    </ActionsItem>
                    <ActionsItem>
                      <Button fill="primary" type="submit">Log in</Button>
                    </ActionsItem>
                  </Actions>
                </FormGroupControl>
              </FormGroup>
            </form>
          </LoginForm>
        </Container>
      </Login>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
