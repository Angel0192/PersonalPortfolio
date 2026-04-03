import linkedIn from '../../assets/linkedin.JPG'
import './Hero.css'


export default function Hero() {
  return (

    <section id='about' className="hero-section">
      {/* Hero Section*/}
      <div className="hero-content">
        {/* Hero Text*/}
        <div className="hero-text">
          {/* Hero Title*/}
          <h1 className="hero-title">Hello, there!</h1>
          <h2 className="hero-name">My name is <br /> Angel Lopez</h2>

          {/* Hero Lower Section*/}
          <div className='resumeH'>
            <p className="hero-description">
              Transforming complex problems into elegant software solutions.
            </p>
            <p className="hero-subtitle">
              Computer Science @ USI • President of ACM
            </p>

            {/* Resume download and GitHub button*/}
            <div className='hero-btn-group'>

              <a href="src/assets/Angel_Lopez_Resume.pdf" download>
                <button onClick={() => console.log("Downloading Resume")}>Download Resume</button>
              </a>
              
              <a href={"https://github.com/Angel0192"} target="_blank" rel="noopener noreferrer">
                <button onClick={() => console.log("Opening GitHub")}>View Projects</button>
              </a>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <img src={linkedIn} className="hero-photo" alt='Angel Ortega-Lopez' />
        </div>
      </div>
    </section>
  )
}