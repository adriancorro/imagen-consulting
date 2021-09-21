import React from "react";
import logo1 from '../assets/images/logo1.png'
import menuhamburger from '../assets/svg/menuhamburger.svg'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
    <header> 
        <div className="headprincipal">
            <div className="imagenprincipal">
                <img src={logo1} width="50%"  alt="logo web"/>
            </div>
            <div className="trigger" style={{display:  'none'}} ><img src={menuhamburger}/></div>
            <div className="navprincipal nav">
                <nav>
                  <ul>
                    <li><a href="#">Blog</a></li>
                    <li><Link to="/#section2">Sobre mí</Link></li>
                    <li><Link to="#section1">Servicios</Link></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Registro</a></li>
                  </ul>
               </nav>
            </div>
       </div>
    </header> 
    );
  };
  
  export default Navbar;