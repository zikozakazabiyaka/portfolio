import React from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: string;
  href: string;
  target?: string,
  decoration?: 'none',
  color?: 'inherit',
}

const SectionLink = ({ children, href, target, decoration, color }: IProps) => {

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={classNames(
        "section__link", {[`section__link--${decoration}`]: decoration},
        "section__link", {[`section__link--${color}`]: color}
      )}
    >
      {children}
    </a>
  )
};

export default SectionLink;