import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const TodoPanel = ({ children }: IProps) => (
  <div className="todo__panel">{children}</div>
);

export default TodoPanel;
