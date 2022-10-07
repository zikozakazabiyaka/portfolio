import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement;
};

const LoginForm = ({ children }: IProps) => (
  <div className="login__form">{children}</div>
);

export default LoginForm;
