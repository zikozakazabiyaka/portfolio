import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const SectionListItem = ({ children }: IProps) => (
  <li className="section__list-item">
    {children}
  </li>
);

export default SectionListItem;
