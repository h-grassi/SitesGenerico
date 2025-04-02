import { Card1, Card2 } from "@/Componentes/Cards";
import { HomeTexto1 } from "@/Componentes/Textos";

export default function Home() {
  return (
      <main className="bg-cor-background">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/imagens/imgTeste1.jpg" className="d-block imgCarrosel" alt="teste imagem 1"/>
            </div>
            <div className="carousel-item">
              <img src="/imagens/imgTeste2.jpg" className="d-block imgCarrosel" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="/imagens/imgTeste3.jpg" className="d-block imgCarrosel" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
      <div>
        <HomeTexto1/>
      </div>
        <div className="row border">
          <Card1
            src="/imagens/teste_150x200.jpg"
            titulo="Título Card1"
            resumo ="algum texto informativo de poucas frases que resuma o assunto tratado. "
          />
          <Card2
            src="/imagens/teste_150x200.jpg"
            titulo="Título Card2"
            resumo ="algum texto informativo de poucas frases que resuma o assunto tratado. "
          />
          <Card1
            src="/imagens/teste_150x200.jpg"
            titulo="Título Card1"
            resumo ="algum texto informativo de poucas frases que resuma o assunto tratado. "
          />
          <Card2
            src="/imagens/teste_150x200.jpg"
            titulo="Título Card2"
            resumo ="Clicando neste card você será redirecionado para a página Doenças."
            href="/Doencas"
          />
        </div>
    </main>
  );
}
