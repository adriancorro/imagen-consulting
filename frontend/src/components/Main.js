import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Main = () => {
    return (
    <main>
        <div className="mainprincipal">
            <div className="contenido">
                <div className="cuadroparatextos">
                  <h1>Consultoría de imagen</h1>
                  <h4>Especialista en estilo</h4>
                  <Link className="boton" to="/#section2">Learn More</Link>
                </div> 
            </div>
        </div>
    </main>
    );
  };
  
  export default Main;