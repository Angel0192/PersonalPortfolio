import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({title, tech, description}) => {
    return (
        <div className="card-glass">
            <div className="card-image-space">
                <div className="card-details">
                    <p className="tech-stack">{tech}</p>
                    <h3>{title}</h3>
                    <p className="description">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard