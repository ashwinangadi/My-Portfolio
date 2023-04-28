import { FiGithub,FiExternalLink } from 'react-icons/fi';

export const Project = () => {
  
   
    return (
      <>
        <section className="container mx-auto h-full grid justify-items-start content-center w-full py-24 max-w-5xl">
            
                <div className="text-base font-sans mb-10 flex items-center w-full">
                    <h1 className="text-green text-2xl font-mono">03.</h1>
                    <h2 className="mx-2 text-3xl text-lightest-slate font-semibold">Some Things I’ve Built</h2> 
                    <h3 className="mx-5 border border-lightest-navy w-[300px]"> </h3>
                </div>


                {/* Projects area */}
                <ul className="flex flex-col">
                    {/* Recipe Project */}
                    <li className="relative grid grid-cols-12 relative w-full h-full mb-24 text-end">
                        <div className="col-start-1 col-span-7 bg-[#8ed5c4] rounded-md hover:-translate-x-6 hover:scale-100 duration-300 ">
                            <a href="https://react-recipe-master.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><img src="src\Images\recipe.png" alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal rounded-md " /></a>
                        </div>
                        <div className="absolute text-red col-start-7 col-span-6 grid place-self-center">
                                <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                                <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold"><a href="https://react-recipe-master.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" className="hover:text-green">Recipe Master</a></h2>
                                <div className="bg-light-navy p-6 text-lg text-light-slate drop-shadow-xl rounded-md"> 
                                It provides tasteful recipes from all over the world using TheMealsDb API. Built with React and Styled with Tailwindcss
                                </div>
                                <ul className="flex justify-end  mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                    <li className="mr-5 mb-1">React.js</li>
                                    <li className="mr-5 mb-1">TailwindCss</li>
                                    <li className="">MealsDB API</li>
                                </ul>
                                <div className="flex justify-end text-lightest-slate">
                                    <a  href="https://github.com/ashwinangadi/React-Recipe-Master" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 me-5 hover:text-green"><FiGithub/></a>
                                    <a href="https://react-recipe-master.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" className="h-5 w-5 hover:text-green"><FiExternalLink/></a>
                                </div>
                        </div>
                    </li>


                    {/* Trade Watchlist Project */}
                    <li className="relative grid grid-cols-12 relative w-full h-full mb-24">
                        <div className="col-start-6 col-span-7 bg-[#8ed5c4] rounded-md hover:translate-x-6 hover:scale-100 duration-300">
                            <a href="https://trade-watchlist.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><img src="src\Images\trade.PNG" alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal rounded-md" /></a>
                        </div>
                        
                        <div className="absolute text-red col-start-1 col-span-6 grid place-self-center ">
                            <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                            <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold cursor-pointer"><a href="https://trade-watchlist.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" className="hover:text-green">Trade Watchlist</a></h2>
                            <div className="bg-light-navy p-6 text-lg text-light-slate rounded-md drop-shadow-xl"> 
                            It manages the trading watchlist of companies with the information fetched from finnHub API and representation of price data using APEXCHARTS API. Built with React and Styled with Tailwindcss  
                            </div>
                            <ul className="flex mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                <li className="mr-5 mb-1">React.js</li>
                                <li className="mr-5 mb-1">TailwindCSS</li>
                                <li className="mr-5 mb-1">MealsDB API</li>
                            </ul>
                            <div className="flex text-lightest-slate">
                                <a  href="https://github.com/ashwinangadi/React-Trade-Watchlist" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 me-5 hover:text-green"><FiGithub/></a>
                                <a href="https://trade-watchlist.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" className="h-5 w-5 hover:text-green"><FiExternalLink/></a>
                            </div>
                        </div>
                    </li>


                    {/* Team allocation Project */}
                    <li className="relative grid grid-cols-12 relative w-full h-full">
                        <div className="col-start-1 col-span-7 bg-[#8ed5c4] rounded-md hover:-translate-x-6 hover:scale-100 duration-300">
                            <a href="https://team-member-allocation.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><img src="src\Images\team.PNG" alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal rounded-md" /></a>
                        </div>
                        <div className="absolute text-red col-start-7 col-span-6 grid place-self-center content-end text-end">
                                <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                                <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold"><a href="https://team-member-allocation.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" className="hover:text-green">Team Member Allocator</a></h2>
                                <div className="bg-light-navy p-6 text-lg text-light-slate rounded-md drop-shadow-xl"> 
                                    To allocate employees to the teams or remove them from the team and then route to the page where it shows the members in the teams. Built with React and Styled with Bootstrap
                                </div>
                                <ul className="flex justify-end  mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                    <li className="mr-5 mb-1">React.js</li>
                                    <li className="mr-5 mb-1">TailwindCss</li>
                                    <li className="">MealsDB API</li>
                                </ul>
                                <div className="flex justify-end text-lightest-slate">
                                    <a href="https://github.com/ashwinangadi/React-TeamMemberAllocation" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank" className="h-5 w-5 me-5 hover:text-green"><FiGithub/></a>
                                    <a href="https://team-member-allocation.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank" className="h-5 w-5 hover:text-green"><FiExternalLink/></a>
                                </div>
                        </div>
                    </li>
                </ul>
            
        </section>
      </>
    )
  }

