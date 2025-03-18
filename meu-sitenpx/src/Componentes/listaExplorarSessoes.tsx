function ExplorarSessoes (props: any){
    return(
        <div className="col-md-2 border">
            <h4>Explorar Artigo</h4>
            <ul>
                <li>
                <a href={props.href} className="h6 link-underline link-underline-opacity-0 dropdown-toggle" data-bs-toggle="collapse"
                    data-bs-target="#collapseParte1" aria-expanded="true" aria-controls="collapseParte1">
                    {props.item}
                </a>
                </li>
            </ul>
        </div>
    )
};


function TesteArray() {

    const indice =[{
        item: "parte 1",
        subItens: [
          { subItem: "parte1.1", href: "#parte1.1" },
          { subItem: "parte1.2", href: "#parte1.2" },
          { subItem: "parte1.3", href: "#parte1.3" },
        ]
      },
      {
        item: "parte 2",
        subItens: [
          { subItem: "parte2.1", href: "#parte2.1" },
          { subItem: "parte2.2", href: "#parte2.2" },
          { subItem: "parte3.3", href: "#parte2.3" },
        ]
      },
      {
        item: "parte 3",
        subItens: [
          { subItem: "parte3.1", href: "#parte3.1" },
          { subItem: "parte3.2", href: "#parte3.2" },
          { subItem: "parte3.3", href: "#parte3.3" },
        ]
      },
      {
        item: "parte 4",
        subItens: []
      }];
  
      
    return (
        <div className="col-md-2 border">
            <h4>Teste lista como props</h4>
            <ul>
                {indice.map((obj, index)=>(
                    <li>
                       <a className="h6 link-underline link-underline-opacity-0 dropdown-toggle"> 
                        {obj.item} 
                        </a>
                        {obj.subItens.map((sub)=> 
                            (<div className="collapse collapse-vertical" id="collapseParte1">
                                <ul>
                                    <li>
                                        <a className="link-underline link-underline-opacity-0" href={sub.href}>{sub.subItem}</a>
                                    </li>
                                </ul>
                            </div>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export{ExplorarSessoes, TesteArray}