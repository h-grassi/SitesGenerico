export interface SubItem {
    subItem: string;
    href: string;
  }
  
export interface IndiceComSubItens {
    item: string;
    collapse: string;
    subItens: SubItem[];
  }
  
export interface IndiceSemSubItens {
    item: string;
    href: string;
  }
export type IndiceItem = IndiceComSubItens | IndiceSemSubItens;

interface ExplorarSecoesProps {
    indice: IndiceItem[];
  }


  export function ExplorarSecoes({ indice }: ExplorarSecoesProps) {
    if (!Array.isArray(indice)) {
      console.log("erro, componente não está recebendo os parâmetros corretamente.");
      console.log(indice);
      return <></>;
    } else {
      return (
        <div className="col-lg-2 px-5 py-1">
          <div className="sticky-top pt-3">
            <h4>Índice</h4>
            <ul className="list-group list-group-flush">
              {indice.map((obj: IndiceItem, index) => (
                <li className="list-group-item" key={index}>
                  <a
                    className={`h6 text-decoration-none ${"subItens" in obj ? "dropdown-toggle" : ""}`}
                    href={"href" in obj ? obj.href : "#"}
                    data-bs-toggle="collapse"
                    data-bs-target={"collapse" in obj ? "#" + obj.collapse : undefined}
                    aria-expanded="true"
                    aria-controls={"collapse" in obj ? obj.collapse : undefined}
                  >
                    {obj.item}
                  </a>
  
                  {"subItens" in obj &&
                    obj.subItens.map((sub: SubItem, subIndex) => (
                      <div className="collapse collapse-vertical" id={obj.collapse} key={subIndex}>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <a className="subItemIndice text-decoration-none" href={sub.href}>
                              {sub.subItem}
                            </a>
                          </li>
                        </ul>
                      </div>
                    ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
  
