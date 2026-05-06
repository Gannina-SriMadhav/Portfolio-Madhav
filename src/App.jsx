import React from 'react';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Credentials from './components/Credentials';
import Activities from './components/Activities';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Cursor />
      <Loader />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Credentials />
        <Activities />
        <Contact />
      </main>
    </>
  );
}

export default App;
