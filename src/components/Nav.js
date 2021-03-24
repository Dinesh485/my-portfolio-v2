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
           <li><Link to = '#start'>start</Link></li>
           <li><Link to = '#work'>work</Link></li>
           <li><Link to = '#about'>about</Link></li>
           <li><Link to = '#contact'>contact</Link></li>
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