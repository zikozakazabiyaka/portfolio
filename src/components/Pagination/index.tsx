import React, { ReactElement } from "react";

import './styles.scss'

interface IProps {
  children: ReactElement;
}

const Pagination = ({ children }: IProps) => (
  <div className="pagination">{children}</div>
);

export default Pagination;
