import { useState, useEffect, useContext } from 'react';
import pdf from "./resume.pdf"
import { IdContext } from './AppContext'


import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FaFreeCodeCamp } from 'react-icons/fa';

export const Navbar = () => {
  
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(1);
    

    const { modal, setModal } = useContext(IdContext)
    
  
    const controlNavbar = () => {
      
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(true);
          setModal(false);
        } else { // if scroll up show the navbar
          setShow(false);
          setModal(false);  
          
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
        <section > 
          <div className='hidden md:block '>
            <div className={`fixed bg-red flex justify-center items-center font-mono space-x-16 h-20 w-screen z-50 tracking-widest backdrop-blur-md bg-navy/70 transition-all duration-500  ${show && 'hidden '}`} >
              <ol  className="flex space-x-16 list-decimal text-md ">
                <li className="text-green"><a href="/#About" ><span className="text-lightest-slate hover:text-green">About</span></a></li>
                <li className="text-green"><a href="/#Certification" ><span className="text-lightest-slate hover:text-green">Certificates</span></a></li>
                <li className="text-green"><a href="/#Project" ><span className="text-lightest-slate hover:text-green">Projects</span></a></li>
                <li className="text-green"><a href="/#Contact" ><span className="text-lightest-slate hover:text-green">Contact</span></a></li>
              </ol>
              <div className="relative h-10 w-24 bg-green rounded-md "><a className="alsolute z-10 bg-[#0a192f] h-10 w-24 border text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150" href={pdf} rel="noopener noreferrer" target="_blank">Resume</a></div>
            </div>
          </div> 
        
          <div className={`fixed bg-navy h-20 flex items-center justify-end font-mono w-full md:hidden tracking-widest backdrop-blur-md bg-navy/70 z-50 ${show && 'hidden'}`} > 
            
            <button type="button" className='me-10 cursor-pointer text-green flex items-center h-10 w-10 justify-center z-50' onClick={()=>modal==true? setModal(false): setModal(true)}>
            {!modal ? (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                
            </button>
            <div className={`absolute flex flex-col items-center justify-center bg-light-navy md:hidden shadow-lg h-screen w-[60%] right-0 top-0 shadow-xl shadow-lightest-navy  ${!modal && 'hidden'}`}>
              <div className='flex flex-col items-center justify-start space-y-12 '>
                
                {/* Menu */}
                <ul className='list-decimal flex flex-col justify-center items-center space-y-10 text-sm list-inside font-mono font-semibold' >
                  <li className="text-green text-center"  onClick={()=>modal==true? setModal(false): setModal(true)}><a href="/#About" ><span className="text-lightest-slate hover:text-green block">About</span></a></li>
                  <li className="text-green text-center" onClick={()=>modal==true? setModal(false): setModal(true)}><a href="/#Certification" ><span className="text-lightest-slate hover:text-green block">Certificates</span></a></li>
                  <li className="text-green text-center" onClick={()=>modal==true? setModal(false): setModal(true)}><a href="/#Project" ><span className="text-lightest-slate hover:text-green block">Projects</span></a></li>
                  <li className="text-green text-center" onClick={()=>modal==true? setModal(false): setModal(true)}><a href="/#Contact" ><span className="text-lightest-slate hover:text-green block">Contact</span></a></li>
                </ul>

                {/* Resume button */}
                <div className="relative h-14 w-36 bg-green rounded-md "><a className="alsolute z-10 bg-[#0a192f] h-14 w-36 border text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150" href={pdf} rel="noopener noreferrer" target="_blank">Resume</a></div>
                
                {/* Social */}
                <div className="flex space-x-4 mb-16 text-white font-bold pb-5">
            
                  <div className="hover:text-green hover:-translate-y-2 duration-150"><a  href="https://www.linkedin.com/in/ashwin-angadi/" aria-label="Linkedin" target="_blank" rel="noreferrer"><FiLinkedin className='h-6 w-6'/></a></div>
                  <div className="hover:text-green hover:-translate-y-2 duration-150"><a href="https://github.com/ashwinangadi" aria-label="GitHub" target="_blank" rel="noreferrer"><FiGithub className='h-6 w-6'/></a></div>
                  <div className="hover:text-green hover:-translate-y-2 duration-150"><a href="https://www.freecodecamp.org/Ashwin_Angadi" aria-label="FreeCodeCamp" target="_blank" rel="noreferrer"><FaFreeCodeCamp className='h-6 w-6'/></a></div>
                  <div className="hover:text-green hover:-translate-y-2 duration-150"><a href="https://twitter.com/iamashwinangadi" aria-label="Twitter" target="_blank" rel="noreferrer"><FiTwitter className='h-6 w-6'/></a></div>
                  <div className="hover:text-green hover:-translate-y-2 duration-150" onClick={()=> alert(" Call : (+91) 7899599229")}><FiPhone className='h-6 w-6'/></div>
                
                <div className=" border h-28 w-0 text-center mt-48 hidden lg:block" style={{writingMode:"vertical-rl"}}></div>
            </div>
              </div>
            </div>
          </div>
        </section> 
      </>
    )
  }

  