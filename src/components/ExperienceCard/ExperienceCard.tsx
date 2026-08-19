import './ExperienceCard.css'

type ExperienceCardProps = {
    title: string
    description: string
    role: string
    timeline: string
}

const ExperienceCard = ({ title, description, role, timeline }: ExperienceCardProps) => {
    return (
        <div className='experience-card'>
            <div className='experience-card-content'>
                <h2 className='experience-card-title'>{title}</h2>
                <h3 className="tag">{timeline}</h3>
                <h3 className="role">{role}</h3>
                <div className='spacer'></div>
                <p className='experience-card-description'>{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard