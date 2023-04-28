export const Project = () => {
  
   
    return (
      <>
        <section className="container mx-auto h-full grid justify-items-start content-center w-full py-24">
            
                <div className="text-base font-sans mb-10 flex items-end">
                    <h1 className="text-green text-2xl font-mono">03.</h1>
                    <h2 className="mx-2 text-3xl text-lightest-slate font-semibold">Some Things I’ve Built</h2> 
                </div>
                {/* Projects area */}
                <ul className="flex flex-col">
                    {/* Recipe Project */}
                    <li className="relative grid grid-cols-12 relative w-full h-full mb-24 text-end">
                        <div className="col-start-1 col-span-7 bg-[#82e1ca] ">
                            <img src="src\Images\recipe.png" alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal" />
                        </div>
                        <div className="absolute text-red col-start-7 col-span-6 grid place-self-center">
                                <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                                <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold">Recipe Master</h2>
                                <div className="bg-light-navy p-6 text-lg text-light-slate"> 
                                It provides tasteful recipes from all over the world using TheMealsDb API. Built with React and Styled with Tailwindcss
                                </div>
                                <ul className="flex justify-end  mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                    <li className="mr-5 mb-1">React.js</li>
                                    <li className="mr-5 mb-1">TailwindCss</li>
                                    <li className="">MealsDB API</li>
                                </ul>
                                <div className="flex justify-end text-lightest-slate">
                                    <a  href="https://github.com/ashwinangadi/React-Recipe-Master" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5 hover:text-green" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                    <a href="https://react-recipe-master.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5 ms-5 hover:text-green" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                </div>
                        </div>
                    </li>
                    {/* Trade Watchlist Project */}
                    <li className="relative grid grid-cols-12 relative w-full h-full mb-24">
                        <div className="col-start-6 col-span-7 bg-[#82e1ca]">
                            <img src="src\Images\trade.PNG" alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal" />
                        </div>
                        
                        <div className="absolute text-red col-start-1 col-span-6 grid place-self-center ">
                            <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                            <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold">Trade Watchlist</h2>
                            <div className="bg-light-navy p-6 text-lg text-light-slate"> 
                            It manages the trading watchlist of companies with the information fetched from finnHub API and representation of price data using APEXCHARTS API. Built with React and Styled with Tailwindcss  
                            </div>
                            <ul className="flex mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                <li className="mr-5 mb-1">React.js</li>
                                <li className="mr-5 mb-1">TailwindCSS</li>
                                <li className="mr-5 mb-1">MealsDB API</li>
                            </ul>
                            <div className="flex text-lightest-slate">
                                <a  href="https://github.com/ashwinangadi/React-Trade-Watchlist" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5 me-5 hover:text-green" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                <a href="https://trade-watchlist.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5 hover:text-green" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                            </div>
                        </div>

                    </li>
                    {/* Team allocation Project */}
                    <li className="relative grid grid-cols-12 relative w-full h-full">
                        <div className="col-start-1 col-span-7 bg-[#82e1ca]">
                            <img src="src\Images\team.PNG" alt="Recipe project window" className="mix-blend-multiply hover:mix-blend-normal" />
                        </div>
                        <div className="absolute text-red col-start-7 col-span-6 grid place-self-center content-end text-end">
                                <p className="my-2.5 font-mono text-green text-sm">Featured Project</p>
                                <h2 className="text-lightest-slate font-sans mb-5 text-2xl font-semibold">Team Member Allocator</h2>
                                <div className="bg-light-navy p-6 text-lg text-light-slate"> 
                                To allocate employees to the teams or remove them from the team and then route to the page where it shows the members in the teams. Built with React and Styled with Bootstrap
                                </div>
                                <ul className="flex justify-end  mb-2.5 mt-6 font-mono text-sm text-light-slate">
                                    <li className="mr-5 mb-1">React.js</li>
                                    <li className="mr-5 mb-1">TailwindCss</li>
                                    <li className="">MealsDB API</li>
                                </ul>
                                <div className="flex justify-end text-lightest-slate">
                                    <a  href="https://github.com/ashwinangadi/React-TeamMemberAllocation" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5 hover:text-green" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                                    <a href="https://team-member-allocation.web.app/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5 ms-5  hover:text-green" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                </div>
                        </div>
                    </li>
                </ul>
            
        </section>
      </>
    )
  }

