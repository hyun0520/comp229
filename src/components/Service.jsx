import './Service.css'
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiVite } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiBootstrap } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";

const techGroups = [
  {
    title: "Backend",
    items: [
      { name: "C#", icon: <VscVscode color="A10BF7"/> },
      { name: "Node", icon: <FaNodeJs color="green"/>},
      { name: "SQL", icon: <AiOutlineConsoleSql color="orange"/>},
      { name: "Vite", icon: <SiVite color="yellow"/> },
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <GrReactjs color="0425c8"/> },
      { name: "Javascript", icon: <RiJavascriptFill color="yellow"/> },
      { name: "Bootstrap", icon: <DiBootstrap color="A10BF7"/> },
      { name: "HTML", icon: <FaHtml5 color="#FF7F50"/> },
      { name: "CSS", icon: <BiSolidFileCss color="#A10BF7"/> },
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Visual Studio", icon: <VscVscode color="A10BF7"/>},
      { name: "VS Code", icon: <VscVscode color="0425c8"/> },
      { name: "Github", icon: <FaGithubSquare color="black"/> },
      { name: "Linux", icon: <FaLinux color="black"/> },
      { name: "Python", icon: <FaPython color="blue"/> },
    ]
  }
]

export default function Service() {
  return (
    <section className="tech-stack"> 
      <h2>TECHNOLOGY</h2>

      {techGroups.map((group, groupIndex) => (
        <div className="tech-group" key={groupIndex}>
          <h3>{group.title}</h3>

          <div className="tech-items"> 
            {group.items.map((tech, techIndex) => (
              <div className="tech-card" key={techIndex}>
                <div className="icon-text">
                  <div className="icon-component">{tech.icon}</div>
                  <span>{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}
