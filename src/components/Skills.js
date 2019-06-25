import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return(
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
    );
  }
}

export default Skills;