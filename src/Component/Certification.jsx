import { useState } from 'react'



export const Certification = () => {
  
    const [show, setShow] = useState(0)
    
    return (
      <>
        <section id="Certification" className="container mx-auto h-full flex items-center justify-center max-w-3xl px-5 md:px-0 py-20 ">
            <div className="flex flex-col">
                <div className="text-base font-sans mb-10 flex items-center">
                    <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">02.</h1>
                    <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate font-bold">Certificates I Earned</h2> 
                    <h3 className="ml-2 border border-lightest-navy w-[11%] md:w-[40%]"> </h3>
                </div>
                <div className="flex flex-col md:flex-row w-full h-full md:h-96">

                    {/* Nav section */}
                    <ul className=" md:w-[45%] md:h-full md:border-l-1 flex md:flex-col">
                        <li className= {`${ show === 0 ? "text-green border-b-2 md:border-b-0 md:border-l-2 duration-300 delay-150 ease-in" : "text-slate " } md:px-5 py-5 md:py-0 text-center border-b md:border-b-0 md:border-l font-mono text-sm  h-14 flex items-center justify-center md:cursor-pointer  `} onClick={()=>setShow(0)}><span className='md:hover:translate-x-1 md:duration-150'>Responsive Web Design</span></li>
                        <li className={`${ show === 1 ? "text-green border-b-2 md:border-b-0 md:border-l-2 duration-300 delay-150 ease-in" : "text-slate" } px-5 pb-5 md:pb-0 text-center border-b md:border-b-0 md:border-l font-mono text-sm  h-14 flex items-center justify-center md:cursor-pointer  `} onClick={()=>setShow(1)}><span className='md:hover:translate-x-1 md:duration-150'>Javascript Algorithms & Data Structures</span></li>
                        <li className={`${ show === 2 ? "text-green border-b-2 md:border-b-0 md:border-l-2 duration-300 delay-150 ease-in" : "text-slate" } md:px-5 pb-5 md:pb-0 text-center border-b md:border-b-0 md:border-l font-mono text-sm  h-14 flex items-center justify-center md:cursor-pointer `} onClick={()=>setShow(2)}><span className=' md:hover:translate-x-1 md:duration-150'>Front End Development Libraries</span></li>
                    </ul>


                    {/* Nav page section */}
                    <div className="text-blue h-full w-full md:px-5">

                        {/* Responsive WD */}
                        <div className={` pt-4 ${show === 0 ? "opacity-100 duration-500 delay-150 ease-in" : "absolute opacity-0"}`}  id='RWD'>
                            <h1 className="text-xl font-medium leading-snug mb-2 text-green font-sans hover:underline decoration-from-font underline-offset-4"><a href="https://www.freecodecamp.org/certification/Ashwin_Angadi/responsive-web-design" target="_blank" rel="noreferrer">Responsive Web Design @ FreeCodeCamp.org</a></h1>
                            <h2 className="mb-6 text-lightest-slate font-mono text-sm">+300 hours | November-2022</h2>
                            <ul className="relative list-disc pl-7 leading-snug font-sans antialiased text-justify">
                                <li className="mb-4 text-green"><span className='text-slate'>In this Responsive Web Design Certification, I learned the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.</span></li>
                                <li className="mb-4 text-green"><span className='text-slate'>First, I built a cat photo app to learn the basics of HTML and CSS. Later, I learned modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a quiz site.</span></li>
                                <li className=" text-green"><span className='text-slate'>Finally, I learned how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.</span></li>
                            </ul>
                        </div>
                        
                        {/* Javascript */}
                        <div className={` pt-4 ${show === 1 ? "opacity-100 duration-500 delay-150 ease-in" : "absolute opacity-0"}`} id='JSDSA'>
                            <h1 className="text-xl font-medium leading-snug mb-2 text-green font-sans hover:underline decoration-from-font underline-offset-4"><a href="https://www.freecodecamp.org/certification/Ashwin_Angadi/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">Javascript Algorithms & Data Structures  @ FreeCodeCamp.org</a></h1>
                            <h2 className="mb-6 text-lightest-slate font-mono text-sm">+300 hours | March-2023</h2>
                            <ul className="relative list-disc pl-7 leading-snug font-sans antialiased text-justify">
                                <li className="mb-4 text-green"><span className='text-slate'>In the JavaScript Algorithm and Data Structures Certification, I learned the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.</span></li>
                                <li className="mb-4 text-green"><span className='text-slate'>Once I have the fundamentals down, I applied that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.</span></li>
                                <li className=" text-green"><span className='text-slate'>Along the way, I also learned two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).</span></li>
                            </ul>
                        </div>
                        
                        {/* Libs */}
                        <div className={`  pt-4 ${show === 2 ? "opacity-100 duration-500 delay-150 ease-in" : "absolute opacity-0"}`} id='LIBS'>
                            <h1 className="text-xl font-medium leading-snug mb-2 text-green font-sans hover:underline decoration-from-font underline-offset-4"><a href="https://www.freecodecamp.org/certification/Ashwin_Angadi/front-end-development-libraries" target="_blank" rel="noreferrer">Front End Development Libraries @ FreeCodeCamp.org</a></h1>
                            <h2 className="mb-6 text-lightest-slate font-mono text-sm">+300 hours | April-2023</h2>
                            <ul className="relative list-disc pl-7 leading-snug font-sans antialiased  text-justify">
                                <li className="mb-4 text-green"><span className='text-slate'>I leveled up my skills by learning some of the most popular front end libraries in the industry.</span></li>
                                <li className="mb-4 text-green"><span className='text-slate'>In the Front End Development Libraries Certification, I learned how to style the site quickly with Bootstrap. I also learned how to add logic to the CSS styles and extend them with Sass.</span></li>
                                <li className=" text-green"><span className='text-slate'>Later, I built a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.</span></li>
                            </ul>
                        </div>
                        
                    </div>

                </div>

            </div>
        </section>
      </>
    )
  }

  