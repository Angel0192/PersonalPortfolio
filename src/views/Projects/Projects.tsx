import {projectData} from './data'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function Projects() {
    return (
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
    )
}