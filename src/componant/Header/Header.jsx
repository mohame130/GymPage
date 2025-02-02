import React, { useState } from "react";
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import './Header.css';
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpen] = useState(false)
    return (
      <div className="header">

        <img src={Logo} alt="" className="logo" />
       {(menuOpened=== false && mobile===true)? (
        <div
        style={{backgroundColor:'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
        onClick={()=> setMenuOpen(true)}
        >
         <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
        </div>
       ): (
       <ul className="header-menu">
         <li>
          <Link
           onClick={()=>setMenuOpen(false)}
           activeClass="active"
           to='Home'
         spy={true}
         smooth={true}
           >Home</Link>
          </li>
         <li><Link
          onClick={()=>setMenuOpen(false)}
          to='programs'
          spy={true}
          smooth={true}
         >Programs</Link></li>
         <li ><Link
         onClick={()=>setMenuOpen(false)}
          to='reasons'
          spy={true}
          smooth={true}
         >Why us</Link></li>
         <li><Link
          onClick={()=>setMenuOpen(false)}
          to='Plans'
          spy={true}
          smooth={true}
         >Plans</Link></li>
         <li><Link 
         onClick={()=>setMenuOpen(false)}
         to='Testimonials'
         spy={true}
         smooth={true}
         >Testimonials</Link></li>
        </ul>
   ) }
       
      </div>
    )
}

export default Header