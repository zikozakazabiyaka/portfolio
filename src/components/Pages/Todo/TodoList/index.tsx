import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const TodosList = ({ children }: IProps) => (
  <ul className="todos__list">{children}</ul>
);

export default TodosList;
