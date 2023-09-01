import Icon1 from '../assets/img/icon1.png'
import Icon2 from '../assets/img/icon2.png'
import Icon3 from '../assets/img/icon3.png'
import Icon4 from '../assets/img/icon4.png'


export default function Solutions() {
    return(
        <>
            <section className="container-solutions">
                <div className="content-sol">
                    <img src={Icon1} alt="" />
                    <h1>Automação de Sistemas</h1>
                    <button>Ver mais</button>
                </div>
                <div className="content-sol">
                    <img src={Icon2} alt="" />
                    <h1>Gestão de processo e tecnologia</h1>
                    <button>Ver mais</button>
                </div>
                <div className="content-sol">
                    <img src={Icon3} alt="" />
                    <h1>Otimização de processos</h1>
                    <button>Ver mais</button>
                </div>
                <div className="content-sol">
                    <img src={Icon4} alt="" />
                    <h1>Implantaçaõ e analise de tecnologia</h1>
                    <button>Ver mais</button>
                </div>
            </section >
        </>
    )
}