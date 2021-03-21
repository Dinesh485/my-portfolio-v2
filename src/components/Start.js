import { useEffect } from "react";
import {gsap } from 'gsap'
import bgImg from '../images/58064.png'

const Start = () => {
    
    useEffect(() =>{
        
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        gsap.from('.anim1', {y: -50, opacity: 0,duration: 1, stagger: .2})
        
        
        
    
    },[])


    return ( 
        <section className = "start" id = 'start'  style = {{background: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="wrapper">
                <p className = "anim1 ">Start {"/>"}</p>
                <h1 className = "anim1">Hi, my name is <span>Dinesh</span></h1>
                <h2 className = "anim1">i <span>design</span> and <span>develop</span> websites</h2>
                <span className  = "anim1">let me show you...</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6s-6-2.691-6-6v-8c0-3.309 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8c0-4.418-3.582-8-8-8zm0 9c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5 1.5.672 1.5 1.5-.671 1.5-1.5 1.5z"/></svg>
        </section>
     );
}
 
export default Start;