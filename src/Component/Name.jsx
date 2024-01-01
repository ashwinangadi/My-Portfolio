export const Name = () => {
  

    return (
      <>
        <section id="Name" className="container mx-auto px-[10%] h-screen flex items-center justify-center max-w-7xl">
            <div className="flex flex-col">
                <div className="text-base font-mono text-green mb-3 ">
                    <h1>Hi, my name is</h1> 
                </div>
                <div  >
                    <h2 className=" text-[clamp(30px,10vw,72px)] leading-none flex flex-nowrap gap-4 font-sans text-lightest-slate font-bold ">
                        <span>Ashwin</span>
                        <span> Angadi.</span>
                        </h2>
                </div>
                <div>
                    <h3 className="text-[clamp(30px,10vw,72px)] leading-none font-sans text-slate font-bold mt-2">I build things for the web.</h3>
                </div>
            </div>
        </section>
        
      </>
    )
  }

  