import s from "./Footer.module.scss";
import { ContainerContentWrapper } from "@/view/components";
import { Typography } from "@/view/ui";
import {
  AppGallery,
  AppStore,
  Facebook,
  GoogleStore,
  Instagram,
  Soundclub,
  Youtube,
} from "../../../../public/assets/icons";

export const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <ContainerContentWrapper className={s.footerContainerContentWrapper}>
        <div className={s.footer}>
          <div className={s.footerLeftContainer}>
            {footerLinks.lefttSide.map((link, idx) => (
              <div key={idx} className={s.footerColumnsItemContainer}>
                <Typography variant={"h4"}>{link.title}</Typography>
                <div>
                  {link.items.map((item, idx) => (
                    <Typography variant={"link3"} key={idx}>
                      {item.name}
                    </Typography>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={s.footerRightContainer}>
            {footerLinks.rightSide.map((link, idx) => (
              <div key={idx} className={s.footerColumnsItemContainer}>
                <Typography variant={"h4"}>
                  {link.title === "" ? "\u00A0" : link.title}
                </Typography>
                <div>
                  {link.items.map((item, idx) => (
                    <Typography variant={"link3"} key={idx}>
                      {item.name}
                    </Typography>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.footerAppstoreLinks}>
          <div className={s.mediaContainer}>
            <div className={s.socialMediaIcons}>
              {socialMediaIcons.map((icon, idx) => (
                <div key={idx}>{icon}</div>
              ))}
            </div>
            <div className={s.mobileStores}>
              {mobileStores.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>
          <Typography variant={"body2"} className={s.terms}>
            <div dangerouslySetInnerHTML={{ __html: terms }} />
          </Typography>
        </div>
      </ContainerContentWrapper>
    </div>
  );
};

const terms =
  "AS LHV Group, Tartu mnt 2, 10145, Tallinn. Oled finantsteenuseid pakkuvate ettevõtete AS LHV Pank, LHV Finance, LHV Kindlustus ja LHV Varahaldus veebilehel. Enne finantsteenuse lepingu sõlmimist tutvu <a href=''>teenuse tingimustega<a/> või küsi lisainfot. <a href=''>Noteeringud on viivitusega.<a/>";

const mobileStores = [<AppStore />, <GoogleStore />, <AppGallery />];
const socialMediaIcons = [
  <Instagram />,
  <Facebook />,
  <Youtube />,
  <Soundclub />,
];
const footerLinks = {
  lefttSide: [
    {
      title: "Tule kliendiks",
      items: [
        { name: "Eraklient", link: "link1 " },
        { name: "Äriklient", link: "link1 " },
        { name: "Noortepank", link: "link1 " },
        { name: "Lapsekonto", link: "link1 " },
        { name: "Au-klient", link: "link1 " },
        { name: "Privaatpangandus", link: "link1 " },
        { name: "Ava konto", link: "link1 " },
      ],
    },
    {
      title: "Kasulikku",
      items: [
        { name: "Hinnakiri ja tingimused", link: "link1 " },
        { name: "Ettepanekud ja kaebused", link: "link1 " },
        { name: "Turvalisus", link: "link1 " },
        { name: "Teata petulehest", link: "link1 " },
        { name: "Teenuste seis", link: "link1 " },
        { name: "KKK", link: "link1 " },
      ],
    },
  ],
  rightSide: [
    {
      title: "LHV",
      items: [
        { name: "Ettevõttest", link: "link1 " },
        { name: "Investorile", link: "link1 " },
        { name: "Tööpakkumised", link: "link1 " },
        { name: "Hea tegu", link: "link1 " },
        { name: "Roheline LHV", link: "link1 " },
        { name: "Roheline LHV", link: "link1 " },
      ],
    },
    {
      title: "",
      items: [
        { name: "Finantsportaal", link: "link1 " },
        { name: "Uudised", link: "link1 " },
        { name: "Blogi", link: "link1 " },
      ],
    },
    {
      title: "Kontakt",
      items: [
        { name: "Kontaktid", link: "link1 " },
        { name: "Kontorid", link: "link1 " },
        { name: "Broneeri kohtumisaeg", link: "link1 " },
        { name: "Sularahaautomaadid", link: "link1 " },
      ],
    },
  ],
};
