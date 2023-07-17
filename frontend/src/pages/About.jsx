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
        className="flex min-h-[calc(100dvh-80px)] flex-col font-alt md:justify-center"
        id="about"
      >
        <h2 className="block font-main text-xl uppercase text-light">
          <span className="block uppercase text-primary"> About me </span>
          <span> &amp; my skills </span>
        </h2>

        <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <p className="text-justify text-sm text-light">
            Using all these technologies and tools, I am able to develop simple,
            intuitive and responsive user interface that helps users get things
            done with less effort and time.
          </p>

          {/* Skills and tools section */}
          <div className="z-10 flex flex-col items-end gap-8">
            <Toggle activeTab={activeTab} onTabToggle={handleTabToggle} />
            {activeTab === "skills" && (
              <ul className="flex w-full flex-wrap justify-center md:justify-end">
                {skills.map((skill) => (
                  <li key={skill.id} className="m-2 inline-flex">
                    <div className="rounded-lg border-l border-t border-light/30 bg-light/10 p-2 backdrop-blur-sm">
                      <img src={skill.icon} alt={skill.name} className="w-14" />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "tools" && (
              <ul className="flex w-full flex-wrap justify-center md:justify-end">
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

          {/* Hobbies section */}
          <div className="z-10 flex flex-col items-end gap-8">
            <ul className="flex w-full flex-wrap justify-center md:justify-start">
              {skills.map((skill) => (
                <li key={skill.id} className="m-2 inline-flex">
                  <div className="rounded-lg border-l border-t border-light/30 bg-light/10 p-2 backdrop-blur-sm">
                    <img src={skill.icon} alt={skill.name} className="w-14" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-justify text-sm text-light">
            Using all these technologies and tools, I am able to develop simple,
            intuitive and responsive user interface that helps users get things
            done with less effort and time.
          </p>
        </article>
      </section>
      <Bulb />
    </>
  );
}
