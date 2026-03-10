import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import ProjectCard from './components/ProjectCard/projectCard';
import Card from './components/Card/Card'
import Skills from './components/Skills/skills';
import { projectData, experience, campusEngagement } from "./data"

function App() {
  return (
    // The main wrapper needs a dark background for the glass to pop
    <div className="App">
      <Navbar />

      <section id='about' className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hello, there!</h1>
            <h3 className='hero-title'>My name is Angel Lopez</h3>
            <p className="hero-description">
              Transforming complex problems into elegant software solutions.
            </p>
            <p className="hero-description">Computer Science @ USI • President of ACM</p>
          </div>
          <div className="hero-image-wrapper">
            <img src='src/assets/linkedin.JPG' className="hero-photo" alt='Angel Ortega-Lopez' />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section id='projects' className="projects-section">
        <h2 className="section-heading">Projects</h2>
        <div className="grid">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tech={project.tech}
              description={project.description}
            />
          ))}
        </div>
      </section>

      {/* Experience Section*/}
      <section id='experience'>
        <h2 className='section-heading'>Experience</h2>
        <div className='grid'>
          {experience.map((exp) => (
            <ProjectCard
              key={exp.id}
              title={exp.title}
              tech={exp.tech}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      {/* Campus Engagement Section*/}

    </div>
  );
}

export default App;
