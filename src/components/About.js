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
                    <h3 className = "anim2">Lorem ipsum dolor sit amet.</h3>
                    <p className = "anim2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero in ex magni, doloribus dolor et sed nisi illum. Consequuntur a amet ipsum quisquam sapiente aliquam quas atque reprehenderit dolor.</p>
                    <p className = "anim2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero in ex magni, doloribus dolor et sed nisi illum. Consequuntur a amet ipsum quisquam sapiente aliquam quas atque reprehenderit dolor.</p>
                   

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