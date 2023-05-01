import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FaFreeCodeCamp } from 'react-icons/fa';

export const Social = () => {
  

    return (
      <>
        <section className="absolute text-light-slate flex flex-col z-50">
            <div className="fixed bottom-0 left-24 flex flex-col items-center justify-center space-y-8 font-bold">
            
                <div ><a className="hover:text-green hover:-translate-y-1 duration-150 " href="https://www.linkedin.com/in/ashwin-angadi/" aria-label="Linkedin" target="_blank" rel="noreferrer"><FiLinkedin className='h-5 w-5'/></a></div>
                <div><a className="hover:text-green hover:-translate-y-1 duration-150" href="https://github.com/ashwinangadi" aria-label="GitHub" target="_blank" rel="noreferrer"><FiGithub className='h-5 w-5'/></a></div>
                <div><a className="hover:text-green hover:-translate-y-1 duration-150" href="https://www.freecodecamp.org/Ashwin_Angadi" aria-label="FreeCodeCamp" target="_blank" rel="noreferrer"><FaFreeCodeCamp className='h-5 w-5'/></a></div>
                <div><a className="hover:text-green hover:-translate-y-1 duration-150" href="https://twitter.com/iamashwinangadi" aria-label="Twitter" target="_blank" rel="noreferrer"><FiTwitter className='h-5 w-5'/></a></div>
                <div><FiPhone className='h-5 w-5'/></div>
                
                <div className=" border h-24 w-0 text-center mt-48" style={{writingMode:"vertical-rl"}}></div>
            </div>
            <div className="fixed bottom-0 right-24 flex flex-col items-center justify-center font-mono text-sm tracking-widest space-y-8">
                <div className="hover:text-green hover:-translate-y-1 duration-150" style={{writingMode:"vertical-rl"}}>ashwin.angadi1@gmail.com</div>
                <div className="hover:text-green hover:-translate-y-1 duration-150" style={{writingMode:"vertical-rl"}}>+917899599229</div>
                <div className=" border h-24 w-0" style={{writingMode:"vertical-rl"}}></div>
            </div>
        </section>
      </>
    )
  }

  