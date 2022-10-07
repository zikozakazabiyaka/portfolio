import React from "react";

import './styles.scss';

interface IProps {
  children: string;
}

const TodoInfo = ({ children }: IProps) => (
  <div className="todo__info">{children}</div>
);

export default TodoInfo;
