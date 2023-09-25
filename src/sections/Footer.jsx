import LogoFooter from '../assets/img/logo-branca.png';
import {FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";


export default function Footer(){
    return(
        <>
         <div className="footer"> 
                <div className="content-footer"> 
                    <div className="sociais">
                        <h4>Redes Sociais: </h4>
                        <FaLinkedinIn />
                        <FaInstagram />
                        <FaFacebookF />
                    </div>
                    <div className="logofooter">
                        <img src={LogoFooter} alt="" />
                    </div>
                    <div className="contatos">
                      <p>(71) 2137-1247</p>
                      <p>comercial@kssolutions.tech</p>
                      <p>Salvador-Ba</p>
                    </div>
                </div>
            <div className="copy">
                <p>© copyright 2023 - Todos os direitos reservados</p>
                <p>KS Solutions</p>
            </div>
        </div>
       
        </>
    )
}