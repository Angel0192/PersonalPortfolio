
import './projectCard.css';

type ProjectCardProps = {
    title: string
    tech: string
    description: string
    link: string
}

const ProjectCard = ({ title, tech, description, link }: ProjectCardProps) => {
    return (
        <div className='project-card'>
            <div className='project-card-content'>
                <h3 className='project-card-title'>{title}</h3>
                <div className='project-card-top'>
                    <span className='tech-tag'>{tech}</span>
                </div>
                <p className='project-card-description'>{description}</p>
                {link && (
                    <div className='project-card-footer'>
                        <a href={link} target="_blank" rel="noopener noreferrer" className='view-project'>View Project</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard