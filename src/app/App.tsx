import { Footer, Header, Navbar } from "@/view/widgets";
import { Benefits, Introduce, Steps } from "@/view/sections";
import s from "./styles/App.module.scss";
import { Tips } from "@/view/sections/tips/Tips";
import { StepTwo } from "@/view/components/StepTwo/StepTwo";

export function App() {
  return (
    <>
      <div className={s.appContainer}>
        <Header />
        <Navbar />
        <Introduce />
        <Benefits />
        <Steps />
        <Tips />
        <Footer />
      </div>
      <div>
        <div>
          <StepTwo />
        </div>
      </div>
    </>
  );
}
