import React from "react";
import dosjovenes from '../assets/images/dosjovenes.jpg'
const SectionTwo = () => {
    return (
        <section id="section2">
        <div className="mainprincipal">
            <div className="twocolumns">
                <div className="twocolumnsFirstColumn">
                    <img src={dosjovenes} alt=""/>
                </div>
                <div className ="" >
                    <h1 className="hcolumn">
                        ¿Qué te ofrezco?

                    </h1>
                    <p className="twoColumn">Participarás en un divertido estudio completo, 
                        donde descubrirás cómo elegir las joyas y complementos de moda 
                        adecuados para tu apariencia física y tu personalidad. Al finalizar el 
                        análisis sabrás cómo mejorar tu imagen de una forma sencilla pero muy eficaz.
                         Las joyas y los complementos de moda son una herramienta
                          fundamental para mejorar tu look sin tener que alterar tu armario y también para
                           aquellos con un presupuesto más limitado. Al finalizar la sesión podrás
                            crear fantásticos outfits con un simple toque, ¡tendrás un look único y original!
                        Otras cosas a tener en cuenta
                        El servicio es apto para todas las edades y géneros. El objetivo es enseñar 
                        a mejorar la propia imagen de una forma 
                         sencilla y divertida para ganar más confianza en uno mismo.</p>
                </div>

            </div>
        </div>
   </section>
    );
  };
  
  export default SectionTwo;