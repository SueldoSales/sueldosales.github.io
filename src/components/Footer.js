import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return(
      <footer id="footer" className="footer">
        <div className="content has-text-centered">
          <br />
          <h1 className="title">DEO OMINIS GLORIA</h1>
          <a href="https://www.github.com/sueldosales/" ><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sueldo-sales/" ><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/sueldosales/" ><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    )
  }
}

export default Footer;