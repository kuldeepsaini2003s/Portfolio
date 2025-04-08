const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-5 bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-2xl font-bold text-gradient mb-4">Kuldeep</div>
          <p className="text-gray mb-4">
            Building digital experiences that make an impact.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray hover:text-light transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-gray">
            <p>No © copyright issues.</p>
            <p>Feel free to copy. If you need any help, ping me !</p>
            <p>Made with ❤ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
