export default function Home() {
  return (
    <div className="container">
      <header>
        <div className="profile-image">RS</div>
        <h1>Rushabh Sanghavi</h1>
        <div className="title">SEO Manager</div>
        <div className="location">
          <span>📍</span>
          <span>Rajkot, Gujarat, India</span>
        </div>
      </header>

      <div className="content">
        <div className="card">
          <h2>About Me</h2>
          <p>
            Experienced SEO Manager with a proven track record of driving organic growth and improving search engine rankings.
            Based in Rajkot, Gujarat, I specialize in developing and executing comprehensive SEO strategies that deliver
            measurable results for businesses across various industries.
          </p>
        </div>

        <div className="card">
          <h2>Core Expertise</h2>
          <div className="expertise-list">
            <span className="expertise-tag">Technical SEO</span>
            <span className="expertise-tag">On-Page Optimization</span>
            <span className="expertise-tag">Off-Page SEO</span>
            <span className="expertise-tag">Keyword Research</span>
            <span className="expertise-tag">Content Strategy</span>
            <span className="expertise-tag">Link Building</span>
            <span className="expertise-tag">Analytics & Reporting</span>
            <span className="expertise-tag">Local SEO</span>
          </div>
        </div>

        <div className="card">
          <h2>Services</h2>
          <ul>
            <li>Comprehensive SEO Audits</li>
            <li>Keyword Research & Strategy</li>
            <li>Technical SEO Implementation</li>
            <li>Content Optimization</li>
            <li>Link Building Campaigns</li>
            <li>Local SEO Management</li>
            <li>Competitor Analysis</li>
            <li>Performance Tracking & Reporting</li>
          </ul>
        </div>

        <div className="card">
          <h2>Key Skills</h2>
          <ul>
            <li>Google Analytics & Search Console</li>
            <li>SEMrush, Ahrefs, Moz</li>
            <li>Google Tag Manager</li>
            <li>Schema Markup Implementation</li>
            <li>Page Speed Optimization</li>
            <li>Mobile SEO</li>
            <li>E-commerce SEO</li>
            <li>International SEO</li>
          </ul>
        </div>
      </div>

      <div className="cta-section">
        <h2>Let&apos;s Work Together</h2>
        <p>
          Looking to improve your website&apos;s search engine rankings and drive more organic traffic?
          Let&apos;s discuss how I can help your business grow online.
        </p>
        <div className="contact-buttons">
          <a href="mailto:rushabh@example.com" className="btn btn-primary">Get In Touch</a>
          <a href="https://www.linkedin.com/in/rushabhsanghavi" className="btn btn-secondary">LinkedIn Profile</a>
        </div>
      </div>
    </div>
  )
}
