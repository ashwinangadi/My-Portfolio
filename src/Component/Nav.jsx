import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(1);
    
  
    const controlNavbar = () => {
      
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(true);
          
        } else { // if scroll up show the navbar
          setShow(false);  
          
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    return (
      <>
        <section className={`active fixed bg-navy text-white flex justify-center items-center font-mono space-x-14 h-20 border w-screen z-50 backdrop-blur-md bg-navy/70 transition ease-linear delay-300 duration-300 ${show && 'hidden'} ${!show && 'drop-shadow-2xl '}`} style={{transform: "translateY(0px)"}}>
            <div >
                <ol  className="flex space-x-14 list-decimal text-md">
                    <li className="text-green"><span className="text-lightest-slate">About</span></li>
                    <li className="text-green"><span className="text-lightest-slate">Certificates</span></li>
                    <li className="text-green"><span className="text-lightest-slate">Projects</span></li>
                    <li className="text-green"><span className="text-lightest-slate">Contact</span></li>
                </ol>
            </div>
            {/* <div className="">Resume</div> */}
            <div className="relative h-10 w-24 bg-green rounded-md"><a className="alsolute z-10 bg-[#0a192f] h-10 w-24 border text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150" href="mailto:ashwin.angadi1@gmail.com" rel="noopener noreferrer" target="_blank">Resume</a></div>
        </section>
      </>
    )
  }

  