import EmailIcon from "../SVG/EmailIcon.svg";
import GithubIcon from "../SVG/GithubIcon.svg";
import LinkedinIcon from "../SVG/Linkedin.svg";
import LocationIcon from "../SVG/LocationIcon.svg";
import PhoneIcon from "../Images/Phone.png";

const Contact = () => {
  const contactMethods = [
    {
      icon: EmailIcon,
      title: "Email",
      value: "kuldeepsaini5514@gmail.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+91 6361841906",
    },
    {
      icon: LocationIcon,
      title: "Location",
      value: "Jaipure, Rajasthan",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </span>
          <h2 className="text-5xl font-bold text-gradient mb-5">Contact Me</h2>
          <p className="text-gray">
            Have a project in mind or want to discuss opportunities?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form className="bg-card border border-glassStroke rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-dark border border-glassStroke rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-dark border border-glassStroke rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-dark border border-glassStroke rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-light py-4 px-6 rounded-lg font-semibold hover:bg-primaryDark transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/40"
            >
              Send Message
            </button>
          </form>

          <div>
            <div className="space-y-6 mb-10">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="flex gap-5 p-5 bg-card border border-glassStroke rounded-xl transition-all hover:-translate-y-2 hover:shadow-lg hover:border-primary"
                >
                  <img
                    src={method.icon}
                    className="w-14 h-14 p-2 bg-primary rounded-xl flex items-center justify-center text-2xl"
                  />
                  <div>
                    <h4 className="text-lg font-medium">{method.title}</h4>
                    <p className="text-gray">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-5">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kuldeepsaini2003s?tab=repositories"
                  target="_blank"
                  className="btn flex justify-center cursor-pointer  rounded-md bg-[#e3edf7] h-fit p-2 items-center"
                >
                  <svg
                    width="40"
                    height="40"
                    fill="#6a4eff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-50"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="github"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/kuldeep-saini2003/"
                  target="_blank"
                  className="btn flex justify-center cursor-pointer  rounded-md bg-[#e3edf7] h-fit p-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="z-50"
                    fill="#6a4eff"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </div>          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
