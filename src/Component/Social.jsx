import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FaFreeCodeCamp } from 'react-icons/fa';

export const Social = () => {
  

    return (
      <>
        <section id='Social' className=" lg:absolute text-light-slate flex flex-col justify-center  z-50">
            <div className="lg:fixed lg:bottom-0 lg:left-20 flex lg:flex-col lg:items-center justify-around lg:justify-center lg:space-x-0 lg:space-y-8 mt-10 lg:mt-0 mb-16 lg:mb-0 font-bold">
            
                <div className="hover:text-green hover:-translate-y-1 duration-150"><a  href="https://www.linkedin.com/in/ashwin-angadi/" aria-label="Linkedin" target="_blank" rel="noreferrer"><FiLinkedin className='h-6 w-6'/></a></div>
                <div className="hover:text-green hover:-translate-y-1 duration-150"><a href="https://github.com/ashwinangadi" aria-label="GitHub" target="_blank" rel="noreferrer"><FiGithub className='h-6 w-6'/></a></div>
                <div className="hover:text-green hover:-translate-y-1 duration-150"><a href="https://www.freecodecamp.org/Ashwin_Angadi" aria-label="FreeCodeCamp" target="_blank" rel="noreferrer"><FaFreeCodeCamp className='h-6 w-6'/></a></div>
                <div className="hover:text-green hover:-translate-y-1 duration-150"><a href="https://twitter.com/iamashwinangadi" aria-label="Twitter" target="_blank" rel="noreferrer"><FiTwitter className='h-6 w-6'/></a></div>
                <div className="hover:text-green hover:-translate-y-1 duration-150 cursor-pointer" onClick={()=> alert(" Call : (+91) 7899599229")}><FiPhone className='h-6 w-6'/></div>
                
                <div className=" border h-28 w-0 text-center mt-48 hidden lg:block" style={{writingMode:"vertical-rl"}}></div>
            </div>
            <div className="md:fixed bottom-0 right-20 flex flex-col items-center justify-center font-mono text-sm tracking-widest space-y-8 hidden lg:inline-flex">
                <div className="hover:text-green hover:-translate-y-1 duration-150" style={{writingMode:"vertical-rl"}}><a href="mailto:ashwin.angadi1@gmail.com" rel="noopener noreferrer" target="_blank">ashwin.angadi1@gmail.com</a></div>
                <div className="hover:text-green hover:-translate-y-1 duration-150 " style={{writingMode:"vertical-rl"}}>+917899599229</div>
                <div className=" border h-28 w-0 " style={{writingMode:"vertical-rl"}}></div>
            </div>
        </section>
      </>
    )
  }

  