import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement;
  message?: string;
}

const ControlInput = ( { children, message }: IProps) => (
  <div className="control-input">
    {children}
    {message && <span className="control-input__message">{message}</span>}
  </div>
)

export default ControlInput;
