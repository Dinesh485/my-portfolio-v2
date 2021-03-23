import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Start from "./components/Start";
import Work from "./components/Work";
import loading from "./images/loading.svg";
import { gsap } from "gsap";

function App() {
  let [isloading, setLaoding] = useState(true);

  useEffect(() => {


    //custom cursor
    
    gsap.set(".follower", { xPercent: -50, yPercent: -50 });
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
      gsap.to(".cursor", 0.1, { x: e.clientX, y: e.clientY });
      gsap.to(".follower", 0.4, { x: e.clientX, y: e.clientY });
    });

    let anchor= document.querySelectorAll('a')
    for(let i = 0; i<anchor.length; i++){
      anchor[i].addEventListener('mouseenter', () =>{
         gsap.to('.follower', {scale: 2 , duration: 0.3})
      
      })
      anchor[i].addEventListener('mouseleave' , () =>{
        gsap.to('.follower', {scale: 1,duration: 0.3 })
      })
    }


  //scroll detection
  let nav = document.querySelector('nav')
  
    let lastScrolltop = 0;
    window.addEventListener("scroll", (e) => {
      let st = window.pageYOffset;
      if (st > lastScrolltop) {
        
        nav.classList.add('nav-hide')
        

       

      } else {
        
        nav.classList.remove('nav-hide')
      }
      lastScrolltop = st <= 0 ? 0 : st;
    });


    //remove loading screen
    setLaoding(false);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Start />
        <Work />

        {isloading && (
          <span className="loading">
            <img src={loading} alt="" />
          </span>
        )}
        <div className="cursor" id="cursor"></div>
        <div className="follower" id="follower"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
