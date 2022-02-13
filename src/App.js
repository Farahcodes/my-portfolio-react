import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App(){

    return(
  <main>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </main>
    )
}
export default App