export const Project = () => {
  
   
    return (
      <>
        <section className="container mx-auto px-[10%] h-screen grid justify-items-start content-center w-full">
            
                <div className="text-base font-sans mb-10 flex items-end">
                    <h1 className="text-green text-2xl font-mono">03.</h1>
                    <h2 className="mx-2 text-3xl text-lightest-slate font-bold">Some Things I’ve Built</h2> 
                </div>
                {/* Projects area */}
                <ul className="">
                    {/* Recipe Project */}
                    {/* <li className="relative grid grid-cols-12 w-full">
                        <div className=" col-span-7 h-full  ">
                            <img src="src\Images\recipe.png" alt="Recipe project window" className="w-[100%]" />
                        </div>
                        <div className="absolute grid justify-items-end content-center h-full">
                            <div className=" text-red col-span-7 grid justify-items-end z-10 w-[50%]">
                                <p>Featured Project</p>
                                <h2>Recipe Master</h2>
                                <div className="h-full w-full border-2 border-red "> 
                                    sdsssssssssss sssssssssssss sssssssssssssss ss sssssssss ssssss ssssss sssssss sssssss ssssss 
                                    aaaaa sdfgfffffffffffff  ddd ddddddddd ddddddddd ddddddd   ggg
                                    ggggghhhhhh hhhhh
                                    gggggg
                                    ggggggggg
                                </div>
                                <ul className="flex">
                                    <li>React.js</li>
                                    <li>TailwindCss</li>
                                    <li>MealsDB API</li>
                                </ul>

                            </div>
                        </div>
                        
                    </li> */}
                    {/* Recipe Project */}
                    <li className="relative grid grid-cols-12 content-center">
                        <div className="col-span-7 border border-white">
                            <img src="src\Images\recipe.png" alt="Recipe project window" className="w-[100%]" />
                        </div>
                        
                        <div className="grid absolute col-span-7 text-red border red">
                            <p>Featured Project</p>
                            <h2>Recipe Master</h2>
                            <div className="border border-green "> 
                                sdsssssssssss sssssssssssss sssssssssssssss ss sssssssss ssssss ssssss sssssss sssssss ssssss 
                                aaaaa sdfgfffffffffffff  ddd ddddddddd ddddddddd ddddddd   ggg
                                gggghhhhhh hhhhh
                                gggggg
                                ggggggggg
                            </div>
                            <ul className="flex">
                                <li>React.js</li>
                                <li>TailwindCss</li>
                                <li>MealsDB API</li>
                            </ul>
                        </div> 
                    </li>
                </ul>
            
        </section>
      </>
    )
  }

  