import Logo from '../assets/img/logomarca1.png';
import Home from  '../assets/img/img-home.png'
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

       <section className='container-header'>
            <div className='content-txt'>
                <h1>KS Solutions</h1>
                <p>Conectando pessoas e soluções através do uso consciente e efetivo das tecnologias disponíveis para aprimorar processos e rotinas.</p>
                <button>Ver mais</button>
            </div>
            <div className='content-img'>
                <img src={Home} alt="" />
            </div>
       </section>
    
    </>
    )

}