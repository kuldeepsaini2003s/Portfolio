import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-dark/80 backdrop-blur-[10px] shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient animate-pulse">
          Kuldeep
        </div>
        <div className="hidden md:flex gap-10">
          {["Home", "Projects", "Experience", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-light font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>
        <button
          className="text-gray-500 cursor-pointer min-[768px]:hidden relative focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
        <div
          className={`slider absolute  ${
            open ? "active" : ""
          }  right-0 min-[768px]:hidden top-0 w-dvw bg-black/50 h-dvh`}
        >
          <div
            className={`slider absolute  ${
              open ? "active" : ""
            } bg-gradient-to-b transition duration-500 ease-in-out from-black to-darkAlt px-4 py-2 border border-glass shadow-2xl h-dvh w-[200px] top-0`}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gradient animate-pulse">
                Kuldeep
              </h1>
              <button
                className="text-gray-500 w-10 h-10 relative focus:outline-none"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
              >
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      open ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      open ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      open ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {["Home", "Projects", "Experience", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => setOpen(false)}
                    className="text-light font-medium relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
