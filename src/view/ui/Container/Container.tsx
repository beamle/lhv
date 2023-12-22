import s from "./Container.module.scss";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { clsx } from "clsx";

type PageType<T extends ElementType> = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Container = <T extends ElementType = "div">({
  as: Component = "div",
  children,
  className,
  ...rest
}: PageType<T>) => {
  const classNames = {
    component: clsx(s.container, className && s.className),
  };

  return (
    <Component className={classNames.component} {...rest}>
      {children}
    </Component>
  );
};
