import React, { ReactElement } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children?: string;
  fill?: 'primary' | 'secondary' | 'invalid';
  type?: 'button' | 'submit';
  shape?: 'square';
  isActive?: boolean;
  [restProps: string]: any;
  icon?: ReactElement;
}

const Button = ({
  children,
  fill,
  type = 'button',
  shape,
  isActive,
  icon,
  ...restProps
}: IProps) => (
  <button
    className={classNames("button", {
      [`button--${fill}`]: fill,
      [`button--${shape}`]: shape,
      'is-active': isActive,
    })}
    type={type}
    {...restProps}
  >
    {icon && <span className="button__icon">{icon}</span>}
    {children}
  </button>
);

export default Button;
