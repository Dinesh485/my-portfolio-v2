
import projectImage from '../images/projectImages/Screenshot.png'
import Tilt from 'react-parallax-tilt'
import { useEffect } from 'react'
import {gsap} from 'gsap'

const Work = () => {
    
    let projects = [
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
        {
            name: 'project 1',
            image: projectImage,
            url : 'https://www.wix.com'
        },
    ]
   useEffect(()=>{
       
    let projects= document.querySelectorAll('.projects')
    for(let i = 0; i<projects.length; i++){
      projects[i].addEventListener('mouseenter', () =>{
         gsap.to('.follower', {scale: 2 , duration: 0.3})
      
      })
      projects[i].addEventListener('mouseleave' , () =>{
        gsap.to('.follower', {scale: 1,duration: 0.3 })
      })
    }
   })
    return ( 
        <section className="work" id="work">
            <div className="wrapper">
                {
                    projects.map((item, index) =>{
                        return (
                           <Tilt glareEnable = {true} glarePosition = "all" glareMaxOpacity = {0.25} transitionSpeed = {1000} scale = {1.1}  key= {index}>
                            <a href = "http://www.facebook.com" className = "project"  target= "_blanck">
                               <img src={item.image} alt=""/>
                               <div className="name">
                                   <span>
                                   {item.name}
                                   </span>
                                   <span className ="index">{index +1}</span>
                               </div>
                            </a>
                           </Tilt>
                            
                           
                        )
                    })
                }

            
            </div>
        </section>
     );
}
 
export default Work;