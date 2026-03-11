import './card.css'

const Card = ({title, description, role, timeline}) => {
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

export default Card