function ExplorarSecoes ({indice}: {indice: any}) {
   if(!Array.isArray(indice)){
       console.log("erro, componente não está recebendo os parâmetros corretamente.")
       return(<></>)
   }else{
        return (
            <div className="col-lg-2 px-5 py-1 border ">
                <div className="sticky-top pt-3">
                <h4>Índice</h4>
                <ul className="list-group list-group-flush">
                    {indice?.map((obj: any)=>(
                        <li className="list-group-item">
                        <a className={`h6 link-underline link-underline-opacity-0 ${obj.subItens == null ? "" : "dropdown-toggle"}`} href={obj.href} data-bs-toggle="collapse"
                            data-bs-target={"#" + obj.collapse} aria-expanded="true" aria-controls={obj.collapse}> 
                            {obj.item} 
                            </a>
                            {obj.subItens?.map((sub: any)=> 
                                (<div className="collapse collapse-vertical" id={obj.collapse}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            <a className="subItemIndice link-underline link-underline-opacity-0" href={sub.href}>{sub.subItem}</a>
                                        </li>
                                    </ul>
                                </div>
                                )
                            )}
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        );
    }
}

export{ExplorarSecoes}