import Link from "next/link";

function LinksInternos (props: any){
    return(
        <li className="nav-item">
            <button className="btn btn-outline-secondary border-0">
                <Link className="linkNavBar link-underline link-underline-opacity-0" href={props.href}>{props.label}</Link>
            </button>
        </li>    
    )
};

function LinksExternos (props: any){
    return(
        <li className="nav-item">
            <button className="btn btn-outline-secondary border-0">
                <a className="linkNavBar link-underline link-underline-opacity-0 " 
                    href={props.href}
                    target={props.target}>
                    {props.label}
                </a>
            </button>
        </li>
    )
};

const teste= (event: React.MouseEventHandler<HTMLButtonElement>) =>{
    console.log("clicou")
}
export{LinksInternos, LinksExternos}