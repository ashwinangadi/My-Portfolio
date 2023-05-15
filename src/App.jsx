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

  const { modal, setModal } = useContext(IdContext)

  const cards= document.querySelectorAll(".element")
  console.log(cards)

  const observer = new IntersectionObserver(obj => {
    
    obj.forEach(item=>{
      item.target.classList.toggle("active", item.isIntersecting)
       if(item.isIntersecting) observer.unobserve(item.target)
    });
  },{
    rootMargin: "100px",
    threshold: 0.3
  });

  cards.forEach(item=>{
    observer.observe(item)
  })
  
  // function reveal() {
  //   var reveals = document.querySelectorAll(".element");
  
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;
  
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }
  
  // window.addEventListener("scroll", reveal);


  


  return (
    <>
      <Navbar/>
      <div className={`relative container mx-auto ${modal && "blur-sm"}`}  onClick={e => e.stopPropagation()}>
        
        <Name/>
        <About/> 
        <Certification/>
        <Project/>
        <Contact/>
      </div>
      <Social/>  
    </>
  )
}

export default App
