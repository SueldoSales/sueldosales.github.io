import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
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
    );
  }
}

export default Contact;