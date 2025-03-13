export function Card1(props:any){
    return(
        <div className="card mb-3 m-2 p-2">
            <div className="row">
                <div className="col-6">
                    <img className="imgCard1" src={props.src} />
                </div>
                <div className="col-6">
                    <h2 className="card-title">{props.titulo}</h2>
                    <p className="card-text"> {props.resumo}</p>
                </div>
            </div>
        </div>
    )
}

export function Card2(){
    return(
        <div>

            <h1>Segundo card</h1>
        </div>
    )
}
