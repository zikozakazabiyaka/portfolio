import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const Todo = ({ children }: IProps) => (
  <div className="todo">{children}</div>
);

export default Todo;
