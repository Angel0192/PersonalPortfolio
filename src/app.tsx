import Hero from '../src/views/Hero/Hero.js'
import Contact from '../src/views/Contact/Contact.js';
import Experience from '../src/views/Experience/Experience.js';
import Navbar from '../src/components/Navbar/navbar.jsx'
import Projects from './views/Projects/Projects.js';
import Skills from './views/Skills/Skills.js';

export default function App(){
    return(
        <main>
            <Navbar />
            
                  {/* Hero Section*/}
                  <Hero/>
                  
                  {/* Experience Section */}
                  <Experience/>
            
                  {/* Skills Section */}
                  <Skills/>
            
                  {/* Projects Section */}
                  <Projects/>
            
                  {/* Campus Engagement Section*/}
                  <section id='campusEngage'>
            
                  </section>
            
                  {/* Contact Me*/}
                  <Contact/>
        </main>
    )
}