import { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Start from "./components/Start";
import Work from "./components/Work";
import loading from "./images/loading.svg";
import { gsap } from "gsap";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  let [isloading, setLaoding] = useState(true);

  let cursorRef = useRef(null);
  let followerRef = useRef(null);
  useEffect(() => {
    //custom cursor
    gsap.to(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.to(followerRef.current, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, 0.1, { x: e.clientX, y: e.clientY });
      gsap.to(followerRef.current, 0.4, { x: e.clientX, y: e.clientY });
    });

    let anchor = document.querySelectorAll("a");
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].addEventListener("mouseenter", () => {
        gsap.to(followerRef.current, { scale: 2, duration: 0.4 });
     
      });
      anchor[i].addEventListener("mouseleave", () => {
        gsap.to(followerRef.current, {scale: 1, duration: 0.4})
      });
    }

    //scroll detection
    let nav = document.querySelector("nav");

    let lastScrolltop = 0;
    window.addEventListener("scroll", (e) => {
      let st = window.pageYOffset;
      if (st > lastScrolltop) {
        nav.classList.add("nav-hide");
      } else {
        nav.classList.remove("nav-hide");
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
        <About />
        <Work />
        <Contact />
        {isloading && (
          <span className="loading">
            <img src={loading} alt="" />
          </span>
        )}
        <div ref={cursorRef} className="cursor" id="cursor"></div>
        <div ref={followerRef} className="follower" id="follower"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
