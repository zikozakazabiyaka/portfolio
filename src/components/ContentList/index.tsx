import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const ContentList = ({ children }: IProps) => (
  <ul className="content-list">{children}</ul>
);

export default ContentList;
