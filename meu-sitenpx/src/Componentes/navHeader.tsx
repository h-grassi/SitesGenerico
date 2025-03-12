import Link from "next/link";

export default function NavHeader(){
    return(
        <>
            <Link href="/">Home</Link><br/>
            <Link href="/Artigos">Artigos</Link><br/>
            <Link href="/Doencas"> Doenças</Link><br/>
            <Link href="/Exames">Tratamentos/Exames</Link><br/>
            <Link href="/Sobre">Sobre</Link><br/>
            <a href="#footer">Entrar em contato</a><br/>
            <a href="https://api.whatsapp.com/send?phone=993356505&text=Olá! Teste de mensagem automática">Consultar</a><br/>
        </>
    )
}
