//card com imagem a esquerda, sombreado e comportamento hover
export function Card1(props:any){
    return(
        <div className="col-md-6 col-xl-4 col-sm-12 border">
            <div className="card mb-3 m-2 card-has-bg shadow">
                <div className="row">
                    <div className="col-4 ">
                        <img className="imgCard1 img-fluid rounded-start" src={props.src} />
                    </div>
                    <div className="col-8 card-body">
                        <h2 className="card-title text-center">{props.titulo}</h2>
                        <p className="card-text text-center"> {props.resumo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//card com imagem a direita, sombreado e comportamento hover
export function Card2(props:any){
    return(
        <div className="col-md-6 col-xl-4 col-sm-12 border">
            <div className="card mb-3 m-2 card-has-bg">
                <div className="row">
                    <div className="col-8 card-body text-primary-emphasis">
                        <h2 className="card-title text-center">{props.titulo}</h2>
                        <a className="stretched-link linkCard text-decoration-none" href={props.href}> {props.resumo}</a>
                    </div>
                    <div className="col-4">
                        <img className="imgCard1 img-fluid rounded-start" src={props.src} />
                    </div>
                </div>
            </div>
        </div>
    )
}
//Card de texto para realçar partes importantes dos textos e arquivos

export function Card3(props:any){
    return(
        <div className="col-lg-6 offset-lg-3 card bg-secondary-subtle" >
            <div className="card-body py-2 px-1 text-center">
                <h6 className="m-0">{props.texto}</h6>
            </div>
        </div>
    )
}

//Card para utilização na página Médicos parceiros
export function Card4(props:any){
    return(
        <div className="card p-0 m-4" id={props.id}>
            <div className="card-body lh-1 p-2">
                <h6 className="card-title"><b>Nome:</b> {props.nome}</h6>
                <p className="mb-2"><b>Especialidade:</b> {props.especialidade}</p>
                <p className="mb-2"><b>Telefone:</b> {props.telefone}</p>
                <p className="mb-2"><b>Endereço:</b> {props.endereco}</p>
                <p className="mb-2"><b>Site:</b> <a href={props.href}>{props.site}</a></p>
            </div>
        </div>
    )
}