export const Project = () => {
  
   
    return (
      <>
        <section className=" container mx-auto px-[10%] h-screen flex items-center ">
            <div className="flex flex-col w-screen">
                <div className="text-base font-sans mb-10 flex items-end">
                    <h1 className="text-green text-2xl font-mono">03.</h1>
                    <h2 className="mx-2  text-3xl text-lightest-slate font-bold">Some Things I’ve Built</h2> 
                </div>
                {/* Projects area */}
                <div className="grid justify-items-end">
                    {/* Recipe Preject */}
                    <div className="relative grid grid-cols-12 gap-2.5 content-center">
                        <div className="absolute text-white col-span-7 grid justify-items-end z-10 ">
                            <p>Featured Project</p>
                            <h2>Recipe Master</h2>
                            <div className="h-20 w-[50%] border border-white"> 
                                sdsssssssssss sssssssssssss sssssssssssssss ss sssssssss ssssss ssssss sssssss sssssss ssssss 
                                aaaaa sdfgfffffffffffff  ddd ddddddddd ddddddddd ddddddd   
                            </div>
                        </div>
                        <div className="col-span-7">
                            <img src="src\Images\recipe.png" alt="Recipe project window"  />
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
      </>
    )
  }

  