import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const Login = ({ children }: IProps) => (
  <div className="login">{children}</div>
);


export default Login;
