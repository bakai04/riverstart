import React, { CSSProperties } from 'react';
import styles from "./style.module.scss";
import cx from "classnames"

interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties
}

export const Layout = ({ children, className, style }:ILayoutProps) => {
  return (
    <div 
      style={style} 
      className={cx(styles.container, className)}>
        {children}
    </div>
  )
}
