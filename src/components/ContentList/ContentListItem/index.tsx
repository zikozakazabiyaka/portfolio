import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const ContentListItem = ({ children }: IProps) => (
  <li className="content-list__item">{children}</li>
);

export default ContentListItem;
