import Streamtube from "../Images/Streamtube.png";
import QuickBite from "../Images/Quickbite.png";
import Netflix from "../Images/Netflix.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Video-Streaming-platform-Stream-Tube-from-Scratch",
      image: Streamtube,
      description:
        "Experience entertainment like never before with our next-gen video streaming platform — delivering high-quality content, lightning-fast streaming, and an interface designed for effortless discovery and enjoyment.",
      tags: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Redux",
        "Rest Api",
        "Cloudinary",
      ],
      link: "https://stream-tube-kuldeep.vercel.app/",
      github:
        "https://github.com/kuldeepsaini2003s/Video-Streaming-platform-Stream-Tube-from-Scratch",
    },
    {
      id: 2,
      title: "Food-Delivery-App--QUICK-BITE",
      image: QuickBite,
      description:
        "Your hunger fix is just a tap away — explore top-rated restaurants, discover new dishes, and enjoy lightning-fast delivery with every order.",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Redux"],
      link: "https://kuldeep-saini-quick-bite.vercel.app/",
      github:
        "https://github.com/kuldeepsaini2003s/Food-Delivery-App--QUICK-BITE",
    },
    {
      id: 3,
      title: "GPT-Powered-NetFlix",
      image: Netflix,
      description:
        "Binge-worthy stories, blockbuster hits, and exclusive originals — all at your fingertips. Stream what you love, when you want.",
      tags: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "Redux",
        "Firebase",
      ],
      link: "https://netflix-kuldeep.vercel.app/",
      github: "https://github.com/kuldeepsaini2003s/GPT-Powered-NetFlix",
    },
  ];

  return (
    <section id="projects" className="py-14 bg-black">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            My Recent Work
          </span>
          <h2 className="text-5xl font-bold text-gradient mb-5">
            Featured Projects
          </h2>
          <p className="text-gray">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              href={project.github}
              target="_blank"
              key={project?.id}
              className="bg-card border border-glassStroke rounded-2xl overflow-hidden transition-all hover:-translate-y-3 hover:shadow-xl hover:border-primary"
            >
              <a target="_blank" href={project.link}>
                <img
                  src={project?.image}
                  className="h-56 object-contain w-full bg-darkAlt flex items-center justify-center text-gray"
                />
              </a>
              <div className="px-6 pb-2">
                <h3 className="text-2xl font-semibold mb-2">
                  {project?.title}
                </h3>
                <p className="text-gray text-sm mb-2">{project?.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-glass text-primaryLight text-xs rounded-full border border-glassStroke"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
