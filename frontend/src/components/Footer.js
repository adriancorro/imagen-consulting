import React from "react";
import twitterIcon from '../assets/svg/twitterIcon.svg'
import facebookIcon from '../assets/svg/facebookIcon.svg'
import instagramIcon from '../assets/svg/instagramIcon.svg'

const Footer = () => {
    return (
        <footer>
            <div className="seccionfooter">
                <p className="p1">Join us on.</p>
                {/*  sin  este div "padre" las imagenes se ven de forma vertical  */}
                <div>
                    <img className="imgbordes" src={twitterIcon} alt="logo_twitter" width="21rem"/>
                    <img className="imgbordes" src={facebookIcon} alt="facebook_logo" width="21rem"/>
                    <img className="imgbordes" src={instagramIcon} alt="instagram_logo" width="21rem"/> 
                </div>
                <p className="p2">©AC, Inc.</p>
            </div>
        </footer>
    );
  };
  
  export default Footer;