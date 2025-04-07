import { Card4 } from "@/Componentes/Cards";
import { BarraPesquisa } from "@/Componentes/Formularios";

export default function Parceiros2(){
    return(
            <>
                <h1>Parceiros 2</h1>
                <div className= "sticky-top bg-white">
                    <BarraPesquisa/>
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