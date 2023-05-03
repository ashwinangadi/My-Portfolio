import './App.css'
import { Name } from './Component/Name'
import { About } from './Component/About'
import { Certification } from './Component/Certification'
import { Project } from './Component/Project'
import { Contact } from './Component/Contact'
import { Social } from './Component/Social'
import { Navbar } from './Component/Navbar'



function App() {
  return (
    <>
      
        <Social/>
        <div className="relative">
            <Navbar/>
            <Name/>
            <About/> 
            <Certification/>
            <Project/>
            <Contact/>
        </div>
      
    </>
  )
}

export default App
