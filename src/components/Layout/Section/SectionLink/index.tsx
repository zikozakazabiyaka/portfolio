import React from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: string;
  href: string;
  target?: string,
  decoration?: 'none',
  color?: 'inherit',
  indent?: 'disabled',
}

const SectionLink = ({ children, href, target, decoration, color, indent }: IProps) => {

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={classNames(
        "section__link", {[`section__link--${decoration}`]: decoration},
        "section__link", {[`section__link--${color}`]: color},
        "section__link", {[`section__link--${indent}`]: indent},
      )}
    >
      {children}
    </a>
  )
};

export default SectionLink;