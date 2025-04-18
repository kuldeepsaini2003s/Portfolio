import Author from "../Images/Kuldeep_Saini.jpg";
import HTMLIcon from "../SVG/HTMLIcon.svg";
import CSSIcon from "../SVG/CSSIcon.svg";
import TailwindIcon from "../SVG/TailwindIcon.svg";
import JavascriptIcon from "../SVG/JavascriptIcon.svg";
import ReactIcon from "../SVG/ReactIcon.svg";
import NodeJsIcon from "../SVG/NodeIcon.svg";
import NextJsIcon from "../SVG/NextIcon.svg";
import MongoDBIcon from "../SVG/MongoDBIcon.svg";
import ExpressJsIcon from "../SVG/ExpressIcon.svg";
import GithubIcon from "../SVG/GithubIcon.svg";
import GitIcon from "../SVG/GitIcon.svg";
import VSCodeIcon from "../SVG/VsCodeIcon.svg";

const About = () => {
  const skills = [
    { icon: HTMLIcon, name: "HTML", level: "90%" },
    { icon: CSSIcon, name: "CSS", level: "90%" },
    { icon: TailwindIcon, name: "Tailwind", level: "80%" },
    { icon: JavascriptIcon, name: "JavaScript", level: "80%" },
    { icon: ReactIcon, name: "React", level: "85%" },
    { icon: NodeJsIcon, name: "Node.js", level: "70%" },
    { icon: NextJsIcon, name: "Next.js", level: "80%" },
    { icon: MongoDBIcon, name: "MongoDB", level: "70%" },
    { icon: ExpressJsIcon, name: "Express.js", level: "75%" },
    { icon: GithubIcon, name: "Github", level: "85%" },
    { icon: GitIcon, name: "Git", level: "85%" },
    { icon: VSCodeIcon, name: "VS Code", level: "90%" },
  ];

  return (
    <section id="about" className="py-10 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-primary font-bold uppercase tracking-widest text-sm mb-3 animate-fadeInUp">
            Get To Know Me
          </div>
          <h2 className="text-5xl font-bold text-gradient mb-5 animate-fadeInUp animation-delay-200">
            About Me
          </h2>
          <p className="text-gray animate-fadeInUp animation-delay-300">
            I'm passionate about creating digital experiences that solve real
            problems and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fadeInUp animation-delay-400">
            <div className="w-full lg:h-[800px] bg-card rounded-2xl shadow-xl flex items-center justify-center">
              <img
                className="w-full h-full object-top object-cover aspect-square rounded-xl"
                src={Author}
                alt="Kuldeep_Saini"
              />
            </div>
            <div className="absolute top-[-30px] left-[-30px] w-[150px] h-[150px] bg-glass border-2 border-glassStroke rounded-2xl flex items-center justify-center text-4xl text-primary shadow-lg animate-float">
              👨‍💻
            </div>
            <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[150px] bg-glass border-2 border-glassStroke rounded-2xl flex items-center justify-center text-4xl text-primary shadow-lg animate-float animation-delay-2000">
              🚀
            </div>
          </div>

          <div className="animate-fadeInUp animation-delay-500">
            <p className="text-gray mb-3">
              Hi, I'm Kuldeep — a Frontend Engineer driven by a passion for
              creating fast, user-centric web applications.
            </p>
            <p className="text-gray mb-3">
              Over the past year, I’ve worked with ReactJS and Next.js to build
              dynamic and responsive interfaces that not only look great but
              also perform efficiently. I enjoy turning complex problems into
              clean, scalable solutions using modern web technologies.{" "}
            </p>
            <p className="text-gray mb-3">
              Whether it's improving page speed, enhancing UI interactions, or
              writing reusable code, I’m focused on delivering smooth and
              engaging digital experiences. Hello! I'm Kuldeep Saini, a
              full-stack developer based in San Francisco. I specialize in
              building (and occasionally designing) exceptional digital
              experiences.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-glass border border-glassStroke rounded-xl p-3 text-center transition-all hover:translate-y-[-10px] hover:shadow-lg hover:border-primary"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl text-light mx-auto mb-3">
                      <img src={skill.icon} alt="" />
                    </div>
                    <div className="font-semibold mb-1">{skill.name}</div>
                    <div className="h-1.5 bg-darkAlt rounded-full mt-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
