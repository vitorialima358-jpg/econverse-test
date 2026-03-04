import "./Footer.scss"
import logo from "../../assets/image/Logo2.png"

const Footer = () => {
return ( <footer className="footer">


  {/* Newsletter */}
  <div className="footer__newsletter">
    <div className="container footer__newsletter-content">

      <div className="newsletter-text">
        <h3>Inscreva-se na nossa newsletter</h3>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
        </p>
      </div>

      <div className="newsletter-form">

        <div className="newsletter-inputs">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </div>

        <label className="checkbox">
          <input type="checkbox" />
          Aceito os termos e condições
        </label>

      </div>

    </div>
  </div>

  {/* Conteúdo principal */}
  <div className="footer__main">
    <div className="container footer__grid">

      <div className="footer__brand">
        <img src={logo} alt="Econverse" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div>
        <h4>Institucional</h4>
        <ul>
          <li>Sobre Nós</li>
          <li>Movimento</li>
          <li>Trabalhe conosco</li>
        </ul>
      </div>

      <div>
        <h4>Ajuda</h4>
        <ul>
          <li>Suporte</li>
          <li>Fale Conosco</li>
          <li>Perguntas Frequentes</li>
        </ul>
      </div>

      <div>
        <h4>Termos</h4>
        <ul>
          <li>Termos e Condições</li>
          <li>Política de Privacidade</li>
          <li>Troca e Devolução</li>
        </ul>
      </div>

    </div>
  </div>

  {/* Barra inferior */}
  <div className="footer__bottom">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

</footer>


)
}

export default Footer
