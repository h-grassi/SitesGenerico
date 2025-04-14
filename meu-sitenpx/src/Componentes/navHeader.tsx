import Link from "next/link";
import { LinksExternos, LinksInternos } from "./navItens";

export function NavHeaderBig(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-secondary-subtle">
                <div className="container-fluid">
                    <Link className="h1 navbar-brand" href="/">Meu Site</Link>
                    <button 
                        className="navbar-toggler" 
                        id="botaoCollapse"
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarDropdown" 
                        aria-controls="navbarDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" >
                <div className="container-fluid " >
                    <div className=" navbar-collapse text-sm" id="navbarDropdown">
                        <ul className="navbar-nav">
                            <LinksInternos href="/" label="Home"/>
                            <LinksInternos href="/Doencas" label="Doenças"/>
                            <LinksInternos href="/Sobre" label="Sobre"/>
                            <LinksExternos href="https://api.whatsapp.com/send?phone=993356505&text=Olá! Teste de mensagem automática" target="_blank" label = "Consultar"/>
                            <LinksExternos href="#footer" label = "Entrar em contato"/>
                            <LinksInternos href="/Parceiros" label="Médicos Parceiros"/>
                        </ul>
                    </div>
                </div>    
            </nav>
        </>
    )
}
