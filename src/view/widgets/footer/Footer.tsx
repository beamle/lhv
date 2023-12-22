import s from "@/view/sections/introduce/Introduce.module.scss";
// import s from "./Footer.module.scss";
import { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <div id={"footer"} style={{ display: "flex", flexDirection: "row" }}>
        {cardsData
          .sort((a, b) => a.oder - b.oder)
          .map((c, i) => (
            <HomepageCard
              action={c.title}
              withImage={c.withPhoto}
              body={c.title}
              key={i}
              title={c.title}
            ></HomepageCard>
          ))}
      </div>

      <div className={s.footbar + " " + s.containerwrapper}>
        <div className={s.footerLeftContainer}>
          {footerItems.lefttSide.map((item, idx) => (
            <div key={idx} className={s.footerColumnsItemContainer}>
              {item.title}
              <div>
                {item.items.map((m, i) => (
                  <div key={i}>{m.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={s.footerRightContainer}>
          {footerItems.rightSide.map((item, idx) => (
            <div key={idx} className={s.footerColumnsItemContainer}>
              {item.title}
              <div>
                {item.items.map((m, i) => (
                  <div key={i}>{m.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.footerAppstoreLinks + " " + s.containerwrapper}>
        <p>ddd</p>
      </div>
    </Fragment>
  );
};

const HomepageCard = ({ withImage, title, body, action }) => {
  return withImage ? (
    <div style={{ color: "black" }}>
      {title}
      {action}
      with photo
    </div>
  ) : (
    <div style={{ color: "black" }}>
      without photo
      {body}
      {action}
    </div>
  );
};
const footerItems = {
  lefttSide: [
    {
      title: "column one",
      items: [
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
      ],
    },
    {
      title: "column two",
      items: [
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
      ],
    },
  ],
  rightSide: [
    {
      title: "column one",
      items: [
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
      ],
    },
    {
      title: "column two",
      items: [
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
      ],
    },
    {
      title: "column three",
      items: [
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
        { name: "subitem 1", link: "link1 " },
      ],
    },
  ],
};

const cardsData = [
  { oder: 1, title: "11" },
  { oder: 2, withPhoto: true, title: "11" },
  { oder: 0, withPhoto: true, title: "11" },
];
