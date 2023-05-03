
import dp from './Images/dp.jpg'

export const About = () => {
  
    

    return (
      <>
        <section id="About" className="container mx-auto  md:h-full flex flex-col items-center justify-center w-full m-1 md:max-w-4xl  py-32 ">
             <div className="flex flex-col">
                <div className="text-base font-sans mb-10 flex items-center">
                    <h1 className="text-green text-2xl font-mono">01.</h1>
                    <h2 className="mx-2  text-3xl text-lightest-slate font-bold">About Me</h2> 
                    <h3 className="mx-5 border border-lightest-navy w-[300px]"> </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
                    <div className="col-span-4">
                        <p className="text-lg font-sans text-slate mb-2">Hello! My name is Ashwin and I enjoy creating things that live on the internet. I recently began to be fascinated by web development, I have experience developing and designing software for the web, from simple landing pages to progressive web applications. </p>
                        <p className="text-lg font-sans text-slate mb-2">I&apos;m always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.</p>
                        <p className="text-lg font-sans text-slate">Here are a few technologies I&apos;ve been working with recently:</p>
                        <ul className="list-inside list-inline list-disc list-green grid grid-cols-2 font-mono text-sm mt-5 ">

                            <li className="text-green"><span className='text-light-slate'>React</span></li>
                            <li className="text-green"><span className='text-light-slate'>JavaScript (ES6+)</span></li>
                            <li className="text-green"><span className='text-light-slate'>TailWindCSS</span></li>
                            <li className="text-green"><span className='text-light-slate'>Bootstrap</span></li>
                            <li className="text-green"><span className='text-light-slate'>HTML</span></li>
                            <li className="text-green"><span className='text-light-slate'>CSS</span></li>
                            <li className="text-green"><span className='text-light-slate'>SASS</span></li>
                            <li className="text-green"><span className='text-light-slate'>Redux</span></li>
                            
                        </ul>
                    </div>
                    <div className=' grid place-self-center relative col-span-2 border-2 border-green hover:translate-y-1 hover:translate-x-1 duration-150 rounded-md'> 
                        <div className='bg-[#8ed5c4] -translate-y-2 -translate-x-2 hover:-translate-y-4 hover:-translate-x-4 duration-150 rounded-md '><img src={dp} alt="Recipe project window" className="  mix-blend-luminosity hover:mix-blend-normal rounded-md" /></div>
                    </div>
                </div>
            </div>  
        </section>
      </>
    )
}

   