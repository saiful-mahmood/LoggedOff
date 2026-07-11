import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}

export default App;
