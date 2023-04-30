import { RWD } from "./Pages/RWD"
import { JSDSA } from "./Pages/JS&DSA"
import { Libs } from "./Pages/Libs"
import { Routes, Route } from "react-router-dom"


export const NavPage = () => {
    return (
      <>
        <section >
            <Routes>
                <Route path="/" element={<RWD/>}/>
                <Route path="/JSDSA" element={<JSDSA/>}/>
                <Route path="/Libs" element={<Libs/>}/>
            </Routes>    
        </section>
      </>
    )
  }

  