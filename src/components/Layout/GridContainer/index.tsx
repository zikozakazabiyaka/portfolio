import React, { ReactNode } from "react";

import './styles.scss';

interface IProps {
  children: ReactNode;
};

const GridContainer = ({ children }: IProps) => (
  <main className="grid__container">
    {children}
  </main>
);

export default GridContainer;
