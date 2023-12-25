import { Footer, Header, MobileNavbar, Navbar } from "@/view/widgets";
import { Benefits, Introduce, Steps, Tips, Calculator } from "@/view/sections";
import s from "./styles/App.module.scss";
import { useState } from "react";

export function App() {
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

  const handleMobileNavbarOpening = () => {
    setOpenMobileNavbar(!openMobileNavbar);
  };

  return (
    <div className={s.appContainer}>
      {openMobileNavbar ? (
        <MobileNavbar
          handleMobileNavbarOpening={handleMobileNavbarOpening}
          openMobileNavbar={openMobileNavbar}
        />
      ) : (
        <>
          <Header handleMobileNavbarOpening={handleMobileNavbarOpening} />
          <Navbar />
          <Introduce />
          <Benefits />
          <Steps />
          <Tips />
          <Calculator />
          <Footer />
        </>
      )}
    </div>
  );
}
