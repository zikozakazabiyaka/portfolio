import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const NavigationList = ({ children }: IProps) => (
  <ul className="navigation__list">
    {children}
  </ul>
);

export default NavigationList;
