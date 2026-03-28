import './webView.css'
import ProjectCard from '../../components/ProjectCard/projectCard.jsx';
import Skills from '../../components/Skills/skills.jsx';
import { projectData, experience, otherEngagement } from "../../data.js"

// Refractored 
import Hero from '../Hero/Hero.js'
import Contact from '../Contact/Contact.js';
import Experience from '../Experience/Experience.js';
import Navbar from '../../components/Navbar/navbar.jsx'

function webView() {
  
  return (
    <div className="App">
      <Navbar />

      {/* Hero Section*/}
      <Hero/>
      
      {/* Experience Section */}
      <Experience/>

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

      

      {/* Campus Engagement Section*/}
      <section id='campusEngage'>

      </section>

      {/* Contact Me*/}
      <Contact/>

    </div>
  );
}

export default webView;
