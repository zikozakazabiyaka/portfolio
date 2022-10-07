import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const TodoContent = ({ children }: IProps) => (
  <div className="todo__content">{children}</div>
);

export default TodoContent;
