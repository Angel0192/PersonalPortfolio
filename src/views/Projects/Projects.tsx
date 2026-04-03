import { projectData } from './data'
import ProjectCard from '../../components/ProjectCard/projectCard'
import './Projects.css'

export default function Projects() {
    return (
        <section id='projects' className="projects-container">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
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
    )
}