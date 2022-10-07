import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const TodoControls = ({ children }: IProps) => (
  <div className="todo__controls">{children}</div>
);

export default TodoControls;
