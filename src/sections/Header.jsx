import Logo from '../assets/img/logomarca1.png';

export default function Header() {
    return(
    <>
       <header>
            <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Soluções</li>
                    <li>Projetos</li>
                    <li>Sobre</li>
                </ul>
            </nav>
            <button>Contato</button>
       </header>
    
    </>
    )

}