import React from "react";

import './styles.scss';

interface IProps {
  children: string;
}

const TodoEmpty = ({ children }: IProps) => (
  <div className="todo__empty">{children}</div>
);

export default TodoEmpty;
