import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement;
}

const NavigationListItem = ({ children }: IProps) => (
  <li className="navigation__list-item">
    {children}
  </li>
);

export default NavigationListItem;
