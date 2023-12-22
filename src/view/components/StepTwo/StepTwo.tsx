import s from "./StepTwo.module.scss";
import { Typography } from "@/view/ui";
type StepType = {
  number: number;
  title: string;
  text: string;
} & { last: boolean };
export const StepTwo = ({ number, title, text, last }: StepType) => {
  return (
    <div className={s.stepContainer}>
      <div className={s.stepItem}>
        <div className={s.stepCircle}></div>
        <div className={s.stepContent}>
          <Typography variant={"h3"} className={s.stepTitle}>
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className={s.stepLine}></div>
      </div>
    </div>
  );
};
