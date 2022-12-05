import React, { ReactElement } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
  listStyle?: 'none';
  indent?: 'disabled'
}

const SectionList = ({ children, listStyle, indent }: IProps) => (
  <ul className={classNames("section__list", {
    [`section__list--${listStyle}`]: listStyle,
    [`section__list--${indent}`]: indent,
  })}
  >
    {children}
  </ul>
);

export default SectionList;
