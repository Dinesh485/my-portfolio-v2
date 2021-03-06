import projects from './ProjectList'
import Tilt from 'react-parallax-tilt'
import { useEffect, } from 'react'

import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Work = () => {


   
    return ( 
        <section className="work" id="work">
            <div className="title">
                <span>work{'/>'}</span>
                 <span>Selected projects...</span>
            </div>
            <div className="wrapper">
                {
                    projects.map((item, index) =>{
                        return (
                        
                            <Tilt glareEnable = {true} glarePosition = "all" glareMaxOpacity = {0.25} transitionSpeed = {1000} scale = {1.1}  key= {index}>
                            <a  href = {item.url} className = {`project-${index} project`}  target= "_blanck">
                              <div className="image-wrapper">
                                <div  >
                                 {item.image ? <img src={item.image} alt=""/> : 'image not found'}
                                </div>
                              </div>
                               <div className="name">
                                   <span>
                                     {item.name ? (item.name): ('project ' + ( index+1))}
                                   </span>
                                   <span className ="index">{index +1}</span>
                               </div>
                            </a>
                           </Tilt>
                       
                            
                           
                        )
                    })
                }

            
            </div>
            <div className="bg-title">WORK</div>
        </section>
     );
}
 
export default Work;