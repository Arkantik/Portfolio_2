// Components
import Bulb from "../components/Bulb";

// Framer motion
// import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section
        className="flex h-screen flex-col justify-center gap-16 font-alt"
        id="about"
      >
        <div>
          <h2 className="block font-main text-xl uppercase text-light">
            <span className="block uppercase text-primary"> About me </span>
            <span> &amp; my skills </span>
          </h2>
        </div>
        <div>
          <h2 className="block font-main text-xl uppercase text-light">
            <span className="block uppercase text-primary"> About me </span>
            <span> & my skills </span>
          </h2>
        </div>
      </section>
      <Bulb />
    </>
  );
}
