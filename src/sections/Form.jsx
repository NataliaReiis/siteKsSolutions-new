import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form(){ 
    const [state, handleSubmit] = useForm("xnqkzvjz");
    if(state.succeeded) {
        return <p>Mensagem enviada com sucesso!</p>;
    }
    return (   
     <div className="form">
        <h2>Nos envie uma mensagem...</h2>
        <h4>"Desenvolvendo Soluções Tecnológicas para o Futuro, Juntos Rumo à Excelência e Inovação"</h4>
        <form onSubmit={handleSubmit}>
            <div className="infos">
                <span>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text"name="nome" size="40"/>
                    <ValidationError prefix="Nome" field="nome" errors={state.errors}/>
                </span>
                <span>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" name="email" size="40" />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </span>
            </div>
            <div className="txt">
                 <label htmlFor="message">Mensagem</label>

                <textarea name="message" id="message" cols="85" rows="10"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>

                <button type="submit">Enviar</button>

            </div>

        </form>
       </div>
 )
}



