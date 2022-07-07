import './App.css'
import Cabecalho from './Cabecalho'
import Imagem from './Imagem'
import Resumo from './Resumo'
import Titulo from './Titulo'
import Gifs from './Gifs'
import Texto from './Texto'
import Footer from './Footer'


function App(){
  return (
    <>
      <header>
        <Cabecalho> Meu diário da Reprograma</Cabecalho>
      </header>

      <nav className='navbar'>
        <Imagem Image="https://pbs.twimg.com/profile_images/1532507998257651714/OFhFRScs_400x400.jpg" alt="Imagem da desenvolvedora Benja Ferreira"/>
        <Titulo title="Olá mundo, eu sou a Benja!"/>
      </nav>

      <section>
        <Resumo> Oi Devs, me chamo Benja Ferreira, sou graduanda em 
        Ciências Biológicas e atualmente me aventurando no mundo Tec. 
        Quem sabe um dia viro uma Dev Front-end? Essas são cenas da próxima temporada.
        Não liguem para o carão da foto, pareço séria por fora mas por dentro habita uma palhacinha.
        </Resumo>
      </section>

      <article>
        <Titulo title="4 coisas que aprendi na Reprograma"/>

        <div className='container'>
          <Titulo title="Git"/>
          <Gifs image="https://c.tenor.com/HTRpGoCQS0cAAAAM/ines-brasil.gif"
          alt="Gif Inês Brasil"/>
          <Texto>
            As primeiras semanas no Dev World foram de muita tensão.
            Lembro que na segunda semana aprendemos sobre <b>Git</b> e 
            versionamento de códigos e foi desesperador olhar aquela 
            telinha preta do Bash com tantos comandos.Os primeiros baques
            a gente nunca esquece hahaha, brincadeiras à parte, através
            do Git pude fortacer e criar novas amizades.
          </Texto>
        </div>

        <div className='container'>
          <Titulo title="HTML"/>
          <Gifs image="https://c.tenor.com/CgGUXc-LDc4AAAAM/hacker-pc.gif"
          alt="Gif Gloria maria"/>
          <Texto>
            HTML foi como dar um mergulho no desenvolvimento de códigos. Me senti 
            o Neo do filme Matrix criando main, section, divs e footer. Meus amigos 
            achavam que estava hackeando a NASA, mas era eu criando o M de Maravilhosa.
          </Texto>
        </div>

        <div className='container'>
          <Titulo title="CSS"/>
          <Gifs image="https://c.tenor.com/LnBLIN6-L10AAAAd/menina-maquiagem.gif"
          alt="Garota Css"/>
          <Texto>
            Ai gente, o <b> CSS</b> é o momento da Dev Front brilhar, dar close, por aquele 
            Background color e mostrar pra que veio ao mundo, né? Meu primeiro contato com CSS
            foi tipo pegar as maquiagens da mãe pra brincar.
          </Texto>
        </div>

        <div className='container'>
          <Titulo title="JavaScript"/>
          <Gifs image="https://c.tenor.com/YAOhbZ5GZy4AAAAC/nazar%C3%A9.gif"
          alt=""/>
          <Texto>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam provident neque consequatur dolorum ducimus quas rem eius atque assumenda quasi, 
           ab dolore unde reiciendis deleniti porro obcaecati consequuntur placeat quod. Entenderam?
          </Texto>
        </div>
      </article>
      <footer>
        <Footer>Feito por Benja Ferreira | Turma On17| 2022</Footer>
      </footer>
    </>
  )
}

export default App
