import './Experience.css'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
import { experience } from './data'

export default function Experience() {
  return (
    <section id='experience'>
      <h2 className='section-heading'>Experience</h2>
      <div className='experience-grid'>
        {experience.map((exp) => (
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