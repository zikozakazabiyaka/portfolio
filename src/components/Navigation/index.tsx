import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement;
}

const Navigation = ({ children }: IProps) => (
  <nav className="navigation">
    {children}
  </nav>
);

export default Navigation;
