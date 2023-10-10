import cx from "classnames";
import React, { ButtonHTMLAttributes, forwardRef, ReactElement, useState } from "react";
import styles from "./style.module.scss";

export type IButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "prefix" | "suffix"> & {
  size?: "small" | "medium" | "large";
  type?: "primary" | "bordered";
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  svgOnly?: boolean;
  fullWidth?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      type,
      htmlType,
      size,
      className,
      children,
      onClick: propsOnClick,
      prefix,
      fullWidth,
      suffix,
      ...restProps
    },
    ref
  ) => {

    return (
      <button
        className={cx(
          styles.button,
          type === "bordered" && styles.bordered,
          size === "small" && styles.small,
          fullWidth && styles.full_width,
          className
        )}
        type={htmlType}
        onClick={propsOnClick}
        ref={ref}
        {...restProps}
      >
        {prefix}
        {children}
        {suffix}
      </button>
    );
  }
);

Button.defaultProps = {};
