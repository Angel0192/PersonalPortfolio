import linkedIn from '../../assets/linkedin.JPG'

export default function Hero(){
    return(
        <section id='about' className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hello, there!</h1>
            <h2 className="hero-name">My name is <br /> Angel Lopez</h2>

            {/* Add Resume download button*/}
            <div>
                <button onClick={ () => console.log("Downloading Resume")}>Download Resume</button>
            </div>

            <div className='resumeH'>
              <p className="hero-description">
                Transforming complex problems into elegant software solutions.
              </p>
              <p className="hero-subtitle">
                Computer Science @ USI • President of ACM
              </p>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={linkedIn} className="hero-photo" alt='Angel Ortega-Lopez' />
          </div>
        </div>
      </section>
    )
}