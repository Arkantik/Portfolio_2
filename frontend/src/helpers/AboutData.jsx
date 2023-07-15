// Assets
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoVisualStudio,
  BiLogoSlack,
  BiLogoFigma,
} from "react-icons/bi";
import { SiClickup, SiExpress, SiVite } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const skills = [
  { id: 1, name: "html", icon: <BiLogoHtml5 /> },
  { id: 2, name: "css", icon: <BiLogoCss3 /> },
  { id: 3, name: "css", icon: <BiLogoJavascript /> },
  { id: 4, name: "react", icon: <BiLogoReact /> },
  { id: 5, name: "vitejs", icon: <SiVite /> },
  { id: 6, name: "tailwind", icon: <BiLogoTailwindCss /> },
  { id: 7, name: "sass", icon: <BiLogoSass /> },
  { id: 8, name: "nodejs", icon: <BiLogoNodejs /> },
  { id: 9, name: "express", icon: <SiExpress /> },
  { id: 10, name: "mysql", icon: <GrMysql /> },
];

const tools = [
  { id: 1, name: "git", icon: <BiLogoGit /> },
  { id: 2, name: "vscode", icon: <BiLogoVisualStudio /> },
  { id: 3, name: "npm", icon: <FaNpm /> },
  { id: 4, name: "figma", icon: <BiLogoFigma /> },
  { id: 5, name: "clickup", icon: <SiClickup /> },
  { id: 6, name: "slack", icon: <BiLogoSlack /> },
];

export { skills, tools };
