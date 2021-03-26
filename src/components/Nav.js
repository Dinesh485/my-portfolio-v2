import {Link} from 'react-router-dom'
import Scrollspy from 'react-scrollspy'


const Nav = ({position}) => {

  let ele =   document.querySelector('.nav-links')
  let nav = document.querySelector('nav')
  let navLinks = document.querySelectorAll('.nav-links-wrapper li a')

  
   const handleClick = () =>{
    ele.classList.toggle("active-nav")
     nav.classList.toggle('active-nav-open')
   
   }
    for(let i = 0; i< navLinks.length; i++) {
      navLinks[i].addEventListener('click', () =>{
        ele.classList.remove('active-nav')
      })
    }




    return ( 
        <nav className = {position} >
      <div className="wrapper">
          <Link to ="/" className="logo">
            <span>{'<'}</span><span>DG</span><span>{'/>'}</span>
          </Link>
       <div className="nav-links">
       <Scrollspy items = {['start', 'work', 'about', 'contact']} currentClassName = "active-nav-link" offset = {-200} className="nav-links-wrapper">
           <li><a href = '#start' >start</a></li>
           <li><a href = '#work'>work</a></li>
           <li><a href = '#about'>about</a></li>
           <li><a href = '#contact'>contact</a></li>
        </Scrollspy>  
       </div>
        <div className="menu-btn" onClick  = {handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>

    </nav>
     );
}
 
export default Nav;