import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import ProjectCard from './components/ProjectCard/projectCard';
import Card from './components/Card/Card'
import Skills from './components/Skills/skills';
import linkedIn from './assets/linkedin.JPG'
import { projectData, experience, otherEngagement } from "./data"

function App() {
  const socialLinks = [
    { label: "LinkedIn", link: "https://www.linkedin.com/in/angellopez-compsci/", icon: "🔗" },
    { label: "GitHub", link: "https://github.com/Angel0192", icon: "💻" },
    { label: "Email", link: "mailto:angellope904@gmail.com", icon: "📧" }
  ];
  return (
    <div className="App">
      <Navbar />

      <section id='about' className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hello, there!</h1>
            <h2 className="hero-name">My name is <br /> Angel Lopez</h2>

            <div className='test'>
              <p className="hero-description">
                Transforming complex problems into elegant software solutions.
              </p>
              <p className="hero-subtitle">
                Computer Science @ USI • President of ACM
              </p>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={linkedIn} className="hero-photo" alt='Angel Ortega-Lopez' />
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
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Experience Section | Swap ProjectCard to Card*/}
      <section id='experience'>
        <h2 className='section-heading'>Experience</h2>
        <div className='grid'>
          {experience.map((exp) => (
            <Card
              key={exp.id}
              title={exp.title}
              role={exp.role}
              description={exp.description}
              timeline={exp.timeline}
            />
          ))}
        </div>
      </section>

      {/* Campus Engagement Section*/}
      <section id='campusEngage'>

      </section>

      {/* Contact Me*/}
      <section id="contact" className="contact-section">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="contact-container">
        
        <div className="contact-info">
          <h3>Let's build something, together.</h3>
          <p>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-grid">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-label">{item.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>

    </div>
  );
}

export default App;
