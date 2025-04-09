const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "Zummit Info Lab",
      date: "2024 - 2025",
      link: "https://drive.google.com/drive/u/1/folders/1T1BQrrJk3kFUC4P_AkqOdCfcrTRQIBr-",
      description:
        "Built and maintained a mental health support platform for individuals dealing with anger and anxiety, implementing responsive UI, Google Meet integration, and real-time notifications.",
    },
  ];

  return (
    <section id="experience" className="py-10 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            My Career Journey
          </span>
          <h2 className="text-5xl font-bold text-gradient mb-5">
            Work Experience
          </h2>
          <p className="text-gray">
            My professional path and the companies I've worked with.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 -top-0 max-md:-top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-20 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-5 h-5 -translate-y-2 bg-primary rounded-full transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 w-10 h-10 border-2 -translate-x-2 -translate-y-2 animate-ping border-primary rounded-full opacity-30 "></div>
              </div>

              <a
                href={exp.link}
                target="_blank"
                className={`w-full md:w-5/12 bg-card border border-glassStroke rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <span className="inline-block px-4 py-2 bg-glass text-primary text-sm font-semibold rounded-full mb-3">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <span className="block text-gray font-medium mb-4">
                  {exp.company}
                </span>
                <p className="text-gray">{exp.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
