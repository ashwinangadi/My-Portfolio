import { useState } from "react";
import { certificateDetails, certificates } from "./constants/Constant";

export const Certification = () => {
  const [show, setShow] = useState(0);

  return (
    <>
      <section
        id="Certification"
        className="container mx-auto h-full flex items-center justify-center max-w-3xl px-5 md:px-0 py-20 "
      >
        <div className="flex flex-col">
          <div className="text-base font-sans mb-10 flex items-center">
            <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">
              02.
            </h1>
            <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate font-bold">
              Professional Certifications
            </h2>
            <h3 className="ml-2 border border-lightest-navy w-[11%] md:w-[40%]">
              {" "}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row w-full h-full md:h-96">
            {/* Nav section */}
            <ul className=" md:w-[45%] md:h-full md:border-l-1 flex md:flex-col">
              {certificates?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      show === index
                        ? "text-green border-b-2 md:border-b-0 md:border-l-2 duration-300  ease-in"
                        : "text-slate "
                    } md:px-5 pb-5 md:pb-0 text-center border-b md:border-b-0 md:border-l font-mono text-sm  h-14 flex items-center justify-center md:cursor-pointer `}
                    onClick={() => setShow(index)}
                  >
                    <span className="md:hover:translate-x-1 md:duration-150">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Nav page section */}
            <div className="text-blue h-full w-full md:px-5">
              {certificateDetails?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={` pt-4 ${
                      show === index
                        ? "opacity-100 duration-500 delay-150 ease-in"
                        : "absolute opacity-0"
                    }`}
                    id="RWD"
                  >
                    <h1 className="text-xl font-medium leading-snug mb-2 text-green font-sans hover:underline decoration-from-font underline-offset-4">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </h1>
                    <h2 className="mb-6 text-lightest-slate font-mono text-sm">
                      {item.time}
                    </h2>
                    <ul className="relative list-disc pl-7 leading-snug font-sans antialiased text-justify">
                      <li className="mb-4 text-green">
                        <span className="text-slate">{item.firstPoint}</span>
                      </li>
                      <li className="mb-4 text-green">
                        <span className="text-slate">{item.secondPoint}</span>
                      </li>
                      <li className=" text-green">
                        <span className="text-slate">{item.thirdPoint}</span>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
