import {NavLink} from 'react-router-dom'

const Nav = () => {
  
   const handleClick = () =>{
     
   let ele =   document.querySelector('.nav-links')
    
    ele.classList.toggle("active-nav")
    console.log(ele.classList)
   }


    return ( 
        <nav >
      <div className="wrapper">
          <div className="logo">
            <span>{'<'}</span><span>DG</span><span>{'/>'}</span>
          </div>
        <ul className="nav-links">
            <li><NavLink to="#start" className = "active"  >start</NavLink></li>
            <li><NavLink to="#start" >work</NavLink></li>
            <li><NavLink to="#start" >about</NavLink></li>
            <li><NavLink to="#start" >contact</NavLink></li>
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