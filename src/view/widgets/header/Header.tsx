import s from "./Header.module.scss";
import { BurgerMenu, Logo } from "../../../../public/assets/icons";
import { Button, Select, Typography } from "@/view/ui";
import { X } from "../../../../public/assets/icons/x/X";

type HeaderType = {
  handleMobileNavbarOpening?: () => void;
  openMobileNavbar?: boolean;
};

export const Header = ({
  handleMobileNavbarOpening,
  openMobileNavbar,
}: HeaderType) => {
  return (
    <header className={s.headerContainer}>
      <div className={s.logoContainer}>
        <Logo />
        <Typography className={s.logoText} variant={"body2"}>
          FINANTSPORTAAL
          <br /> INVESTOR
        </Typography>
      </div>
      <div className={s.btnsContainer}>
        <Button className={s.openContoBtn} variant={"clean"}>
          Ava konto
        </Button>
        <Button className={s.loginBtn} variant={"primary"}>
          Sisene
        </Button>
        <Select onChangeOption={() => {}} options={["ET", "EN", "RU"]} />
        <div onClick={handleMobileNavbarOpening} className={s.burgerMenu}>
          {openMobileNavbar ? <X /> : <BurgerMenu />}
        </div>
      </div>
    </header>
  );
};
