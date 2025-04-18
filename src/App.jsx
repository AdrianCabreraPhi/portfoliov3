import { useState } from "react";
import "./App.css";
import HeroSection from "./components/heroSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Fade } from "react-awesome-reveal";
function App() {
  return (
    <>
      <div className=" bg-zinc-900 ">
        <Fade >
          <div className="flex  flex-col justify-center gap-14  max-w-3xl mx-auto pb-16 pt-46">
          <Fade  delay={100}>
            <HeroSection />
            </Fade>
            <Fade delay={200} >
            <Projects />
            </Fade>
            <Fade delay={500} >
            <Experience />
            </Fade>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default App;
