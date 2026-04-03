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
            <div className='btn'>
              <button onClick={() => console.log("Downloading Resume")}>Download Resume</button>
              {/* Spacer */}
              <div></div>
              <button onClick={() => console.log("Clicked GitHub link")}>View Projects</button>
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