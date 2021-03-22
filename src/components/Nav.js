import {NavLink} from 'react-router-dom'

const Nav = ({position}) => {
  
   const handleClick = () =>{
     
   let ele =   document.querySelector('.nav-links')
    
    ele.classList.toggle("active-nav")
   
   }


    return ( 
        <nav className = {position} >
      <div className="wrapper">
          <div className="logo">
            <span>{'<'}</span><span>DG</span><span>{'/>'}</span>
          </div>
        <ul className="nav-links">
           <li><NavLink to = '#'>start</NavLink></li>
           <li><NavLink to = '#'>work</NavLink></li>
           <li><NavLink to = '#'>about</NavLink></li>
           <li><NavLink to = '#'>contact</NavLink></li>
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