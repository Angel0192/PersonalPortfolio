import {socialLinks} from './data'
import './Contact.css'

export default function Contact(){
    return (
        <section id="contact" className="contact-section">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="contact-container">
        
        <div className="contact-info">
          <h3>Let's build something, together.</h3>
          <p>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-grid">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-label">{item.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
    )
}