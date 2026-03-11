
import './ProjectCard.css';

const ProjectCard = ({title, tech, description, link}) => {
    return (
        <div className='project-card'>
            <div className='card-content'>
                <h3 className='card-title'>{title}</h3>

                <div className='card-top'>
                    <span className='tech-tag'>{tech}</span>
                </div>

                <p className='card-description'>{description}</p>
                
                <div className='card-footer'>
                    <a href={link} target="_blank" rel="noopener noreferrer" className='view-project'>View Project</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard