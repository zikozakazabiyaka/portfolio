import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const TodosLisItem = ({ children }: IProps) => (
  <li className="todos__list-item">{children}</li>
);

export default TodosLisItem;
