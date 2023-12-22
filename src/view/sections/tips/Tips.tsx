import s from "./Tips.module.scss";
import { Card, ContainerContentWrapper } from "@/view/components";
import { CardImg } from "../../../../public/assets/icons";

export const Tips = () => {
  return (
    <div id={"tipsSection"} className={s.cardsContainer}>
      <ContainerContentWrapper className={s.cardsContainerWrapper}>
        <div className={s.cardsContent}>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              variant={card.variant}
              front={card.front}
              back={card.back}
            />
          ))}
        </div>
      </ContainerContentWrapper>
    </div>
  );
};

const cards = [
  {
    id: "1",
    variant: "click",
    front: { image: <CardImg />, text: "Kas oled tüdinenud vanast tapeedist?" },
    back: {
      image: null,
      text: "Asjadel ei ole oma kohta ja puudu on üks kummut? Või oled unistanud lausa terviklikust sisustuslahendusest aga kõike korraga tundub palju? LHV sisustuslaenuga saad tooted soetada kohe, kuid maksta osade kaupa.",
      link: "",
    },
  },
  {
    id: "2",
    variant: "click",
    front: { image: <CardImg />, text: "Kas oled tüdinenud vanast tapeedist?" },
    back: {
      image: null,
      text: "Asjadel ei ole oma kohta ja puudu on üks kummut? Või oled unistanud lausa terviklikust sisustuslahendusest aga kõike korraga tundub palju? LHV sisustuslaenuga saad tooted soetada kohe, kuid maksta osade kaupa.",
      link: "",
    },
  },
  {
    id: "3",
    variant: "click",
    front: { image: <CardImg />, text: "Kas oled tüdinenud vanast tapeedist?" },
    back: {
      image: null,
      text: "Asjadel ei ole oma kohta ja puudu on üks kummut? Või oled unistanud lausa terviklikust sisustuslahendusest aga kõike korraga tundub palju? LHV sisustuslaenuga saad tooted soetada kohe, kuid maksta osade kaupa.",
      link: "",
    },
  },
];
