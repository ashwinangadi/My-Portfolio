import './App.css'
import { Name } from './Component/Name'
import { About } from './Component/About'
import { Certification } from './Component/Certification'
import { Project } from './Component/Project'


function App() {
  return (
    <>
      <div className="container mx-auto px-[10%]">
        <Name/>
        <About/>
        <Certification/>
        <Project/>
      </div>
      
    </>
  )
}

export default App
