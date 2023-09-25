import Logo from '../assets/img/logomarca1.png';
import Home from '../assets/img/img-home1.png'
import TypeAnimation from './TypeAnimation1'
import {FaWhatsapp } from "react-icons/fa";


export default function Header() {

    const scrollToSection = (sectionId) => { 
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth'});
        }
    }
    return (
        <>
            <header >
                
                <nav>
                    <ul>
                        <li><a href="/"><img src={Logo} alt="" /></a></li>
                        <li className='li'><a href="#home">Incio</a></li>
                        <li className='li'><a href="#solutions">Solucoes</a></li>
                        <li className='li'><a href="#projects">Projetos</a></li>
                        <li className='li'><a href="#about">Sobre</a></li>
                    </ul>
                </nav>
              <button><FaWhatsapp/><p>Fale com um especialista</p></button>
            </header>

            <section id="home" className='container-header'>
                <div className='content-txt'>
                   <TypeAnimation className="textAnimacao"/>
                    <p>Conectando pessoas e soluções através do uso consciente e efetivo das tecnologias disponíveis para aprimorar processos e rotinas.</p>
                    <button id='sobre' onClick={() => scrollToSection('about')}>Ver mais</button>
                </div>
                <div className='content-img'>
                    <img src={Home} alt="" />
                </div>
            </section>

        </>
    )

}