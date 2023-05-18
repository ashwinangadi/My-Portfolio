import { useState, useEffect, useContext } from 'react';
import pdf from "./resume.pdf"
import { IdContext } from './AppContext'
import { Link } from 'react-scroll';


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
            <div className={`fixed flex justify-center items-center font-mono space-x-16 h-16 w-screen z-50 tracking-widest backdrop-blur-md bg-navy/70 shadow-md shadow-navy-shadow transition-all duration-300  ${show && '-translate-y-full duration-300'}`} >
              <ol  className="flex space-x-16 list-decimal text-md ">
                <li className="text-green cursor-pointer"><Link to="About" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green ">About</span></Link></li>
                <li className="text-green cursor-pointer"><Link to="Certification" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green ">Certificates</span></Link></li>
                <li className="text-green cursor-pointer"><Link to="Project" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green ">Projects</span></Link></li>
                <li className="text-green cursor-pointer"><Link to="Contact" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green ">Contact</span></Link></li>
              </ol>
              <div className="relative h-10 w-24 bg-green rounded-md "><a className="alsolute  bg-[#0a192f] h-10 w-24 border text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150" href={pdf} rel="noopener noreferrer" target="_blank">Resume</a></div>
            </div>
          </div> 
        
          <div className={`fixed h-16 flex items-center justify-end font-mono w-full md:hidden tracking-widest backdrop-blur-md bg-navy/70 z-10 transition-all duration-300 shadow-md shadow-navy-shadow ${show && '-translate-y-full duration-300'}`} > 
            
            <div className='me-10 flex items-center h-16 w-16 justify-center z-50' onClick={()=>{modal==true? setModal(false): setModal(true);}}>
            {!modal ? (
                  <svg className="ham hamRotate ham1 "  viewBox="0 0 100 100" width="80">
                    <path
                          className="line top"
                          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                    <path
                          className="line middle"
                          d="m 30,50 h 40" />
                    <path
                          className="line bottom"
                          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                  </svg>
                ) : (
                  <svg className={`${modal && "active"} ham hamRotate ham1`} viewBox="0 0 100 100" width="80" >
                    <path
                          className="line top"
                          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                    <path
                          className="line middle"
                          d="m 30,50 h 40" />
                    <path
                          className="line bottom"
                          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                  </svg>
                )}
                
            </div>
            <div className={`absolute flex flex-col items-center justify-center bg-light-navy md:hidden h-screen w-[60%] right-0 top-0 shadow-2xl shadow-navy-shadow transition-all duration-300  ${!modal && 'translate-x-80 duration-300'}`}>
              <div className='flex flex-col items-center justify-start space-y-12 '>
                
                {/* Menu */}
                <ul className='list-decimal flex flex-col justify-center items-center space-y-10 text-sm list-inside font-mono font-semibold' >
                  <li className="text-green text-center"  onClick={()=>modal==true? setModal(false): setModal(true)}><Link to="About" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green block">About</span></Link></li>
                  <li className="text-green text-center" onClick={()=>modal==true? setModal(false): setModal(true)}><Link to="Certification" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green block">Certificates</span></Link></li>
                  <li className="text-green text-center" onClick={()=>modal==true? setModal(false): setModal(true)}><Link to="Project" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green block">Projects</span></Link></li>
                  <li className="text-green text-center" onClick={()=>modal==true? setModal(false): setModal(true)}><Link to="Contact" spy={true} smooth={true} offset={0} duration={500}><span className="text-lightest-slate hover:text-green block">Contact</span></Link></li>
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

  