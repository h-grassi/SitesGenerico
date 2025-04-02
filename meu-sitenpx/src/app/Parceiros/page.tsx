import { Card4 } from "@/Componentes/Cards";
import { Select1 } from "@/Componentes/Formularios";

export default function Parceiros(){
    const itens =[
        {ordem: "1", label: "item1", href: "#item1"},
        {ordem: "2", label: "item2", href: "#item2"},
        {ordem: "3", label: "item3", href: "#item3"}   
    ]
    return(
        <>
            <h1>Parceiros</h1>
            <h2 >Lista de contatos com informações básicas, tipo uma lista técnica</h2>
            <div className="col-10 offset-1">
                <Select1 
                    label="Filtre a especialidade desejada"
                    item0 = "Clique aqui para escolher uma especialidade."
                    opcao= {itens}
                />
            </div>
            <Card4
                id="item1"
                nome="nome parceiro 1"
                especialidade=" especialidade 1"
                telefone="(51)9999-9999"
                endereco="rua joao 1"
                href="#"
                site="www.site1.com"
                display="none"
            />
            <Card4
                id="item2"
                nome="nome parceiro 2"
                especialidade=" especialidade 2"
                telefone="(51)9999-9999"
                endereco="rua joao 2"
                href="#"
                site="www.site2.com"
            />
            <Card4
                id="item3"
                nome="nome parceiro 3"
                especialidade=" especialidade 3"
                telefone="(51)9999-9999"
                endereco="rua joao 3"
                href="#"
                site="www.site3.com"
            />
        </>
    )
}
