import {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
} from "react";

import { clsx } from "clsx";
import s from "./TextField.module.scss";
import { Typography } from "@/view/ui";

export type TextFieldProps = {
  containerProps?: ComponentProps<"div">;
  errorMessage?: string;
  label?: string;
  labelProps?: ComponentProps<"label">;
  root?: string;
  icon?: ReactNode;
  trailingIcon?: boolean;
  search?: boolean;
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      label,
      icon,
      placeholder,
      search,
      trailingIcon,
      ...restProps
    },
    ref,
  ) => {
    const classNames = {
      error: clsx(s.errorText),
      field: clsx(
        s.field,
        !!errorMessage && s.error,
        search && s.hasLeadingIcon,
        className,
      ),
      trailingIcon: s.trailingIcon,
      fieldContainer: clsx(s.fieldContainer),
      leadingIcon: s.leadingIcon,
      root: clsx(s.root, className, containerProps && containerProps.className),
    };

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={"label"} variant={"body2"}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {icon && trailingIcon && (
            <label htmlFor={"inputId"} className={s.trailingIcon}>
              {icon}
            </label>
          )}
          <input
            className={classNames.field}
            // onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            id="inputId"
            {...restProps}
          />
        </div>
        <Typography className={classNames.error}>{errorMessage}</Typography>
      </div>
    );
  },
);
