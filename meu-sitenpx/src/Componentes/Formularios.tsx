//Todos os componentes de formulários estão neste arquivo
"use client";
import { useState } from "react";

interface props{
    ordem: string;
    label: string;
    href: string;
    item0: string;
}
export function Select1 ({ opcao, item0, label }: { opcao: any[], item0: string, label:string }){
    
    const [selectedHref, setSelectedHref] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHref(event.target.value); // Atualiza o ID selecionado
    };

    const handleClick = () => {
        if (selectedHref) {
            window.location.hash = selectedHref; // Redireciona para a página do ID selecionado
        }
    };
    return(
        <div className="col-10 offset-1">
             <h6>{label}</h6>
            <div className="btn-group">
                <select className="form-select" onChange={handleChange}>
                    <option selected>{item0}</option>
                    {opcao.map((opcao:any)=>(
                        <option key={opcao.ordem} value={opcao.href}>{opcao.label}</option>    
                    ))}
                </select>
                <button className="btn btn-secondary" onClick={handleClick}>Procurar</button>
            </div>
        </div>
    )
}


export function BarraPesquisa(){
    return(
        <div className="col-10 offset-1 p-2">
            <h4 className="">Utilize o filtro:</h4>
            <button className="btn btn-primary btn-sm mx-1 active" id="todos">Todos</button>
            <button className="btn btn-primary btn-sm mx-1" id="espec1">Espec 1</button>
            <button className="btn btn-primary btn-sm mx-1" id="espec2">Espec 2</button>
            <button className="btn btn-primary btn-sm mx-1" id="espec3">Espec 3</button>
        </div>
    )
}