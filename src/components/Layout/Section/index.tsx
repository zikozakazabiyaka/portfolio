import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const Section = ({ children }: IProps) => (
  <div className="section">{children}</div>
);

export default Section;
