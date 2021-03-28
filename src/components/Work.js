import projects from './ProjectList'
import Tilt from 'react-parallax-tilt'
import { useEffect } from 'react'
import {Waypoint} from 'react-waypoint'



const Work = () => {
    

   useEffect(()=>{
     
    
   })
    return ( 
        <section className="work" id="work">
            <div className="wrapper">
                {
                    projects.map((item, index) =>{
                        return (
                        
                            <Tilt glareEnable = {true} glarePosition = "all" glareMaxOpacity = {0.25} transitionSpeed = {1000} scale = {1.1}  key= {index}>
                            <a  href = {item.url} className = "project"  target= "_blanck">
                              <div className="image-wrapper">
                                <div>
                                <img src={item.image} alt=""/>
                                </div>
                              </div>
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