import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const FormGroupControl = ({ children }: IProps) => (
  <div className="form-group__control">{children}</div>
);

export default FormGroupControl;
