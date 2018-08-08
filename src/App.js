import React, { Component } from 'react';
import './css/bulma.min.css';
import './css/sueldo.css'

class App extends Component {
  render() {
    return (
      <div>
        <div id="navbar">
          <nav className="navbar is-fixed-top" aria-label="main navigation">
            <div className="navbar-brand container">
              <a className="navbar-item" href="/">
                <p id="logo">Sueldo Sales</p>
              </a>
            </div>
          </nav>
        </div>

        {/* Apresentação */}
        <section className="section">
          <div id="presentation_box" className="box container">
            <div className="columns">
              <div className="column">
                <div id="presentation_avatar" className="card">
                  <div className="card-image">
                    <figure className="image is-square">
                      <img src="img/sueldosales.jpg" alt="Foto de Sueldo Sales" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content has-text-centered">
                        <p className="title is-4">Sueldo Sales</p>
                        <p className="subtitle is-6">Desenvolvedor Web</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-vertical-center">
                <p id="presentation_text">Olá, tenho <script>document.write(new Date().getFullYear() - 1990)</script> anos, formado em Sistemas de Informação,
                  trabalho como Desenvolvedor Web focado principalmente em desenvolvimento front-end. 
                  Sou bastante curioso e gosto de experimentar e aprender as novidades da minha área. 
                  Tentando sempre melhorar e trazer novidades aos meus serviços. </p>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="section">
          <div id="skills" className="container">
            <div className="columns is-centered">
              <div className="column has-text-centered is-two-fifths is-vertical-center">
                <h2 className="title is-2">Posso te ajudar com os meus conhecimentos em:</h2>
              </div>

              <div className="column has-text-centered">
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/html.png" alt="html" />
                      </figure>
                      <br />
                      <p className="subtitle">HTML</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/css.png" alt="css" />
                      </figure>
                      <br />
                      <p className="subtitle">CSS</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/js.png" alt="Javascript" />
                      </figure>
                      <br />
                      <p className="subtitle">Javascript</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/react.png" alt="ReactJS" />
                      </figure>
                      <br />
                      <p className="subtitle">ReactJS</p>
                    </article>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/node.png" alt="NodeJS" />
                      </figure>
                      <br />
                      <p className="subtitle">NodeJS</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/php.png" alt="PHP" />
                      </figure>
                      <br />
                      <p className="subtitle">PHP</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/wp.png" alt="Wordpress" />
                      </figure>
                      <br />
                      <p className="subtitle">Wordpress</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/pwa.png" alt="PWA" />
                      </figure>
                      <br />
                      <p className="subtitle">PWA</p>
                    </article>
                  </div>
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/moodle-logo.png" alt="Moodle LMS" />
                      </figure>
                      <br />
                      <p className="subtitle">Moodle LMS</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/git.png" alt="Git" />
                      </figure>
                      <br />
                      <p className="subtitle">Git</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/terminal.png" alt="CLI" />
                      </figure>
                      <br />
                      <p className="subtitle">CLI</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <figure className="image is-48x48">
                        <img src="img/linux.png" alt="Linux" />
                      </figure>
                      <br />
                      <p className="subtitle">Linux</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </section>

        {/* Botão do currículo */}
        <section className="section">
          <a href="https://www.linkedin.com/in/sueldo-sales/">
            <div id="resume_button" className="box container">
              <div className="columns is-centered">
                <div className="column has-text-centered">
                  <p className="title is-4">Veja o meu currículo profissional</p>
                </div>
              </div>
            </div>
          </a>  
        </section>

        {/* Projetos */}
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column has-text-centered is-vertical-center">
                <h2 className="title is-3">Projetos em que estou envolvido:</h2>
              </div>
              
              <div className="column">
                <div className="card project-cards">
                  <div className="card-image">
                    <figure className="image">
                      <img src="img/picapaumudas.jpg" alt="Pica Pau Mudas" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Pica Pau Mudas</p>
                        <p className="subtitle is-6">Website</p>
                      </div>
                    </div>
                
                    <div className="content">
                      Site para a empresa de Reflorestamento Pica-Pau Bio Invest. Desenvolvimento de plugin para o estoque.
                      <br />
                      <a href="#">#Wordpress</a> <a href="#">#CSS</a> <a href="#">#PHP</a>
                    </div>
                    <a href="https://picapaumudas.com.br/" className="button is-success is-outlined">Acesse</a>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card project-cards">
                  <div className="card-image">
                    <figure className="image">
                      <img src="img/codevolution.jpg" alt="Codevolution" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Codevolution</p>
                        <p className="subtitle is-6">Website</p>
                      </div>
                    </div>
                
                    <div className="content">
                      Site para o grupo de desenvolvedores Codevolution. No qual participo como Desenvolvedor Líder Front-End 
                      <br />
                      <a href="#">#HTML</a> <a href="#">#CSS</a> <a href="#">#Javascript</a>
                    </div>
                    <a href="https://codevolution.com.br/" className="button is-success is-outlined">Acesse</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns is-centered">
              <div className="column">
                <div className="card project-cards">
                  <div className="card-image">
                    <figure className="image">
                      <img src="img/portalead.jpg" alt="Portal EaD IFRN" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Portal EaD IFRN</p>
                        <p className="subtitle is-6">Website</p>
                      </div>
                    </div>
                
                    <div className="content">
                      Desenvolvimento de tema e plugins Wordpress para o portal de Educação a Distância do IFRN.
                      <br />
                      <a href="#">#Wordpress</a> <a href="#">#HTML</a> <a href="#">#CSS</a> <a href="#">#PHP</a> <a href="#">#Javascript</a>
                    </div>
                    <a href="https://ead.ifrn.edu.br/portal/" className="button is-success is-outlined">Acesse</a>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card project-cards">
                  <div className="card-image">
                    <figure className="image">
                      <img src="img/moodle.jpg" alt="Moodle EaD IFRN" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Moodle EaD IFRN</p>
                        <p className="subtitle is-6">Learning Management System</p>
                      </div>
                    </div>
                
                    <div className="content">
                      Desenvolvimento de temas e plugins para adicionar necessidades internas da instituição ao Moodle.
                      <br />
                      <a href="#">#Moodle</a> <a href="#">#PHP</a> <a href="#">#CSS</a> <a href="#">#Javascript</a>
                    </div>
                    <a href="https://github.com/CoticEaDIFRN" className="button is-success is-outlined">Acesse</a>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card project-cards">
                  <div className="card-image">
                    <figure className="image">
                      <img src="img/criadora.jpg" alt="Criadora de Mundos" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Criadora de Mundos</p>
                        <p className="subtitle is-6">Website</p>
                      </div>
                    </div>
                
                    <div className="content">
                      Desenvolvimento de tema Wordpress baseado no design criado por <a href="https://rafaelarnaud.myportfolio.com/">Rafael Arnaud</a>.
                      <br />
                      <a href="#">#Wordpress</a> <a href="#">#PHP</a> <a href="#">#HTML</a> <a href="#">#CSS</a> <a href="#">#Javascript</a>
                    </div>
                    <a href="#" className="button is-danger is-outlined" disabled>Inativo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </section>

        {/* Contato */}
        <section className="section">
          <div id="contact" className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title">
                  Entre em contato
                </h1>
                <form action="https://formspree.io/sueldosales@gmail.com" method="post">
                  <div className="field">
                    <label className="label" htmlFor="name">Nome</label>
                    <div className="control">
                      <input className="input" type="text" name="name" />
                    </div>
                  </div>

                  <div className="field">
                      <label className="label" htmlFor="email">Email</label>
                      <div className="control">
                          <input className="input" type="email" name="email" />
                      </div>
                  </div>
                  
                  <div className="field">
                    <label className="label" htmlFor="message">Mensagem</label>
                    <div className="control">
                      <textarea className="textarea" name="message"></textarea>
                    </div>
                  </div>
                  
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-success is-medium">Enviar</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="column is-vertical-center">
                <p id="contact_text" className="has-text-centered">Gostaria de contratar ou deseja tirar alguma dúvida?<br /> Contate-me.</p>
              </div>
            </div>
          </div>  
        </section>

        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="content has-text-centered">
              <br />
              <h1 className="title">DEO OMINIS GLORIA</h1>
          </div>
        </footer>
      </div>  
    );
  }
}

export default App;
