import { Card4 } from "@/Componentes/Cards";
import { Select1 } from "@/Componentes/Formularios";

export default function Parceiros(){
    const itens =[
        {ordem: "1", label: "item1", href: "#item1"},
        {ordem: "2", label: "item2", href: "#item2"},
        {ordem: "3", label: "item3", href: "#item3"},
        {ordem: "4", label: "item4", href: "#item4"} ,
        {ordem: "5", label: "item5", href: "#item5"} ,
        {ordem: "6", label: "item6", href: "#item6"} ,
        {ordem: "7", label: "item7", href: "#item7"}    
    ]
    return(
        <>
            <h1 className="text-center m-4">Parceiros</h1>
            <h2 className="text-center m-4">Lista de contatos com informações básicas, tipo uma lista técnica</h2>
            <hr className="featurette-divider"></hr>
            <div className= "sticky-top bg-white">
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
                especialidade=" especialidade 2"
                telefone="(51)9999-9999"
                endereco="rua joao 2"
                href="#"
                site="www.site2.com"
            />
            <Card4
                id="item4"
                nome="nome parceiro 4"
                especialidade=" especialidade 4"
                telefone="(51)9999-9999"
                endereco="rua joao 3"
                href="#"
                site="www.site3.com"
            />
            <Card4
                id="item5"
                nome="nome parceiro 5"
                especialidade=" especialidade 5"
                telefone="(51)9999-9999"
                endereco="rua joao 3"
                href="#"
                site="www.site3.com"
            />
            <Card4
                id="item6"
                nome="nome parceiro 6"
                especialidade=" especialidade 3"
                telefone="(51)9999-9999"
                endereco="rua joao 3"
                href="#"
                site="www.site3.com"
            />
            <Card4
                id="item7"
                nome="nome parceiro 7"
                especialidade=" especialidade 3"
                telefone="(51)9999-9999"
                endereco="rua joao 3"
                href="#"
                site="www.site3.com"
            />
        </>
    )
}
