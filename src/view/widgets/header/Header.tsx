import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.headerContainer} style={{ backgroundColor: "blue" }}>
      <div>header</div>
      <div>ava pank</div>
    </header>
  );
};
