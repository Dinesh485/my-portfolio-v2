import { useEffect, useRef } from 'react';
import profileImg from '../images/profileimg.jpg'
import {gsap} from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'

import htmlIcon from '../images/my-skill-icons/html-5.svg'
import cssIcon from '../images/my-skill-icons/css-3.svg'
import  jsIcon from '../images/my-skill-icons/js.svg'
import  jqueryIcon from '../images/my-skill-icons/jquery.svg'
import  reactIcon from '../images/my-skill-icons/react.svg'
import tailwindcssIcon from '../images/my-skill-icons/tailwind-css.svg'
import expressIcon from '../images/my-skill-icons/expressjs.svg'
import mongodbIcon from '../images/my-skill-icons/mongodb.svg'
gsap.registerPlugin(scrollTrigger)




const About = () => {
    const myImg = useRef(null)

   useEffect(() =>{
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: '#about',
              start: 'top 50%'
          }
      })

     
    
      tl.from(myImg.current, {xPercent: -50, opacity: 0, duration: 1.2, })
        .from ('.anim2', {y: 50, duration: 1, opacity: 0, stagger: 0.2}, '-=0.6')
        .from ('.bar-after', {duration: 2, xPercent:-100,stagger: 0.2})



   },[])




    return ( 
        <section className="about" id="about">
            <div className="wrapper">
                <div className="title">About{'/>'}</div>
                <div className="grid-container">
                <div className="my-profile-pic" ref = {myImg}>
                <img src={profileImg} alt=""/>
                </div>
                <div className="about-me">
                    <h3 className = "anim2">Hi there, I'm Dinesh,<br/> Nice to meet you.</h3>
                    <p className = "anim2">I specialize in front end development and currently pursuing a degree in computer science. Learning web development on my own is both fun and challenging. I'm constantly improving myself to be a better developer than i am today.</p>
                    <div className = "anim2 skills">
                        <div className="front-end-skills">
                            <h4>Front end</h4>
                            <div>
                                <img src={htmlIcon} alt=""/>
                                <div className="bar">HTML
                                <div className="bar-after" style = {{transform: 'translateX(-10%)'}}></div>
                                </div>
                            </div>
                            <div>
                                <img src={cssIcon} alt=""/>
                                <div className="bar">CSS
                                <span className="bar-after" style = {{transform: 'translateX(-10%)'}}></span>
                                </div>
                            </div>
                            <div>
                                <img src={jsIcon} alt=""/>
                                <div className="bar">JavaScript
                                <div className="bar-after" style = {{transform: 'translateX(-20%)'}}></div>
                                </div>
                            </div>
                            <div>
                                <img src={jqueryIcon} alt=""/>
                                <div className="bar">JQuery
                                <div className="bar-after" style = {{transform: 'translateX(-20%)'}}></div>
                                </div>
                            </div>
                            <div>
                                <img src={reactIcon} alt=""/>
                                <div className="bar">React
                                <div className="bar-after" style = {{transform: 'translateX(-30%)'}}></div>
                                </div>
                            </div>
                            <div>
                                <img src={tailwindcssIcon} alt=""/>
                                <div className="bar">Tailwind
                                <div className="bar-after" style = {{transform: 'translateX(-15%)'}}></div>
                                </div>
                            </div>
                        </div>
                         <div className="back-end-skills">
                             <h4>Familier with Back end</h4>
                            <div className="">
                            <img src={expressIcon}alt=""/>
                             <img src={mongodbIcon}alt=""/>
                            </div>
                         </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="bg-title">
                About
            </div>
        </section>
     );
}
 
export default About;