import { Button, Typography } from "@/view/ui";
import s from "./Introduce.module.scss";
import { ContainerContentWrapper } from "@/view/components";
import { ArrowRightIcon } from "../../../../public/assets/icons";

export const Introduce = () => {
  return (
    <div className={s.introContainer}>
      <ContainerContentWrapper className={s.introContainer_content}>
        <div className={s.introContainer__square}>
          <img src="/assets/bg/homepage-hero-container-bg.svg" alt="" />
          <Typography className={s.intro__squareText} variant={"h1"}>
            LHV <br />
            sisustus-
            <br />
            laen
          </Typography>
        </div>
        <div className={s.introContainer__textWithBtns}>
          <Typography variant={"h1"} className={s.intro__mainText}>
            Sisustuslaen <strong>mööbli</strong> ja <br />
            <strong>sisustuse ostuks</strong>
          </Typography>
          <Button variant={"primary"}>Taotle sisustustasu</Button>
          <Button className={s.intro__btnWithIcon} icon={<ArrowRightIcon />}>
            Sõlmi leping
          </Button>
        </div>
      </ContainerContentWrapper>
    </div>
  );
};
