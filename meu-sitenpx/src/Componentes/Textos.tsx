import { Card3 } from "./Cards";

/*
aqui serão armazenados todos os textos do site, cada função sera nomeada conforme a página do site em
que será exibida, seguindo o modelo abaixo:
nomePágina + texto + número do texto  
exemplo: DoencasTexto1
*/
function DoencasTexto1(){
  return(
    <>
     <h1 className="text-center fw-bold">Título</h1>
     <h4 className="text-center"><small className="text-body-secondary">Subtítulo aqui.</small></h4>
     <hr className="featurette-divider"></hr>
     <h5 id="parte1.1" className="text-primary-emphasis mt-4"> Título da seção aqui </h5>
     <p className="my-2">Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
      </p>
      <Card3 texto = "Informação relevante aqui."/>
      <p className="my-2">Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
      </p>
      <h5 id="parte1.2" className="text-primary-emphasis mt-4"> Título da seção aqui </h5>
      <p className="my-2" >Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
        Corpo do texto aqui, aqui temos muito texto, várias palavras, <b> variável aceita tags</b>
      </p>
    </>
  )
};

function Texto2(props: any){
  return(
    <>
      <h1 className="text-center fw-bold">{props.titulo}</h1>
      <h4 className="text-center"><small className="text-body-secondary">{props.subtitulo}</small></h4>
      <hr className="featurette-divider"></hr>
      <div>
          
      </div>
    </>
    )
}

export {DoencasTexto1};

