const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] items-center bg-black overflow-hidden"
    >
      <div className="container mx-auto px-6 pt-10 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center text-primary font-bold mb-5 animate-fadeInUp">
            <div className="w-10 h-0.5 bg-primary mr-3"></div>
            Frontend Developer
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gradient animate-fadeInUp animation-delay-200">
            Transforming Ideas Into Digital Reality
          </h1>
          <p className="text-xl text-gray mb-10 max-w-lg animate-fadeInUp animation-delay-300">
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing. With 1+ years of experience in modern web
            technologies.
          </p>
          <div className="flex gap-5 animate-fadeInUp animation-delay-400">
            <a
              href="#projects"
              className="bg-primary text-light px-6 py-2 rounded-full font-medium transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/40"
            >
              View My Work
            </a>
            <a
              href="/Kuldeep Saini Resume (1).pdf"
              download
              className="button rounded-full"
            >
              <div className="button-wrapper font-medium">
                <div className="text">Hire Me</div>
                <span className="icon">Download Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
