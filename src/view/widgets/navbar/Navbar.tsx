import { Button } from "@/view/ui";
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.navbarContainer}>
      <div className={s.navbarWrapper}>
        {navbarItems.map((item, idx) => (
          <Button key={idx} className={s.navbarButton}>
            {item.name}
          </Button>
        ))}
      </div>
    </nav>
  );
};

const navbarItems = [
  { name: "IGAPÄEVAPANGANDUS", link: "" },
  { name: "RAHA KASVATAMINE", link: "" },
  { name: "LAEN JA LIISING", link: "" },
  { name: "KINDLUSTUS", link: "" },
  { name: "PENSION", link: "" },
];
