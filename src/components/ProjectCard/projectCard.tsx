
import { useState } from 'react';
import './projectCard.css';
import {ProjectCardProps} from '../ProjectCard/types'
import ProjectSheet from '@/views/ProjectSheet/projectSheet';


const ProjectCard = ({ title, tech, description, media, link}: ProjectCardProps) => {
    const [sheetOpen, setSheetOpen] = useState(false)

    return (
        <div className='project-card'>
            <div className='project-card-content'>
                <h3 className='project-card-title'>{title}</h3>
                <div className='project-card-top'>
                    <span className='tech-tag'>{tech}</span>
                </div>
                <p className='project-card-description'>{description}</p>
                <br />

                <button className='view-project' onClick={() => setSheetOpen(true)}>
                    View
                </button>

                {sheetOpen && (
                    <ProjectSheet
                        title={title}
                        tech={tech}
                        description={description}
                        link={link}
                        media={media}
                        onClose={() => setSheetOpen(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default ProjectCard
