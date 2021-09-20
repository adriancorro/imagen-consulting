import React from "react";
import logo1 from '../assets/images/logo1.png'
import menuhamburger from '../assets/svg/menuhamburger.svg'

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
                    <li><a href="#section2">Sobre mí</a></li>
                    <li><a href="#section1">Servicios</a></li>
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