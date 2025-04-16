import Streamtube from "../Images/Streamtube.png";
import QuickBite from "../Images/Quickbite.png";
import Netflix from "../Images/Netflix.png";
import AroundWithIn from "../Images/AroundWithIn.png";
import Finick from "../Images/Finick.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Around With In",
      image: AroundWithIn,
      description:
        "Built and maintained a mental health support platform for individuals dealing with anger and anxiety, implementing responsive UI, Google Meet integration, and real-time notifications.",
      tags: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "Redux",
        "Google Meet",
        "Google Sheet",
        "Google Calender",
      ],
      link: "https://aroundwithin.in/",
      github: "https://aroundwithin.in/",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
    {
      id: 5,
      title: "Finick",
      image: Finick,
      description: "",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
      link: "https://ace-studios-eosin.vercel.app/",
      github: "https://github.com/kuldeepsaini2003s/Ace-Studios",
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

        <Swiper
          className="mySwiper overflow-visible swiper-custom-pagination"
          pagination={true}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project?.id} className="overflow-visible">
              <div className="bg-card border border-glassStroke hover:z-10 rounded-2xl transition-all hover:-translate-y-3 hover:shadow-xl hover:border-primary block">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project?.image}
                    alt={project?.title}
                    className="h-56 object-contain rounded-2xl w-full bg-darkAlt flex items-center justify-center text-gray"
                  />
                </a>
                <div className="px-6 py-2">
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {project?.title}
                    </h3>
                    <p className="text-gray text-sm mb-2 line-clamp-3">
                      {project?.description}
                    </p>
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
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
