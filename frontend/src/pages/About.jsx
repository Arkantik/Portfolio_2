// Packages
import { useState } from "react";

// Components
import Bulb from "../components/Bulb";
import Toggle from "../components/utilities/Toggle";

// Framer motion
// import { motion } from "framer-motion";

// Data
import { skills, tools } from "../helpers/AboutData";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

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

        <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-base text-light">
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              technologies.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <Toggle activeTab={activeTab} onTabToggle={handleTabToggle} />

            <div className="flex w-full flex-wrap justify-center">
              {activeTab === "skills" && (
                <ul>
                  {skills.map((skill) => (
                    <li key={skill.id} className="m-1 inline-flex">
                      <div className="rounded-lg bg-light p-2">
                        <div className="text-2xl">{skill.icon}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "tools" && (
                <ul>
                  {tools.map((tool) => (
                    <li key={tool.id} className="m-1 inline-flex">
                      <div className="rounded-lg bg-light p-2">
                        <div className="text-2xl">{tool.icon}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      </section>
      <Bulb />
    </>
  );
}
