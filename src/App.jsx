import './App.css'
import { Name } from './Component/Name'
import { About } from './Component/About'
import { Certification } from './Component/Certification'
import { Project } from './Component/Project'
import { Contact } from './Component/Contact'
import { Social } from './Component/Social'
import { Navbar } from './Component/Navbar'
import { IdContextProvider } from './Component/Context'


function App() {
  return (
    <>
      <IdContextProvider>
        <Social/>
        <div className="relative">
            <Navbar/>
            <Name id="name"/>
            <About id="about"/> 
            <Certification id="certification"/>
            <Project id="project"/>
            <Contact id="contact"/>
        </div>
      </IdContextProvider>
    </>
  )
}

export default App
