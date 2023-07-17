// Packages
import { useState } from "react";

// Components
import Bulb from "../components/Bulb";
import Toggle from "../components/utilities/Toggle";

// Data
import { skills, tools } from "../helpers/aboutData";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section
        className="flex h-screen min-h-[calc(100dvh-80px)] flex-col justify-center font-alt"
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
            <p className="text-sm text-light">
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              technologies.
            </p>
          </div>
          <div className="z-10 flex flex-col items-end gap-8">
            <Toggle activeTab={activeTab} onTabToggle={handleTabToggle} />

            <div>
              {activeTab === "skills" && (
                <ul className="flex w-full flex-wrap justify-center">
                  {skills.map((skill) => (
                    <li key={skill.id} className="m-2 inline-flex">
                      <div className="rounded-lg border-l border-t border-light/30 bg-light/10 p-2 backdrop-blur-sm">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-14"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "tools" && (
                <ul className="flex w-full flex-wrap justify-center">
                  {tools.map((tool) => (
                    <li key={tool.id} className="m-2 inline-flex">
                      <div className="rounded-lg border-l border-t border-light/30 bg-light/10 p-2 backdrop-blur-sm">
                        <img src={tool.icon} alt={tool.name} className="w-14" />
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
