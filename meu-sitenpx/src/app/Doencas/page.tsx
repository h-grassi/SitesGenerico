import {ExplorarSecoes} from "@/Componentes/listaExplorarSecoes"
import { Texto1 } from "@/Componentes/Textos";

export default function Doencas(){

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
      { subItem: "parte2.2", href: "#parte2.2" },
      { subItem: "parte3.3", href: "#parte2.3" },
    ]
  },
  {
    item: "parte 3",
    collapse:"collapse3",
    subItens: [
      { subItem: "parte3.1", href: "#parte3.1" },
      { subItem: "parte3.2", href: "#parte3.2" },
      { subItem: "parte3.3", href: "#parte3.3" },
    ]
  },
  {
    item: "parte 4",
    href:"#parte4"
  }
];
  return(
      <>
        <main className="mt-4 mb-2 p-3">
          <div className="container border">
            <div className="row">
              <ExplorarSecoes indice={indice}/>
              <div className="col-lg-10 border p-3">
                <img className="img-fluid rounded mb-2 border border-4 border-secondary-subtle" src="/imagens/imgTeste1.jpg"/>
                <Texto1 titulo="Título"
                 subtitulo="Subtítulo aqui."
                 texto="<p>Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
                      </p>"/>
              </div>
            </div>
          </div>
        </main>
      </>
    )
}