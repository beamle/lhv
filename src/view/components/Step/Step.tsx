import s from "./Step.module.scss";
import { Typography } from "@/view/ui";
type StepType = {
  number: number;
  title: string;
  text: string;
} & { last: boolean };
export const Step = ({ number, title, text, last }: StepType) => {
  return (
    <div className={s.stepContainer}>
      <div className={s.stepItem}>
        <div className={s.stepCircle}>
          <div className={s.stepCirle__number}>{number}</div>
        </div>
        <div className={s.stepContent}>
          <Typography className={s.stepContent__title} variant={"h3"}>
            {title}
          </Typography>
          <Typography
            className={s.stepContent__text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
        {!last && <div className={s.stepLine} />}
      </div>
    </div>
  );
};
