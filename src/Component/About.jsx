export const About = () => {
  

    return (
      <>
        <section className="container mx-auto  h-screen flex items-center justify-center max-w-5xl">
            <div className="flex flex-col">
                <div className="text-base font-sans mb-10 flex items-center">
                    <h1 className="text-green text-2xl font-mono">01.</h1>
                    <h2 className="mx-2  text-3xl text-lightest-slate font-bold">About Me</h2> 
                    <h3 className="mx-5 border border-lightest-navy w-[300px]"> </h3>
                </div>
                <div className="grid grid-cols-5 gap-4 ">
                    <div className="col-span-3">
                        <h2 className="text-xl font-sans text-slate">Hello! My name is Ashwin and I enjoy creating things that live on the internet. I recently began to be fascinated by web development </h2>
                        <h2 className=" font-sans text-[#ccd6f6] font-bold">Ashwin Angadi.</h2>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-7xl font-sans text-[#8892b0] font-bold mt-2">Image here
                        </h3>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }

   