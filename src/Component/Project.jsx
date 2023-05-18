import { FiGithub,FiExternalLink } from 'react-icons/fi';
import RecipeImage from './Images/recipe.png'
import TradeImage from './Images/trade.png'
import TeamImage from './Images/team.png'

export const Project = () => {
  
   
    return (
      <>
        <section id='Project' className="container mx-auto h-full grid justify-items-start content-center w-full  py-20  max-w-5xl px-5 md:px-0">
            
                <div className="text-base font-sans mb-10 flex items-center w-full ">
                    <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">03.</h1>
                    <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate font-bold">Some Things I’ve Built</h2> 
                    <h3 className="border border-lightest-navy w-[10%] md:w-[40%]"> </h3>
                </div>


                {/* Projects area */}
                <ul className="flex flex-col ">
                    
                    {/* Recipe Project */}
                    <li className="relative md:grid md:grid-cols-12 w-full h-full mb-24 md:text-end  " >
                        <div className=" md:relative md:col-start-1 md:col-span-7 bg-green-tint md:bg-[#8ed5c4] rounded-md md:hover:-translate-x-6 md:hover:scale-100 md:duration-300 " >
                            <a href="https://react-recipe-master.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank"  ><img src={RecipeImage} alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal rounded-md "  /></a>
                        </div>
                        <div className="absolute md:col-start-7 md:col-span-6 md:grid md:place-self-center px-2 md:px-0 -mt-20 md:mt-0">
                            <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                            <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold"><a href="https://react-recipe-master.web.app/" aria-label="External Link"  rel="noopener noreferrer" target="_blank" className="hover:text-green">Recipe Master</a></h2>
                            <div className="md:bg-light-navy md:p-6 md:text-lg text-light-slate md:drop-shadow-xl md:rounded-md"> 
                                Developed and styled this web application that provides tasteful recipes worldwide with the API provided by TheMealsDb.
                            </div>
                            <ul className="flex md:justify-end  mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                <li className="mr-5 mb-1">React.js</li>
                                <li className="mr-5 mb-1">TailwindCss</li>
                                <li className="mr-5 mb-1">Javascript</li>
                                <li className="">API <span className='hidden md:inline'>Integration</span></li>
                            </ul>
                            <div className="flex md:justify-end text-lightest-slate">
                                <a  href="https://github.com/ashwinangadi/React-Recipe-Master" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 me-5 hover:text-green"><FiGithub/></a>
                                <a href="https://react-recipe-master.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 hover:text-green"><FiExternalLink/></a>
                            </div>
                        </div>
                    </li>
                    

                    {/* Trade Watchlist Project */}
                    <li className="relative md:grid md:grid-cols-12 w-full h-full mb-24 mt-32 md:mt-0">
                        <div className="md:relative md:col-start-6 md:col-span-7 bg-green-tint md:bg-[#8ed5c4] rounded-md md:hover:translate-x-6 md:hover:scale-100 md:duration-300">
                            <a href="https://trade-watchlist.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank"><img src={TradeImage} alt="Recipe project window" className="mix-blend-multiply md:hover:mix-blend-normal rounded-md" /></a>
                        </div>
                        
                        <div className="absolute md:col-start-1 md:col-span-6 md:grid md:place-self-center px-2 md:px-0 -mt-20 md:mt-0 ">
                            <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                            <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold"><a href="https://trade-watchlist.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank" className="hover:text-green">Trade Watchlist</a></h2>
                            <div className="md:bg-light-navy md:p-6 md:text-lg text-light-slate md:drop-shadow-xl md:rounded-md "> 
                                Designed and Developed this web app to manage the trading watchlist of companies with the information fetched from finnHub API and representation of price data using APEXCHARTS API.  
                            </div>
                            <ul className="flex mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                <li className="mr-4 md:mr-5 mb-1">React.js</li>
                                <li className="mr-4 md:mr-5 mb-1">TailwindCSS</li>
                                <li className="mr-4 md:mr-5 mb-1">ApexCharts <span className='hidden md:inline'>API</span></li>
                                <li className="">finnHub <span className='hidden md:inline'>API</span></li>
                            </ul>
                            <div className="flex text-lightest-slate">
                                <a  href="https://github.com/ashwinangadi/React-Trade-Watchlist" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 me-5 hover:text-green"><FiGithub/></a>
                                <a href="https://trade-watchlist.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 hover:text-green"><FiExternalLink/></a>
                            </div>
                        </div>
                    </li>


                    {/* Team allocation Project */}
                    <li className="relative md:grid md:grid-cols-12 w-full h-full mb-24 md:text-end mt-40 md:mt-0">
                        <div className="md:relative md:col-start-1 md:col-span-7 bg-green-tint md:bg-[#8ed5c4] rounded-md md:hover:-translate-x-6 md:hover:scale-100 md:duration-300">
                            <a href="https://team-member-allocation.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank"><img src={TeamImage} alt="Recipe project window" className="mix-blend-multiply md:hover:mix-blend-normal rounded-md" /></a>
                        </div>
                        <div className="absolute text-red md:col-start-7 md:col-span-6 md:grid md:place-self-center px-2 md:px-0 -mt-20 md:mt-0">
                                <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                                <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold"><a href="https://team-member-allocation.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank" className="hover:text-green">Team Member Allocator</a></h2>
                                <div className="md:bg-light-navy md:p-6 md:text-lg text-light-slate md:drop-shadow-xl md:rounded-md"> 
                                    Built it To allocate employees to the teams or remove them from the team and then route them to the page where it shows the members of the teams.
                                </div>
                                <ul className="flex md:justify-end  mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                    <li className="mr-5 mb-1">React.js</li>
                                    <li className="mr-5 mb-1">Bootstrap</li>
                                    <li className="">Javascript</li>
                                </ul>
                                <div className="flex md:justify-end text-lightest-slate">
                                    <a href="https://github.com/ashwinangadi/React-TeamMemberAllocation" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 me-5 hover:text-green"><FiGithub/></a>
                                    <a href="https://team-member-allocation.web.app/" aria-label="External Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 hover:text-green"><FiExternalLink/></a>
                                </div>
                        </div>
                    </li>
                </ul>
            
        </section>
      </>
    )
  }

