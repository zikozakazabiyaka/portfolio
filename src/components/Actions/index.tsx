import React, { ReactNode } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: ReactNode;
  fullWidth?: boolean;
}

const Actions = ({ children, fullWidth }: IProps) => (
  <div className={classNames('actions', {
    'actions--full-width': fullWidth,
  })}
  >
    {children}
  </div>
);

export default Actions;
