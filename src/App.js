import React from 'react';
import Bulma from 'bulma';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a id="logop" className="navbar-item" href="/">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 345.000000 349.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,349.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M1594 3380 c-752 -71 -1354 -625 -1485 -1366 -29 -165 -29 -393 0
              -558 119 -669 621 -1191 1284 -1335 501 -109 1039 31 1429 372 448 392 652
              1006 527 1584 -92 425 -342 792 -703 1033 -298 199 -702 303 -1052 270z m444
              -189 c134 -28 211 -56 347 -121 155 -75 276 -161 400 -285 224 -225 363 -493
              416 -806 29 -169 23 -412 -14 -569 -136 -572 -555 -991 -1127 -1127 -157 -37
              -400 -43 -569 -14 -313 53 -581 192 -806 416 -124 124 -210 244 -285 400 -112
              231 -145 378 -145 650 0 272 33 419 145 650 211 437 622 742 1105 820 127 20
              408 13 533 -14z"/>
              <path d="M1720 2684 c-141 -30 -295 -136 -353 -242 -62 -114 -71 -247 -25
              -369 34 -93 79 -157 263 -378 125 -150 171 -215 208 -293 30 -62 32 -75 32
              -172 0 -99 -2 -108 -31 -160 -35 -63 -105 -121 -167 -140 -65 -19 -167 -16
              -213 8 -85 44 -124 113 -124 219 0 84 22 134 78 185 41 37 120 68 174 68 72 0
              -15 130 -108 160 -57 19 -169 8 -229 -22 -64 -33 -139 -113 -170 -181 -52
              -113 -52 -261 -1 -372 78 -171 296 -276 541 -261 500 30 780 445 575 852 -44
              87 -96 154 -249 324 -170 189 -225 276 -237 381 -13 108 44 222 130 263 51 24
              149 21 197 -6 98 -55 105 -220 12 -327 l-37 -44 32 -28 c83 -74 215 -56 279
              39 50 75 53 210 7 308 -41 87 -144 160 -266 189 -78 18 -232 18 -318 -1z"/>
              </g>
              </svg>
            </a>

            <a id="logog" className="navbar-item" href="/">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 928.000000 377.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,377.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M1550 3539 c-588 -76 -1089 -450 -1321 -988 -204 -475 -172 -1025 87
              -1475 141 -246 384 -485 634 -623 96 -53 222 -104 341 -138 240 -69 20 -65
              3337 -65 3261 0 3084 -3 3301 55 186 50 345 124 516 238 128 86 342 303 427
              432 188 284 279 582 281 915 1 273 -51 497 -173 745 -208 421 -594 737 -1050
              860 -216 58 -53 55 -3318 54 -1648 -1 -3026 -5 -3062 -10z m6098 -159 c359
              -38 655 -179 908 -434 290 -292 434 -639 434 -1046 0 -767 -577 -1404 -1339
              -1480 -138 -13 -5918 -14 -6049 0 -359 38 -651 177 -908 434 -215 216 -337
              441 -406 748 -20 88 -23 131 -23 298 0 167 3 210 23 298 69 307 191 532 406
              748 253 252 553 397 900 434 109 11 5944 11 6054 0z"/>
              <path d="M1930 2914 c-141 -30 -295 -136 -353 -242 -62 -114 -71 -247 -25
              -369 34 -93 79 -157 263 -378 125 -150 171 -215 208 -293 30 -62 32 -75 32
              -172 0 -99 -2 -108 -31 -160 -35 -63 -105 -121 -167 -140 -65 -19 -167 -16
              -213 8 -85 44 -124 113 -124 219 0 84 22 134 78 185 41 37 120 68 174 68 72 0
              -15 130 -108 160 -57 19 -169 8 -229 -22 -64 -33 -139 -113 -170 -181 -52
              -113 -52 -261 -1 -372 78 -171 296 -276 541 -261 500 30 780 445 575 852 -44
              87 -96 154 -249 324 -170 189 -225 276 -237 381 -13 108 44 222 130 263 51 24
              149 21 197 -6 98 -55 105 -220 12 -327 l-37 -44 32 -28 c83 -74 215 -56 279
              39 50 75 53 210 7 308 -41 87 -144 160 -266 189 -78 18 -232 18 -318 -1z"/>
              <path d="M5292 2765 c-90 -13 -166 -26 -168 -28 -3 -3 -66 -290 -140 -638 -75
              -349 -142 -644 -150 -656 -19 -30 -158 -149 -209 -179 -62 -36 -159 -57 -238
              -51 -122 8 -157 55 -157 208 l0 97 67 12 c296 51 515 273 516 524 0 171 -91
              250 -288 250 -191 -1 -329 -71 -457 -232 -125 -157 -199 -369 -224 -635 -5
              -55 -11 -75 -37 -109 -51 -65 -80 -82 -142 -82 -74 0 -95 20 -95 90 0 41 162
              847 186 927 5 16 -8 17 -180 17 -167 0 -185 -2 -190 -17 -3 -10 -44 -199 -90
              -421 -47 -222 -95 -424 -106 -449 -31 -71 -68 -113 -117 -135 -79 -35 -133 0
              -133 86 0 26 157 794 187 914 l5 22 -185 0 -185 0 -11 -47 c-78 -340 -174
              -823 -178 -904 -9 -162 35 -257 145 -311 38 -18 63 -23 127 -22 135 1 246 60
              330 174 l38 52 17 -55 c32 -102 96 -157 201 -172 115 -17 274 47 375 150 35
              36 66 65 68 65 2 0 7 -11 10 -24 10 -40 93 -123 150 -150 82 -39 180 -52 287
              -37 171 22 284 79 421 210 l88 84 0 -35 c0 -97 60 -197 143 -237 134 -65 346
              -10 485 126 l63 61 19 -38 c104 -204 374 -238 564 -69 27 24 62 61 77 82 l28
              38 10 -38 c22 -78 76 -137 150 -162 52 -17 162 -13 230 8 79 25 149 70 210
              137 l50 54 16 -33 c56 -119 188 -187 361 -187 314 0 545 272 604 710 8 59 17
              88 28 94 63 36 143 139 211 274 l31 62 -42 0 c-34 0 -46 -5 -57 -22 -37 -61
              -87 -118 -121 -137 l-38 -21 -7 42 c-32 207 -136 303 -330 302 -212 -1 -369
              -93 -503 -293 -93 -138 -152 -316 -173 -516 -15 -139 -14 -136 -59 -188 -50
              -56 -103 -75 -162 -58 -45 14 -58 35 -58 93 0 24 67 358 149 743 82 385 148
              701 146 703 -5 5 -366 -45 -372 -52 -3 -3 -31 -125 -62 -270 -51 -236 -71
              -312 -71 -264 0 25 -65 76 -107 85 -67 14 -184 6 -252 -17 -256 -86 -454 -403
              -492 -790 -9 -86 -15 -112 -37 -143 -46 -69 -142 -109 -207 -87 -42 14 -55 35
              -55 89 0 29 241 1195 295 1429 7 27 12 27 -203 -3z m-701 -616 c19 -19 21 -30
              17 -108 -2 -74 -8 -96 -37 -155 -57 -115 -177 -216 -280 -232 l-42 -7 7 29
              c57 239 157 433 245 477 45 22 65 21 90 -4z m2993 -10 c25 -12 40 -39 51 -96
              6 -28 2 -36 -27 -62 -32 -28 -33 -32 -33 -106 0 -71 2 -78 27 -100 l27 -23
              -19 -91 c-33 -161 -80 -277 -147 -359 -41 -50 -79 -72 -125 -72 -89 1 -118 51
              -118 201 0 328 173 715 322 719 9 0 28 -5 42 -11z m-1283 -38 c16 -16 29 -36
              29 -45 0 -9 -27 -142 -60 -296 -33 -154 -60 -288 -60 -298 0 -36 -58 -139 -96
              -170 -56 -46 -106 -58 -160 -37 -60 23 -74 57 -74 185 0 223 86 488 199 613
              52 58 88 77 144 77 40 0 54 -5 78 -29z"/>
              </g>
              </svg>
            </a>
            <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <a href="https://www.github.com/sueldosales/" className="navbar-item"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sueldo-sales/" className="navbar-item"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/sueldosales/" className="navbar-item"><i className="fab fa-instagram"></i></a>
              <div className="navbar-item"><a className="button is-primary is-outlined is-rounded" href="#contact">Contate-me</a></div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-white is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <figure className="image is-128x128" style={{margin: '50px auto'}}>
                  <img className="is-rounded" alt="Foto de Sueldo Sales" src="./images/sueldosales.jpg" />
                </figure>
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Desenvolvedor Web</h1>
                <h2 className="subtitle is-size-4-desktop">Sueldo Sales</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section is-medium has-text-centered">
        <div className="container">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Posso te ajudar com os meus conhecimentos em:</h1>
          
          <div className="columns">
            <div className="column">
              <i className="fab fa-html5"></i>
              <p>HTML5</p>
            </div>
            <div className="column">
              <i className="fab fa-css3-alt"></i>
              <p>CSS</p>          
            </div>
            <div className="column">
              <i className="fab fa-js"></i>
              <p>Javascript</p>
            </div>
            <div className="column">
              <i className="fab fa-react"></i>
              <p>ReactJS</p>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <i className="fab fa-vuejs"></i>
              <p>VueJS</p>
            </div>
            <div className="column">
              <i className="fab fa-node-js"></i>
              <p>NodeJS</p>        
            </div>
            <div className="column">
              <i className="fab fa-php"></i>
              <p>PHP</p>
            </div>
            <div className="column">
              <i className="fab fa-wordpress"></i>
              <p>Wordpress</p>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <i className="fab fa-git"></i>
              <p>GIT</p>
            </div>
            <div className="column">
              <i className="fab fa-linux"></i>
              <p>Linux</p>        
            </div>
            <div className="column">
              <i className="fas fa-graduation-cap"></i>
              <p>Moodle</p>
            </div>
            <div className="column">
              <i className="fas fa-terminal"></i>
              <p>Linha de comando</p>
            </div>
          </div>

        </div>
      </section>

      <section id="works" className="section projects is-medium is-white has-text-centered">
        <div className="container">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Projetos em que estou envolvido:</h1>
          
          <div className="columns is-centered">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/drj.jpg" alt="Dra. Roberta Jales" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Dra. Roberta Jales</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
              
                  <div className="content has-text-left">
                    Site para a Dra. Roberta Jales, médica mastologista. 
                    Desenvolvimento de tema para o Wordpress.<br /> <a>#Wordpress</a> <a>#CSS</a> <a>#PHP</a>
                  </div>
                  <a href="http://robertajales.com.br/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/lego.jpg" alt="Lego Education" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Lego Education</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Desenvolvimento de tema Wordpress para a distribuidora da Lego Education no Brasil. 
                    Design desenvolvido pela <a href="https://egcreative.com/">EG Creative</a>. <a>#Wordpress</a> <a>#CSS</a> <a>#PHP</a>
                  </div>
                  <a href="https://legoeducation.mcassab.com.br/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/pp.jpg" alt="Pica Pau Mudas" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Pica Pau Mudas</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Site para a empresa de Reflorestamento Pica-Pau Bio Invest. 
                    Desenvolvimento de plugin para o estoque. <br /> <a>#Wordpress</a> <a>#CSS</a> <a>#PHP</a>
                  </div>
                  <a href="https://picapaumudas.com.br/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/cdv.jpg" alt="Codevolution" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Codevolution</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Site para o grupo de desenvolvedores Codevolution. 
                    No qual participo como Desenvolvedor Líder Front-End <a>#Wordpress</a> <a>#CSS</a> <a>#PHP</a>
                  </div>
                  <a href="https://codevolution.com.br/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

          </div>

          <div className="columns is-centered">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/cdm.jpg" alt="Criadora de Mundos" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Criadora de Mundos</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Desenvolvimento de tema Wordpress baseado no 
                    design criado por <a href="https://www.artstation.com/rafarnaud">Rafael Arnaud</a>.<br /> <a>#Wordpress</a>.
                    <a>#PHP</a> <a>#HTML</a> <a>#CSS</a> <a>#Javascript</a>
                  </div>
                  <a href="https://www.criadorademundos.com.br/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/ifrn.jpg" alt="Portal EaD IFRN" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Portal EaD IFRN</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Desenvolvimento de tema e plugins Wordpress para o portal de 
                    Educação a Distância do IFRN. <br /> <a>#Wordpress</a>.
                    <a>#PHP</a> <a>#HTML</a> <a>#CSS</a> <a>#Javascript</a>
                  </div>
                  <a href="https://ead.ifrn.edu.br/portal/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/mdl.jpg" alt="Moodle EaD IFRN" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Moodle EaD IFRN</p>
                      <p className="subtitle is-6">Ambiente de Aprendizagem</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Desenvolvimento de temas e plugins para adicionar 
                    necessidades internas da instituição ao Moodle. <br /><br /> <a>#Moodle</a>.
                    <a>#PHP</a> <a>#CSS</a> <a>#Javascript</a>
                  </div>
                  <a href="https://github.com/CoticEaDIFRN" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/sueldo.jpg" alt="Meu site" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Meu site</p>
                      <p className="subtitle is-6">Website</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    Desenvolvido em Javascript usando a biblioteca ReactJS e framework CSS Bulma. <br /> <a>#ReactJS</a>.
                    <a>#Javascript</a> <a>#CSS</a> <a>#BulmaCSS</a>
                  </div>
                  <a href="/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>
            
          </div>

          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">PWAs e APPs:</h1>
          
          <div className="columns is-centered">
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/Rosario.jpg" alt="PWA Santo Rosário" />
                  </figure>
                </div>
                <div style={{marginTop: '190px'}} className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">O Santo Rosário</p>
                      <p className="subtitle is-6">PWA - Progressive Web App</p>
                    </div>
                  </div>
              
                  <div className="content has-text-left">
                    PWA com o texto do livro de São Josemaria Escrivá.<br /> <a>#PWA</a> <a>#Javascript</a> <a>#CSS</a>
                  </div>
                  <a href="https://santorosario.netlify.com/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="./images/Consagrado.jpg" alt="PWA Consagrado" />
                  </figure>
                </div>
                <div style={{marginTop: '190px'}} className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Consagrado</p>
                      <p className="subtitle is-6">PWA - Progressive Web App</p>
                    </div>
                  </div>
                
                  <div className="content has-text-left">
                    PWA com as orações diárias do consagrado a Virgem Santíssima. <a>#PWA</a> <a>#Javascript</a> <a>#CSS</a>
                  </div>
                  <a href="https://oracoesdoconsagrado.netlify.com/" className="button is-success is-outlined">Acesse</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="contact" className="section is-medium has-text-centered">
        <div className="container">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Entre em contato:</h1>
          <form id="form" accept-charset="UTF-8" action="https://formspree.io/sueldosales@gmail.com" method="POST">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="field">
                  <label className="label">Nome</label>
                  <div className="control is-expanded">
                    <input className="input is-large" name="name" type="text" required="" />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control is-expanded">
                    <input className="input is-large" name="email" type="email" required="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column">
                <div className="field">
                  <label className="label">Mensagem</label>
                  <div className="control is-expanded">
                    <textarea className="textarea is-large" name="message" rows="5" required=""></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="content has-text-centered">
          <br />
          <h1 className="title">DEO OMINIS GLORIA</h1>
          <a href="https://www.github.com/sueldosales/" ><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sueldo-sales/" ><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/sueldosales/" ><i className="fab fa-instagram"></i></a>
        </div>
      </footer>

    </div>
  );
}

export default App;
