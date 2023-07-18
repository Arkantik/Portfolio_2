// Packages
import { useState } from "react";

// Components
import Toggle from "../components/utilities/Toggle";
import Accordion from "../components/Accordion";

// Data
import { skills, tools } from "../helpers/aboutData";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      className="flex min-h-[calc(100dvh-80px)] flex-col justify-center font-alt text-light"
      id="about"
    >
      <h2 className="block font-main text-xl uppercase">
        <span className="block uppercase text-primary"> About me </span>
        <span> &amp; my skills </span>
      </h2>

      <article className="z-10 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <p className="text-justify text-sm ">
          Using all these technologies and tools, I am able to develop simple,
          intuitive and responsive user interface that helps users get things
          done with less effort and time.
        </p>

        {/* Skills and tools section */}
        <div className="flex flex-col items-end gap-8">
          <Toggle activeTab={activeTab} onTabToggle={handleTabToggle} />
          {activeTab === "skills" && (
            <ul className="flex w-full flex-wrap justify-center">
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
      </article>
      <hr />
      <article className="grid grid-cols-1 items-center gap-y-4 md:grid-flow-col-dense md:grid-cols-3">
        {/* Hobbies section */}
        <p className="text-justify text-sm md:order-2 md:col-span-1">
          My hobbies and interests encompass a diverse range of fields. I find
          delight in diving the fascinating world of cryptocurrency, embarking
          on exciting journeys around the world, immersing myself in the virtual
          realms of gaming, and unleashing my creativity through design
          projects.
        </p>
        <div className="md:order-1 md:col-span-2">
          <Accordion />
        </div>
      </article>
    </section>
  );
}
