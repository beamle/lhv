import s from "./ContainerWrapper.module.scss";
import { ReactNode } from "react";
import { clsx } from "clsx";

type ContainerWrapperType = {
  children: ReactNode;
  className?: string;
};

export const ContainerContentWrapper = ({
  children,
  className,
}: ContainerWrapperType) => {
  const classNames = {
    containerWrapper: clsx(s.containerWrapper, className && className),
  };

  return <div className={classNames.containerWrapper}>{children}</div>;
};
