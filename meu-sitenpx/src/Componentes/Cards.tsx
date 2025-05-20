interface props{
    titulo?: string;
    src?: string;
    texto?: string;
    href?: string;
    id?: string;
    //propriedades para card4
    nome?: string;
    especialidade?: string;
    telefone?: string;
    endereco?: string;
    site?: string;
    //propriedades Card5 
    icon?: string;
}

//card com imagem a esquerda, sombreado e comportamento hover
export function Card1({src, titulo, texto}: props){
    return(
        <div className="col-md-6 col-xl-4 col-sm-12">
            <div className="card mb-3 m-2 card-has-bg shadow">
                <div className="row">
                    <div className="col-4 ">
                        <img className="imgCard1 img-fluid rounded-start" src={src} />
                    </div>
                    <div className="col-8 card-body">
                        <h2 className="card-title text-center">{titulo}</h2>
                        <p className="card-text text-center"> {texto}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//card com imagem a direita, sombreado e comportamento hover, contém link de navegação
export function Card2({src, titulo, texto, href}: props){
    return(
        <div className="col-md-6 col-xl-4 col-sm-12">
            <div className="card mb-3 m-2 card-has-bg">
                <div className="row">
                    <div className="col-8 card-body text-primary-emphasis">
                        <h2 className="card-title text-center">{titulo}</h2>
                        <a className="stretched-link linkCard text-decoration-none" href={href}> {texto}</a>
                    </div>
                    <div className="col-4">
                        <img className="imgCard1 img-fluid rounded-start" src={src} />
                    </div>
                </div>
            </div>
        </div>
    )
}

//Card de texto para realçar partes importantes dos textos e arquivos
export function Card3({texto}: props){
    return(
        <div className="col-lg-6 offset-lg-3 card bg-secondary-subtle" >
            <div className="card-body py-2 px-1 text-center">
                <h6 className="m-0">{texto}</h6>
            </div>
        </div>
    )
}

//Card para utilização na página parceiros
export function Card4({id, nome, especialidade, telefone, endereco, href, site}:props){
    return(
        <div className="card p-0 m-4" id={id}>
            <div className="card-body lh-1 p-2">
                <h6 className="card-title"><b>Nome:</b> {nome}</h6>
                <p className="mb-2"><b>Especialidade:</b> {especialidade}</p>
                <p className="mb-2"><b>Telefone:</b> {telefone}</p>
                <p className="mb-2"><b>Endereço:</b> {endereco}</p>
                <p className="mb-2"><b>Site:</b> <a href={href}>{site}</a></p>
            </div>
        </div>
    )
}

//Card utilizado para Informações de contato
export function Card5({icon, titulo, texto}:props){
    return(
        <div className="mx-5 my-3 row justify-content-center">
            <div className="m-2 col-lg-1"> 
                <svg width="50" height="50" viewBox="0 0 16 16">
                    <path d={icon}/>
                </svg>
            </div>
            <div className=" col-lg-2">
                <h5 className="m-0"><b>{titulo}</b></h5>
                <p>{texto}</p>
            </div>    
        </div>
    )
}