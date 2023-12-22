import { ContainerWrapper } from "@/view/components";
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
      <ContainerWrapper className={s.stepContainerWrapper}>
        <div className={s.circle}>{number}</div>
        {!last && <div className={s.stick} />}
        <div className={s.stepContent}>
          <Typography variant={"h3"} className={s.stepTitle}>
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </ContainerWrapper>
    </div>
  );
};
