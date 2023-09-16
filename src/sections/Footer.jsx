import LogoFooter from '../assets/img/logo-branca.png'

export default function Footer(){
    return(
        <>
         <div className="footer"> 
                <div className="content-footer"> 
                    <div className="sociais">
                        <h4>Redes Sociais: </h4>
                    </div>
                    <div className="logofooter">
                        <img src={LogoFooter} alt="" />
                    </div>
                    <div className="contatos">
                      <p>(00) 00000-0000</p>
                      <p>Kssolutions@gmail.com</p>
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