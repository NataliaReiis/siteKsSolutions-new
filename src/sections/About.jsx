import Valores from '../assets/img/valores.png'
import Icon5 from '../assets/img/icon5.png'
import Icon6 from '../assets/img/icon6.png'
import Icon7 from '../assets/img/icon7.png'



export default function About() {
    return (
        <>
            <div id="about" className="container-about">
                <div className="image-about">
                    <img src={Valores} alt="" />
                </div>
                <div className="txt-about">
                    <h1>Descubra a <span style={{ color: "#2B9790" }}> KS</span> </h1>
                    <h1>e <span style={{ color: "#2B9790" }}>AMPLIE </span>seus horizontes <span style={{ color: "#2B9790" }}>!</span></h1>
                    <p>A KS está comprometida em fornecer soluções de alta qualidade e personalizadas para atender às necessidades específicas de cada cliente. Nosso foco na excelência, na inovação e na educação nos coloca na vanguarda do mercado, permitindo que nossos clientes prosperem em um ambiente empresarial em constante evolução.</p>
                    <button>Entrar em Contato</button>
                </div>
            </div>

            <section className='container-card qualites'>
                <div className='content-card description' >
                    <img src={Icon5} alt="" />
                    <h2>Missão</h2>
                    <p>Estimular em nossos clientes e parceiros uma relação com a tecnologia de forma que ela seja efetiva para suas demandas contribuindo para o crescimento e desenvolvimento do seu proposito empresarial</p>
                </div>
                <div className='content-card  description'>
                    <img src={Icon6} alt="" />
                    <h2>Vissão</h2>
                    <p>Mapear/Analisar processos e rotinas x tecnologias existentes, identificar os pontos de atenção e sugerir melhorias conforme Planejamento Estratégico da Instituição e seu Plano Orçamentário</p>
                </div>
                <div className='content-card description'>
                    <img src={Icon7} alt="" />
                    <h2>Metodologia</h2>
                    <p>Ser referência no mercado em que atuamos despertando em nossos clientes uma parceira de melhoria contínua estimulando o uso consciente da tecnologia dentro de um perfil sustentável.</p>
                </div>
            </section>
        </>
    )
}