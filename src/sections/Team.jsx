import { useState } from "react";
import ContentTeam from "../sections/ContentTeam.jsx";
import Modelo from "../assets/img/modelo.png"

    

export default function Team() {

   const handleClickLeft = () => {

    }
   const handleClickRight = () => {

    }
    return (
        <>
            <h1 className="title-colab">Conheça nosso time</h1>
            <section className="scroll-container ">
                <div className="scroll-content">
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"  />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                </div>
            </section>

            <div className="button-scroll">
                <button onClick={() => {}}>oi</button>
                <button onClick={() => {}}>oi</button>
            </div>

        </>
    )
}