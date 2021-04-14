import { useEffect, useRef } from 'react';
import profileImg from '../images/profileimg.jpg'
import {gsap} from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
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
                    <p className = "anim2">I specialize in front end development and currently pursuing a degree in computer science. Learning web development on my own is both fun and challenging. It's been two years since i started learning and worked hard to get to this point.</p>
                    <p className = "anim2">I'm constantly improving myself to be a better developer than i am today. I like playing video games and watch anime in my free time.</p>
                   

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