import './Experience.css'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import { experienceData } from '../../data/experienceData'

export default function Experience() {
  return (
    <section id='experience' className='experience-container'>
      <h2 className='section-heading'>Experience</h2>
      <div className='experience-grid'>
        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.id}
            title={exp.title}
            role={exp.role}
            description={exp.description}
            timeline={exp.timeline}
          />
        ))}
      </div>
    </section>
  )
}