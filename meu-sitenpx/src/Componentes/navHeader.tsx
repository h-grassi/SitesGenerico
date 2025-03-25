import Link from "next/link";
import { LinksExternos, LinksInternos } from "./navItens";

export default function NavHeader(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Meu Site</a>
                    <button 
                        className="navbar-toggler" 
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
                <div className="container-fluid" >
                    <div className="collapse navbar-collapse text-sm" id="navbarDropdown">
                        <ul className="navbar-nav ">
                            <LinksInternos href="/" label="Home"/>
                            <LinksInternos href="/Artigos" label="Artigos"/>
                            <LinksInternos href="/Doencas" label="Doenças"/>
                            <LinksInternos href="/Exames" label="Exames"/>
                            <LinksInternos href="/Sobre" label="Sobre"/>
                            <LinksExternos href="https://api.whatsapp.com/send?phone=993356505&text=Olá! Teste de mensagem automática" label = "Consultar"/>
                            <LinksExternos href="#footer" label = "Entrar em contato"/>
                        </ul>
                    </div>
                </div>    
            </nav>
        </>
    )
}