import React, { ReactElement } from "react";

interface IProps {
  children: ReactElement | ReactElement[];
}

const FormGroup = ({ children }: IProps) => (
  <div className="form-group">{children}</div>
);

export default FormGroup;
