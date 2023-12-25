import s from "./MobileNavbar.module.scss";
import { Header } from "@/view/widgets";
import { Button, TextField } from "@/view/ui";
import { navbarItems } from "@/view/widgets/navbar/Navbar";

type MobileNavbarType = {
  handleMobileNavbarOpening: () => void;
  openMobileNavbar: boolean;
};

export const MobileNavbar = ({
  openMobileNavbar,
  handleMobileNavbarOpening,
}: MobileNavbarType) => {
  return (
    <>
      <Header
        handleMobileNavbarOpening={handleMobileNavbarOpening}
        openMobileNavbar={openMobileNavbar}
      />
      <div className={s.mobileNavbar}>
        <nav className={s.navbarContainer}>
          {navbarItems.map((item, idx) => (
            <Button key={idx} className={s.navbarButton}>
              {item.name}
            </Button>
          ))}
          <TextField placeholder={"Otsi..."} className={s.search} />
        </nav>
      </div>
    </>
  );
};
