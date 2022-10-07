import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const Summary = ({ children }: IProps) => (
  <div className="summary">{children}</div>
);

export default Summary;