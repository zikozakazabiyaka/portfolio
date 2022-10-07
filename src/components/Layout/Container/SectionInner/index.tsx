import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const SectionInner = ({ children }: IProps) => (
  <div className="section__inner">{children}</div>
);

export default SectionInner;
