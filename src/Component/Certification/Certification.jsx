import { Header } from './Header'
import {NavPage} from './NavPage'
import { NavLink } from 'react-router-dom'

export const Certification = () => {
  
    const activeLink = "text-green"
    const normalLink = ""

    return (
      <>
        <section className="container mx-auto h-screen flex items-center justify-center max-w-3xl">
            <div className="flex flex-col">
                <Header/>
                <div className="flex flex-row w-full">
                    {/* Nav section */}
                    <div className="text-slate w-[45%] h-full border-l-1 flex flex-col ">
                        <NavLink to='/' className={({ isActive}) => isActive ? activeLink : normalLink} ><p className="text-center border-l font-mono text-sm  h-14 flex items-center justify-center">Responsive Web Design</p></NavLink>
                        <NavLink to='/JSDSA' className={({ isActive}) => isActive ? activeLink : normalLink}><p className='text-center border-l font-mono text-sm  h-14 flex items-center justify-center' >Javascript Algorithms & Data Structures</p></NavLink>
                        <NavLink to='/Libs' className={({ isActive}) => isActive ? activeLink : normalLink}><p className='text-center border-l font-mono text-sm  h-14 flex items-center justify-center'>Front End Development Libraries</p></NavLink>
                    </div>
                    {/* Nav page section */}
                    <div className="text-blue h-full w-full ml-5">
                        <NavPage/>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }

  