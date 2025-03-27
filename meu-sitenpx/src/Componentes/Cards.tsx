export function Card1(props:any){
    return(
        <>
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
        </>
    )
}

export function Card2(props:any){
    return(
        <>
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
        </>
    )
}
