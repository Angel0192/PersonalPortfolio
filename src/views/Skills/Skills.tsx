import {skillCategories} from './data'

export default function Skills(){
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-heading">Technical Arsenal</h2>
            <div className="skills-container">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category-box">
                        <h4 className="category-title">{category.title}</h4>
                        <div className="pill-grid">
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}