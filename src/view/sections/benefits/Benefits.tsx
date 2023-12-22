import s from "./Benefits.module.scss";
import { Button, Typography } from "@/view/ui";
import { ContainerWrapper } from "@/view/components";
import { ListCheck } from "../../../../public/assets/icons";

export const Benefits = () => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id={"benefitsSection"} className={s.benefitsContainer}>
      <div className={s.subMenu}>
        {subMenuItems.map((item, idx) => (
          <Button
            key={idx}
            variant={"link"}
            className={s.subMenu__item}
            onClick={() => scrollToSection(item.link)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <ContainerWrapper className={s.wrapper}>
        <div className={s.leftSide}>
          <Typography variant={"h2"}>
            Sisustuslaen <strong>aitab muuta kodu hubasemaks</strong>
          </Typography>
          <Typography variant={"body1"}>
            Usume, et sa tead täpselt, milline peab ruum olema, et sa tunneksid
            ennast seal hästi. Kujunda just endale sobilik kodu ning aed uue
            mööbli ja sisustuselementidega. Laenu võid kasutada ka suvekodu
            värskendamiseks.
          </Typography>
        </div>
        <div className={s.rightSide}>
          <div className={s.rightSide__bulletsContainer}>
            {rightSideBulletPoints.map((item, idx) => (
              <Typography key={idx} className={s.bulletsPoint}>
                {item.icon}
                {item.name}
              </Typography>
            ))}
            <Typography className={s.bulletsPoint}>
              Taotluse tegemiseks ei pea sul olema LHV pangakontot.
            </Typography>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

const subMenuItems = [
  { name: "Eelised", link: "benefitsSection" },
  { name: "Sammud", link: "stepsSection" },
  { name: "Nõuanded", link: "tipsSection" },
  { name: "Kalkulaator", link: "calculatorSection" },
];

const rightSideBulletPoints = [
  { name: "Vastus taotlusele mõne minutiga", icon: <ListCheck /> },
  { name: "Tagatist ei ole vaja", icon: <ListCheck /> },
  { name: "Raha kohe kontole", icon: <ListCheck /> },
  { name: "Laenusumma kuni 25 000 €", icon: <ListCheck /> },
  { name: "Laenukindlustuse võimalus", icon: <ListCheck /> },
  { name: "Tasuta ennetähtaegne tagastamine", icon: <ListCheck /> },
];
