import React, { ReactNode } from "react";

import './styles.scss';

interface IProps {
  children: ReactNode;
}

const Grid = ({ children }: IProps) => (
  <div className="grid">{children}</div>
);

export default Grid;
