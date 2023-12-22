import clsx from "clsx";
import s from "./Card.module.scss";
import { ReactNode, useState } from "react";
import { Typography } from "@/view/ui";
import {
  ArrowLeftDownSmooth,
  ArrowRightIcon,
} from "../../../../public/assets/icons";

export type CardType = {
  id: string;
  variant: string;
  front: { image: ReactNode; text: string };
  back: { image: ReactNode | null; text: string };
};

export const Card = ({ variant, front, back }: CardType) => {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (variant === "click") {
      setShowBack(!showBack);
    }
  }

  const classNames = {
    flipCardOuter: clsx(s.flipCardOuter),
    flipCardInner: clsx(s.flipCardInner),
    showBack: clsx(s.showBack),
    frondCard: clsx(s.card, s.frontCard),
    backCard: clsx(s.card, s.backCard),
    cardText: clsx(s.cardText),
  };

  return (
    <div className={classNames.flipCardOuter} onClick={handleClick}>
      <div
        className={clsx(classNames.flipCardInner, {
          [classNames.showBack]: showBack,
        })}
      >
        <div className={classNames.frondCard}>
          <div className={s.cardBody}>
            <div className={s.cardImage}>{front.image}</div>
            <Typography className={s.frontCardText}>{front.text}</Typography>
            <div className={s.turnPageSquare}>
              <ArrowLeftDownSmooth />
            </div>
          </div>
        </div>
        <div className={classNames.backCard}>
          <div className={s.cardBody}>
            <div className={s.cardImage}>{back.image}</div>
            <Typography variant={"body2"} className={s.backCardText}>
              {back.text} <br />
            </Typography>
            <Typography variant={"link1"} className={s.backCardLink}>
              Loe lisa
              <ArrowRightIcon />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
