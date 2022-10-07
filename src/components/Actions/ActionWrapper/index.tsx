import React, { ReactElement } from "react";

import './styles.scss'

interface IProps {
  children: ReactElement;
}

const ActionWrapper = ({ children }: IProps) => (
  <div className="action-wrapper">{children}</div>
);

export default ActionWrapper;
