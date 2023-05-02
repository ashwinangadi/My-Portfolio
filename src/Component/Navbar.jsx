import React, { useState, useEffect } from 'react';
import pdf from "./resume.pdf"
import { IdContext } from '../Component/Context'

// import { Contact } from '../Component/Contact'
// import { About } from '../Component/About'
// import { Certification } from '../Component/Certification/Certification'
// import { Project } from '../Component/Project'

export const Navbar = () => {
  
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(1);

    const { componentId, setComponentId } = useContext(IdContext)
    
  
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
        <section className='' >
            <div className={`fixed bg-navy text-white flex justify-center items-center font-mono space-x-16 h-20 w-screen z-50 tracking-widest backdrop-blur-md bg-navy/70 ${show && 'hidden'}`} >
                
                <ol  className="flex space-x-16 list-decimal text-md">
                    <li className="text-green"><span className="text-lightest-slate">About</span></li>
                    <li className="text-green"><span className="text-lightest-slate">Certificates</span></li>
                    <li className="text-green"><span className="text-lightest-slate">Projects</span></li>
                    <li className="text-green"><span className="text-lightest-slate">Contact</span></li>
                </ol>

              <div className="relative h-10 w-24 bg-green rounded-md"><a className="alsolute z-10 bg-[#0a192f] h-10 w-24 border text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150" href={pdf} rel="noopener noreferrer" target="_blank">Resume</a></div>

            </div>
        </section>
      </>
    )
  }

  