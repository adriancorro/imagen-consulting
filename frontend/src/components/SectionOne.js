import React from "react";
import imgc1 from '../assets/images/imgc1.png'
import imgc2 from '../assets/images/imgc2.png'
import imgc3 from '../assets/images/imgc3.png'



const SectionOne = () => {
    return (
        <section id="section1">
                <div className="sectiontitulos">
                <p>Everyone needs a little imagen</p>
                </div>
                <div className="rowcontenido">
                    <div className="row4">
                        <div className="sectioncontenido">
                            <img src={imgc1} alt="devices" width="100px"/>
                            <p>Asesoría de imagen corporativa</p>
                        </div>
                        <div className="sectioncontenido">
                            <img src={imgc2} alt="coffee" width="100px"/>
                            <p>Compras personales </p>
                        </div>  
                        <div className="sectioncontenido">
                            <img src={imgc3} alt="refill" width="100px"/>
                            <p>Estudio de coloración personal</p>
                        </div>  
                    </div>   
                </div>
        </section>
    );
  };
  
  export default SectionOne;