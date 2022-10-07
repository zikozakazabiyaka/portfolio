import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import './styles.scss';

interface IProps {
  children: string;
  to: string;
  isActive?: boolean
}

const NavigationLink = ({ children, to, isActive = false }: IProps) => (
  <Link 
    to={to}
    className={classNames("navigation__link", {
      "is-active": isActive,
    })}
  >
    {children}
  </Link>
);

export default NavigationLink;
