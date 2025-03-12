
export default function Footer(){
    return(
        <footer className="bg-dark text-center text-white">
  <div className=" p-4 pb-0">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram"></i></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
    </section>
  </div>
  <div className="text-center p-3">
    <p> Todas as informações publicadas neste site têm cunho educacional, sendo que todos os conteúdos são previamente
      revisados por (insira seu nome e CRM aqui)</p>
    <p>© 2025 Copyright: Plataforma desenvolvida e e gerenciada por Henrique Colombo Grassi
      <a className="text-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="#"> meu contato aqui</a>
      .
    </p>

  </div>
</footer>
    )
}
