import './App.css'
import { Name } from './Component/Name'
import { About } from './Component/About'
import { Certification } from './Component/Certification/Certification'
import { Project } from './Component/Project'
import { BrowserRouter } from 'react-router-dom'
import { Contact } from './Component/Contact'
import { Social } from './Component/Social'


function App() {
  return (
    <>
      <Social/>
      <div className="relative container mx-auto px-[10%]">
        <Name/>
        <About/>
        <BrowserRouter>
        <Certification/>
        </BrowserRouter>
        <Project/>
        <Contact/>
      </div>
      
    </>
  )
}

export default App
