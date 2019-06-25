import React from 'react';
// eslint-disable-next-line no-unused-vars
import Bulma from 'bulma';
import './App.css';

// Components imports
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Skills />
      <Works />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
