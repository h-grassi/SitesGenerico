function Texto1(props: any){
  return(
    <>
     <h1 className="text-center fw-bold">{props.titulo}</h1>
     <h4 className="text-center"><small className="text-body-secondary">{props.subtitulo}</small></h4>
     <hr className="featurette-divider"></hr>
     <div dangerouslySetInnerHTML={{__html: props.texto}} />
    </>
  )
};

export {Texto1};