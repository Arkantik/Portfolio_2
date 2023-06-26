// Package
import { useState } from "react";

// Style
import style from "../../css/navbar.module.css";

// Component
import Menu from "./Menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="fixed z-30 flex h-[80px] w-full justify-between bg-dark px-8">
        <div className="flex gap-20">
          <a href="#home" title="Logo" className="flex items-center">
            <img src="../assets/icons/logo.svg" alt="logo" />
          </a>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="https://github.com/Arkantik"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./public/assets/icons/github.svg"
                  alt="github icon"
                  className="rounded bg-transparent p-1.5 hover:bg-primary"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeremy-dohin/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./public/assets/icons/linkedin.svg"
                  alt="linkedin icon"
                  className="rounded bg-transparent p-1.5 hover:bg-primary"
                />
              </a>
            </li>
            <li>
              <a
                href="./public/assets/document/resume-JeremyDohin.pdf"
                download
              >
                <img
                  src="./public/assets/icons/home/resume.svg"
                  alt="resume icon"
                  className="rounded bg-transparent p-1.5 hover:bg-primary"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Side Menu Button */}
        <Menu onClick={toggleNavMenu} />
      </nav>

      {/* Side Nav */}
      {isOpen ? (
        <div className="items-cente fixed z-20 h-screen w-full justify-center bg-dark font-alt">
          <nav className="flex h-screen w-full flex-col items-center justify-center py-8 text-center">
            <ul className="flex h-full flex-col items-center justify-center gap-8">
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#home"
                  onClick={toggleNavMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#about"
                  onClick={toggleNavMenu}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#timeline"
                  onClick={toggleNavMenu}
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#project"
                  onClick={toggleNavMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#review"
                  onClick={toggleNavMenu}
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  className={`${style.nav_link}`}
                  href="#contact"
                  onClick={toggleNavMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className={`${style.btn_resume} ${style.nav_link} `}>
              <a href="../assets/document/resume-JeremyDohin.pdf" download>
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
