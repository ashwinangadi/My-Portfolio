import './App.css'
import { Name } from './Component/Name'
import { About } from './Component/About'
import { Certification } from './Component/Certification'
import { Project } from './Component/Project'
import { Contact } from './Component/Contact'
import { Social } from './Component/Social'
import { Navbar } from './Component/Navbar'
import { IdContext } from './Component/AppContext'
import { useContext } from 'react'




const App = () => {

  const { modal } = useContext(IdContext)

 


  return (
    <>
      <Navbar/>
      <div className={`relative container mx-auto px-2 ${modal && ""}`} >
        
        <Name/>
        <About/> 
        <Certification/>
        <Project/>
        <Contact/>
        <Social/>
      </div>
        
    </>
  )
}

export default App
