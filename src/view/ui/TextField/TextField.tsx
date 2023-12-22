import {
  ChangeEvent,
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
  search?: boolean;
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      label,
      labelProps,
      // onChange,
      icon,
      placeholder,
      search,
      ...restProps
    },
    ref,
  ) => {
    // function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //   onChange?.(e);
    // }

    console.log(errorMessage, "error message");

    const classNames = {
      error: clsx(s.errorText),
      field: clsx(
        s.field,
        !!errorMessage && s.error,
        search && s.hasLeadingIcon,
        className,
      ),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label, labelProps?.className),
      leadingIcon: s.leadingIcon,
      root: clsx(s.root, className, containerProps?.className),
    };

    return (
      <div className={classNames.root}>
        {label && (
          <Typography
            as={"label"}
            className={classNames.label}
            variant={"body2"}
          >
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {icon && (
            <label htmlFor={"inputId"} className={s.icon}>
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
