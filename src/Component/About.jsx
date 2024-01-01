import dp from "./Images/dp.jpg";
import { Skills } from "./constants/Constant";

export const About = () => {
  return (
    <>
      <section
        id="About"
        className="container mx-auto  md:h-full flex flex-col items-center justify-center w-full m-1 md:max-w-4xl py-20 px-5 md:px-0 "
      >
        <div className="flex flex-col">
          <div className="text-base font-sans mb-10 flex items-center">
            <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">
              01.
            </h1>
            <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate font-bold">
              About Me
            </h2>
            <h3 className="mx-5 border border-lightest-navy w-[30%] md:w-[40%]">
              {" "}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 md:gap-4 ">
            <div className="col-span-4 md:me-5">
              <p className="  font-sans text-slate mb-2 text-justify">
                Hi there, I&apos;m Ashwin, a frontend web developer in building
                user-friendly and visually appealing websites. With a passion
                for web development, I am always looking to stay up-to-date with
                the latest technologies and trends in the industry.{" "}
              </p>
              <p className="  font-sans text-slate mb-2 text-justify">
                My expertise lies in HTML, CSS, JavaScript, React, and other
                front-end development tools. I take a user-centered approach to
                web design, ensuring that every website I create is optimized
                for usability and accessibility. I have a strong eye for design
                and enjoy working collaboratively with designers and other
                developers to create beautiful and functional websites.{" "}
              </p>
              {/* <p className="  font-sans text-slate mb-2 text-justify">When I&apos;m not coding, you can find me swimming, hiking, playing video games or travelling to beautiful destinations. </p> */}

              {/* <p className=" font-sans text-slate mb-2 text-justify">I&apos;m always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.</p> */}
              <p className=" font-sans text-slate text-justify">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <ul className="list-inside list-inline list-disc list-green grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-mono text-sm mt-5 ">
                {Skills.map((skill, index) => {
                  return (
                    <li key={index} className="text-green">
                      <span className="text-light-slate">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid place-self-center md:place-self-start relative col-span-2 border-2 border-green hover:translate-y-1 hover:translate-x-1 duration-150 rounded-md h-52 w-48 md:h-fit md:w-fit mt-10 md:mt-2">
              <div className="bg-[#8ed5c4] -translate-y-2 -translate-x-2 hover:-translate-y-4 hover:-translate-x-4 duration-150 rounded-md ">
                <img
                  src={dp}
                  alt="Recipe project window"
                  className="  mix-blend-luminosity hover:mix-blend-normal rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
