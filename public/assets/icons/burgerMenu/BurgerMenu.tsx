import s from "./BurgerMenu.module.scss";
export const BurgerMenu = () => {
  return (
    <svg className={s.burgerMenu} viewBox="0 0 100 80" width="16" height="16">
      <rect width="100" height="20" rx="10"></rect>
      <rect y="30" width="100" height="20" rx="10"></rect>
      <rect y="60" width="100" height="20" rx="10"></rect>
    </svg>
  );
};
