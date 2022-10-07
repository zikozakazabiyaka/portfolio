import React, { ReactElement } from "react";

import './styles.scss'

interface IProps {
  children: ReactElement;
}

const StarWarsPagination = ({ children }: IProps) => (
  <div className="star-wars__pagination">{children}</div>
);

export default StarWarsPagination;
