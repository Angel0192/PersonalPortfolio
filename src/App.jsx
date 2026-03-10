import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import ProjectCard from './components/projectCard';
import {projects} from "./data"

function App() {
  return (
    // The main wrapper needs a dark background for the glass to pop
    <div className="">
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Building something cool.</h1>
          <p className="hero-subtitle">
            Computer Science at USI • President of ACM
          </p>
         
        </div>

        <ProjectCard />
      </section>
    </div>
  );
}

export default App;
