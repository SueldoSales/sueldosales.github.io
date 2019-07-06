import React, { Component } from 'react';

// Components imports
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Home extends Component {
  render () {
    return(
        <div className="App">

        <Header />
        <Hero title="Desenvolvedor Web" />
        <Skills />
        <Works />
        <Contact />
        <Footer />

        </div>
    )
  }
}

export default Home;
