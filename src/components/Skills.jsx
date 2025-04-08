import React from "react";
import HTMLIcon from "../SVG/HTMLIcon.svg";
import CSSIcon from "../SVG/CSSIcon.svg";
import TailwindIcon from "../SVG/TailwindIcon.svg";
import JavascriptIcon from "../SVG/JavascriptIcon.svg";
import ReactIcon from "../SVG/ReactIcon.svg";
import NodeJsIcon from "../SVG/NodeIcon.svg";
import NextJsIcon from "../SVG/NextIcon.svg";
import MongoDBIcon from "../SVG/MongoDBIcon.svg";
import ExpressJsIcon from "../SVG/ExpressIcon.svg";

const Skills = () => {
  const techStack = [
    { icon: HTMLIcon, name: "HTML" },
    { icon: CSSIcon, name: "CSS" },
    { icon: TailwindIcon, name: "Tailwind" },
    { icon: JavascriptIcon, name: "JavaScript" },
    { icon: ReactIcon, name: "React" },
    { icon: NodeJsIcon, name: "Node.js" },
    { icon: NextJsIcon, name: "Next.js" },
    { icon: MongoDBIcon, name: "MongoDB" },
    { icon: ExpressJsIcon, name: "Express.js" },
  ];
  return (
    <section className="bg-black">
      <div className="relative py-12">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden py-5">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary">
                  <img className="rounded-full p-1" src={tech.icon} alt="" />
                </div>
                <span className="text-gray">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
