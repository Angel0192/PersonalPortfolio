import './ExperienceCard.css'

type ExperienceCardProps = {
    title: string
    description: string
    role: string
    timeline: string
}

const ExperienceCard = ({title, description, role, timeline}: ExperienceCardProps) => {
    return (
        <div className='card'>
            <div className='card-content'>
                <h2 className='card-title'>{title}</h2>

                    <h3 className="tag">{timeline}</h3>
                    <h3 className="tag">{role}</h3>

                <p className='card-description'>{description}</p>
                
            </div>
        </div>
    )
}

export default ExperienceCard