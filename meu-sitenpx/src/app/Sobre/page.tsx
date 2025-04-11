import { Card5 } from "@/Componentes/Cards";
import {ExplorarSecoes} from "@/Componentes/listaExplorarSecoes"
import { DoencasTexto1 } from "@/Componentes/Textos";

export default function Sobre(){
    const indice =[{
        item: "parte 1",
        collapse:"collapse1",
        subItens: [
          { subItem: "parte1.1", href: "#parte1.1" },
          { subItem: "parte1.2", href: "#parte1.2" },
          { subItem: "parte1.3", href: "#parte1.3" },
        ]
      },
      {
        item: "parte 2",
        collapse:"collapse2",
        subItens: [
          { subItem: "parte2.1", href: "#parte2.1" },
          { subItem: "parte2.2", href: "#parte2.2" }
        ]
      }
    ];
      return(
          <>
            <main className="mt-4 mb-2 p-2">
              <div className="container ">
                <div className="row">
                  <div className="row">
                      <div className="col-lg-10 offset-lg-2 p-0 ">
                        <h1 className="text-center my-0">Sobre mim.</h1>
                      </div>
                  </div> 
                  <ExplorarSecoes indice={indice}/>
                  <div className="col-lg-10 p-3">
                    <img className="img-fluid rounded mb-2 border border-4 border-secondary-subtle" src="/imagens/imgTeste1.jpg"/>
                    <DoencasTexto1 />
                  </div>
                </div>
              </div>
            </main>
            <div className="bg-secondary-subtle border">
                <h3 className="text-center m-3">Informações de contato:</h3>
                <p className="text-center m-0">Onde você pode me encontrar</p>
                <Card5
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                title="Telefone:"
                label="(51) 99999-9999"
                />
                <Card5
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                title="E-mail:"
                label="teste.teste@gmail.com"
                />
                <Card5
                 d= "M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                 title="Endereço:"
                 label="Rua teste, número 1"/>
            </div>
          </>
        )
}
