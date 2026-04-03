import Hero from '../src/views/Hero/Hero.js'
import Contact from '../src/views/Contact/Contact.js';
import Experience from '../src/views/Experience/Experience.js';
import Navbar from './components/Navbar/Web/navbar.jsx'
import Projects from './views/Projects/Projects.js';
import Skills from './views/Skills/Skills.js';
import MobileNav from './components/Navbar/Mobile/MobileNav.js';

export default function App() {
    return (
        <main>
            <Navbar />
            <MobileNav/>

            {/* Hero Section*/}
            <Hero />

            {/* Experience Section */}
            <Experience />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Campus Engagement Section*/}
            <section id='campusEngage'>

            </section>

            {/* Contact Me*/}
            <Contact />
        </main>
    )
}