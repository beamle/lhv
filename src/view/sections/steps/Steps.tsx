import s from "./Steps.module.scss";
import { ContainerContentWrapper } from "@/view/components";
import { Typography } from "@/view/ui";
import { Step } from "@/view/components/Step/Step";

export const Steps = () => {
  return (
    <div id={"stepsSection"} className={s.stepsContainer}>
      <ContainerContentWrapper className={s.stepContainerWrapper}>
        <Typography className={s.steps__header} variant={"h2"}>
          Sammud
        </Typography>
        <div className={s.stepsItems}>
          {steps.map((step, idx) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
              last={steps.length - 1 === idx}
            />
          ))}
        </div>
      </ContainerContentWrapper>
    </div>
  );
};

const steps = [
  {
    number: 1,
    title: "Täida taotlus",
    text:
      "Täida <a href='https://www.lhv.ee/et/sisustuslaen/taotlus' >laenutaotlus</a>. Taotluse tegemine on tasuta ja ei kohusta\n" +
      "        lepingut sõlmima",
  },
  {
    number: 2,
    title: "Pakkumine",
    text: "Sinu taotluse saamise järel teeme sulle laenupakkumise, mis kehtib kuni 180 päeva.",
  },
  {
    number: 3,
    title: "Sõlmi leping",
    text: "Lepingu saad allkirjastada <a href='https://www.lhv.ee/coflink/auth/login' >iseteeninduskeskkonnas </a>. Kui sul puudub digitaalse allkirjastamise võimalus, siis palun pöördu meie koostööpartneri <a href='https://www.euronics.ee/kauplused'>Euronicsi kauplusse</a>, kus saad lepingu allkirjastada paberkandjal.",
  },
  {
    number: 4,
    title: "Raha kontole",
    text: "Mõne hetkega jõuab sinu kontole laenusumma, millest on maha arvestatud lepingutasu.",
  },
];
