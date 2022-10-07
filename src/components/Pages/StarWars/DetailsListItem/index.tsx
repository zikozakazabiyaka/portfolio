import React, { ReactNode } from "react";

import './styles.scss';

interface IProps {
  children: ReactNode;
}

const StarWarsDetailsListItem = ({ children }: IProps) => (
  <li className="details__list-item">{children}</li>
);

export default StarWarsDetailsListItem;
