import {Link} from 'react-router-dom'

const Nav = ({position}) => {
  
   const handleClick = () =>{
     
   let ele =   document.querySelector('.nav-links')
    
    ele.classList.toggle("active-nav")
   
   }


    return ( 
        <nav className = {position} >
      <div className="wrapper">
          <Link to ="/" className="logo">
            <span>{'<'}</span><span>DG</span><span>{'/>'}</span>
          </Link>
        <ul className="nav-links">
           <li><a href = '#start'>start</a></li>
           <li><a href = '#work'>work</a></li>
           <li><a href = '#about'>about</a></li>
           <li><a href = '#contact'>contact</a></li>
        </ul>
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