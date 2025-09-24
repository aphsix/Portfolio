import {
  SiGo,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiAdobephotoshop,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Skill } from "../types";

export const skills: Record<string, Skill[]> = {
  "Languages & Frameworks": [
    { name: "Go", color: "bg-blue-700", icon: SiGo },
    { name: "JavaScript", color: "bg-yellow-700", icon: SiJavascript },
    { name: "TypeScript", color: "bg-blue-700", icon: SiTypescript },
    { name: "Python", color: "bg-blue-700", icon: SiPython },
    { name: "Java", color: "bg-red-700", icon: FaJava },
    {name:"C++", color:"bg-blue-700", icon: SiCplusplus},
    { name: "React", color: "bg-cyan-700", icon: SiReact },
    { name: "Next.js", color: "bg-gray-700", icon: SiNextdotjs },
    { name: "Express", color: "bg-gray-700", icon: SiExpress },
    { name: "Node.js", color: "bg-green-700", icon: SiNodedotjs },
  ],
  "Tools & Design": [
    { name: "Git", color: "bg-red-700", icon: SiGit },
    { name: "Docker", color: "bg-blue-700", icon: SiDocker },
    {name: "Postman", color: "bg-pink-700", icon: SiPostman},
    { name: "Figma", color: "bg-purple-700", icon: SiFigma },
    { name: "Photoshop", color: "bg-blue-700", icon: SiAdobephotoshop },
  ],
  Database: [
   
    { name: "MySQL", color: "bg-orange-700", icon: SiMysql },
  ],
};
