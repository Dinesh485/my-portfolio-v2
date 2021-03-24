import { Link } from 'react-router-dom';
import projectImage from '../images/projectImages/Screenshot.png'

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
                           
                                <Link to = {item.url} className = "project" key= {index}>
                               <img src={item.image} alt=""/>
                               <div className="name">
                                   <span>
                                   {item.name}
                                   </span>
                                   <span className ="index">{index +1}</span>
                               </div>
                            </Link>
                           
                        )
                    })
                }

            
            </div>
        </section>
     );
}
 
export default Work;