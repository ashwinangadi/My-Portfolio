import './App.css'
import { Name } from './Component/Name'
import {About} from './Component/About'
import { Certification } from './Component/Certification'


function App() {
  return (
    <>
      <div className="container mx-auto px-[10%]">
        <Name/>
        <About/>
        <Certification/>
      </div>
      
    </>
  )
}

export default App
