import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaFreeCodeCamp } from "react-icons/fa";

export const Social = () => {
  const socials = [
    {
      name: "Linkedin",
      icon: <FiLinkedin className="h-6 w-6" />,
      link: "https://www.linkedin.com/in/ashwin-angadi/",
    },
    {
      name: "Linkedin",
      icon: <FiGithub className="h-6 w-6" />,
      link: "https://github.com/ashwinangadi",
    },
    {
      name: "FreeCodeCamp",
      icon: <FaFreeCodeCamp className="h-6 w-6" />,
      link: "https://www.freecodecamp.org/Ashwin_Angadi",
    },
    {
      name: "Twitter",
      icon: <FiTwitter className="h-6 w-6" />,
      link: "https://twitter.com/iamashwinangadi",
    },
  ];
  return (
    <>
      <section
        id="Social"
        className=" xl:absolute text-light-slate flex flex-col justify-center  z-50"
      >
        <div className="xl:fixed xl:bottom-0 xl:left-20 flex xl:flex-col xl:items-center justify-around xl:justify-center xl:space-x-0 xl:space-y-8 mt-10 xl:mt-0 mb-16 xl:mb-0 font-bold">
          {socials.map((item) => (
            <span
              key={item.name}
              className="hover:text-green hover:-translate-y-1 duration-150"
            >
              <a
                href={item.link}
                aria-label={item.name}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            </span>
          ))}

          <span
            className="hover:text-green hover:-translate-y-1 duration-150 md:cursor-pointer"
            onClick={() => alert(" Call : (+91) 7899599229")}
          >
            <FiPhone className="h-6 w-6" />
          </span>

          <span
            className=" border h-28 w-0 text-center mt-48 hidden xl:block"
            style={{ writingMode: "vertical-rl" }}
          ></span>
        </div>
        <div className="md:fixed bottom-0 right-20 flex-col items-center justify-center font-mono text-sm tracking-widest space-y-8 hidden xl:inline-flex">
          <div
            className="hover:text-green hover:-translate-y-1 duration-150"
            style={{ writingMode: "vertical-rl" }}
          >
            <a
              href="mailto:ashwin.angadi1@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              ashwin.angadi1@gmail.com
            </a>
          </div>
          <div
            className="hover:text-green hover:-translate-y-1 duration-150 "
            style={{ writingMode: "vertical-rl" }}
          >
            +917899599229
          </div>
          <div
            className=" border h-28 w-0 "
            style={{ writingMode: "vertical-rl" }}
          ></div>
        </div>
      </section>
    </>
  );
};
