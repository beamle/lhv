import { ComponentPropsWithoutRef, ElementType } from "react";

import s from "./Typography.module.scss";

export type TypographyProps<T extends ElementType> = {
  as?: T;
  title?: string;
  variant?:
    | "body1"
    | "body2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "link1"
    | "link2"
    | "link3";
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "div">(
  props: TypographyProps<T>,
) => {
  const {
    as: Component = "div",
    children,
    className = "",
    title,
    variant = "body1",
    ...rest
  } = props;

  return (
    <Component className={`${s[variant]} ${className}`} title={title} {...rest}>
      {children}
    </Component>
  );
};
