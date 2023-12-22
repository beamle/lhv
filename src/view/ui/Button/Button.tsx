import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { clsx } from "clsx";
import s from "./Button.module.scss";

export type ButtonVariants = "icon" | "primary" | "clean" | "link";

export type ButtonProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  // title?: string;
  variant?: ButtonVariants;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T>,
) => {
  const {
    as: Component = "button",
    children,
    className,
    icon,
    variant = "clean",
    ...rest
  } = props;

  const classNames = {
    component: clsx(s.button, s[variant], className && className),
    icon: clsx(s.icon, s[variant]),
  };

  return (
    <Component className={classNames.component} {...rest}>
      {children}
      {icon && <div className={classNames.icon}>{icon}</div>}
    </Component>
  );
};
