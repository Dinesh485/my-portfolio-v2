
import projectImage from '../images/projectImages/Screenshot.png'
import Tilty from 'react-tilty'

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

    return ( 
        <section className="work" id="work">
            <div className="wrapper">
                {
                    projects.map((item, index) =>{
                        return (
                           <Tilty glare = {true} maxGlare = {0.5}>
                            <a href = "http://www.facebook.com" className = "project" key= {index} target= "_blanck">
                               <img src={item.image} alt=""/>
                               <div className="name">
                                   <span>
                                   {item.name}
                                   </span>
                                   <span className ="index">{index +1}</span>
                               </div>
                            </a>
                           </Tilty>
                            
                           
                        )
                    })
                }

            
            </div>
        </section>
     );
}
 
export default Work;