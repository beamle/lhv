import { Footer, Header, Navbar } from "@/view/widgets";
import { Benefits, Introduce, Steps, Tips, Calculator } from "@/view/sections";
import s from "./styles/App.module.scss";

export function App() {
  return (
    <div className={s.appContainer}>
      <Header />
      <Navbar />
      <Introduce />
      <Benefits />
      <Steps />
      <Tips />
      <Calculator />
      <Footer />
    </div>
  );
}
