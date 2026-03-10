import './skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C#", "Java", "Python", "Swift", "C++", "SQL", "Dart", "HTML/CSS"]
        },
        {
            title: "Robotics & Automation",
            skills: ["ROS 2", "WPILib", "CAN Bus", "Swerve Drive", "AutoCAD", "PLC Programming", "Ladder Logic"]
        },
        {
            title: "Frameworks & Tech",
            skills: ["React", ".NET", "Flutter", "SwiftUI", "Git", "Docker", "Machine Learning (YOLO)"]
        },
    ];

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

export default Skills