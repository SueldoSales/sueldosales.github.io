import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return(
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
    );
  }
}

export default Hero;