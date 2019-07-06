import React, { Component } from 'react';

// Components imports
import Header from '../components/Header';
import Hero from '../components/Hero';
import Bloglist from '../components/Bloglist';
import Footer from '../components/Footer';

class Blog extends Component {
    render () {
        return(
            <div className="App">
    
            <Header />
            <Hero title="Blog" />
            <Bloglist />
            <Footer />
    
            </div>
        )
      }
}

export default Blog;