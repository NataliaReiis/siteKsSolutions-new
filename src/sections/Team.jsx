import { useState } from "react"

export default function Team(props) {
    return (
        <>
            <h1 className="title-colab">Conheça nosso time</h1>
            <section className="scroll-container ">
                <div className="scroll-content">

                    <div className="section">
                        <div className="foto">
                         <img src={props.image} alt="" />
                        </div>
                        <div className="description-colabs">
                            <h3>{props.title}</h3>
                            <h4>{props.cargo}</h4>
                            <p>{props.description}</p>
                        </div>
                    </div>

                </div>
            </section>

            <div className="button-scroll">
                <button id="left">oi</button>
                <button id="right">oi</button>
            </div>

        </>
    )
}