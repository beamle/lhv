import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from "react";
import * as RSelect from "@radix-ui/react-select";

import s from "./Select.module.scss";
import { clsx } from "clsx";
import { ExpandMoreArrow } from "../../../../public/assets/icons";
import { Typography } from "@/view/ui";

export type SelectMenuProps = {
  onChangeOption: (value: string | number) => void;
  options: string[];
  placeholder?: string;
  title?: string;
  value?: string;
  className?: string;
} & ComponentPropsWithoutRef<typeof RSelect.Root>;

export const Select = forwardRef<
  ElementRef<typeof RSelect.Root>,
  SelectMenuProps
>(
  (
    {
      onChangeOption,
      options,
      placeholder = options[0],
      title,
      className,
      ...rest
    }: SelectMenuProps,
    ref,
  ) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const onChangeCallback = (value: string) => {
      onChangeOption && onChangeOption(value);
    };

    const toggleIsOpened = () => {
      setIsOpened(!isOpened);
    };

    const mappedOptions = options.map((el, id) => (
      <RSelect.Item className={s.item} key={id} value={el} ref={ref}>
        <RSelect.ItemText>
          <Typography variant={"body2"}>{el}</Typography>
        </RSelect.ItemText>
        <RSelect.ItemIndicator className={s.selected} />
      </RSelect.Item>
    ));

    const classNames = {
      trigger: clsx(s.trigger, className),
    };

    return (
      <div className={s.wrapper}>
        <div className={s.title}>{title}</div>
        <RSelect.Root
          onOpenChange={toggleIsOpened}
          onValueChange={onChangeCallback}
          {...rest}
        >
          <RSelect.Trigger ref={ref} className={classNames["trigger"]}>
            <RSelect.Value placeholder={placeholder} />
            <RSelect.Icon>
              {
                <ExpandMoreArrow
                  className={isOpened ? s.iconRotated : s.icon}
                />
              }
            </RSelect.Icon>
          </RSelect.Trigger>

          <RSelect.Portal>
            <RSelect.Content
              align={"start"}
              className={s.selectContent}
              collisionPadding={0}
              position={"popper"}
              side={"top"}
            >
              <RSelect.Viewport className={s.viewport}>
                {mappedOptions}
              </RSelect.Viewport>
            </RSelect.Content>
          </RSelect.Portal>
        </RSelect.Root>
      </div>
    );
  },
);
