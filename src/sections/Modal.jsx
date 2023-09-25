

export default function Modal(conteudo, fecharModal){
    return(
        <>
            <div className="modal">
                <div className="modal-content">
                    <span className="fechar-modal" onClick={fecharModal}>X</span>
                    {typeof conteudo === 'string'? conteudo : conteudo()}
                </div>
                {conteudo}
            </div>
        </>
    );
}