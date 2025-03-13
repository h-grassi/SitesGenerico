import Link from "next/link";
export default function NavHeader(){
    return(
        <>
            <nav className="navbar bg-body-tertiary bg-secondary-subtle">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Meu Site</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <Link className="linkNavBar link-underline link-underline-opacity-0" href="/">Home</Link>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <Link className="linkNavBar link-underline link-underline-opacity-0" href="/Artigos">Artigos</Link><br/>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <Link className="linkNavBar link-underline link-underline-opacity-0"href="/Doencas"> Doenças</Link><br/>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <Link className="linkNavBar link-underline link-underline-opacity-0" href="/Exames">Exames</Link><br/>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <Link className="linkNavBar link-underline link-underline-opacity-0" href="/Sobre">Sobre</Link>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <a className="linkNavBar link-underline link-underline-opacity-0" href="#footer">Entrar em contato</a>
                                </button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-secondary border-0">
                                    <a className="linkNavBar link-underline link-underline-opacity-0 " 
                                    href="https://api.whatsapp.com/send?phone=993356505&text=Olá! Teste de mensagem automática">Consultar</a><br/>
                                </button>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}

/* 
dropdown itens
<li className="nav-item  py-1dropdown">
    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </a>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
</li>*/