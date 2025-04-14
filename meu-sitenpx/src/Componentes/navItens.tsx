import Link from "next/link";

interface props {
    href: string;
    label: string;
    target?: "_blank" | "_self" | "_parent" | "_top"; // target é opcional (?)
  }

function LinksInternos ({href, label}:props){
    return(
        <li className="nav-item">
            <button className="btn btn-outline-secondary border-0">
                <Link className="linkNavBar link-underline link-underline-opacity-0" href={href}>{label}</Link>
            </button>
        </li>    
    )
};

function LinksExternos ({href, label,target}:props){
    return(
        <li className="nav-item">
            <button className="btn btn-outline-secondary border-0">
                <a className="linkNavBar link-underline link-underline-opacity-0 " 
                    href={href}
                    target={target}>
                    {label}
                </a>
            </button>
        </li>
    )
};

export{LinksInternos, LinksExternos}