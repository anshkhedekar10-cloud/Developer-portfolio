import { useEffect, useState } from "react";
import "./App.css";
import {
  getProjects,
  getProfile,
  sendContact,
} from "./api/api";

import type {
  Project,
  Profile,
  Contact,
} from "./api/api";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [, setProfile] = useState<Profile | null>(null);


useEffect(() => {
  getProjects()
    .then((data) => {
      setProjects(data);
    })
    .catch((error) => {
      console.error("Error loading projects:", error);
    });
}, []); 

useEffect(() => {
  getProfile()
    .then((data) => {
      setProfile(data);
    })
    .catch((error) => {
      console.error("Error loading profile:", error);
    });
}, []);

  return (
    <main>

    {/* Navbar */}
<nav className="navbar">

  <div className="navbar-container">

    <a href="#home" className="navbar-logo">
      ANSH<span>.</span>
    </a>

    <div className="nav-links">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#certifications">Certificate</a>
      <a href="#contact">Contact</a>

    </div>

  </div>

</nav>


      {/* Hero Section */}
      <section className="hero-section" id="home">
  <div className="hero-content">

    <span className="hero-greeting">
      👋 WELCOME TO MY PORTFOLIO
    </span>

    <h1>
      Hi, I'm <span>Ansh</span>
    </h1>


    <p className="hero-description">
      "I'm passionate about building applications, exploring data, and creating solutions that make information easier to understand and use."
    </p>

    <p className="hero-subtext">
     "I enjoy working with data, uncovering meaningful patterns, creating interactive dashboards, and building technology-driven solutions."
    </p>

    <div className="hero-buttons">

      <a
        href="#projects"
        className="hero-primary-btn"
      >
        View My Projects
        <span>→</span>
      </a>

      <a
        href="/resume.pdf"
        className="hero-secondary-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
        <span>↓</span>
      </a>

    </div>

    <div className="hero-tech">

      <span>Microsoft Excel</span>
      <span>Python</span>
      <span>PowerBI</span>
      <span>React</span>
      <span>FastAPI</span>
      <span>Docker</span>
      <span>GitHub Actions</span>

    

    </div>

  </div>
</section>

      {/* About Section */}
      
      <section className="section" id="about">

      <div className="section-content">

       <span className="section-label">
      ABOUT ME
      </span>

    <h2>
      Building Projects That Solves Real Problems
    </h2>

<p>
  I enjoy building reliable web applications and working with data to
  discover patterns, understand problems, and find meaningful insights.
</p>

<p>
  My technical interests include software development, data analysis,
  data visualization, Python, SQL, Power BI, backend technologies,
  and cloud computing.
</p>

<p>
  I believe in learning by doing. I continuously improve my skills
  through hands-on projects, exploring new technologies, and building
  practical solutions to real-world problems.
</p>


  </div>

</section>
{/* Skills Section */}
<section className="section" id="skills">
  <div className="section-content">

    <span className="section-label">MY SKILLS</span>

    <h2>Technologies I Work With</h2>

    <p>
      My technical skill set includes software development,
      data analysis, data visualization, cloud technologies,
      and DevOps tools.
    </p>

    <div className="skills-grid">

      <div className="skill-card">
        <h3>Frontend</h3>
        <p>React • TypeScript • HTML • CSS</p>
      </div>

      <div className="skill-card">
        <h3>Backend</h3>
        <p>Python • FastAPI • REST APIs</p>
      </div>

      <div className="skill-card">
        <h3>Data Analytics</h3>
        <p>Python • Pandas • NumPy • SQL • Excel</p>
      </div>

      <div className="skill-card">
        <h3>Data Visualization</h3>
        <p>Power BI • Power Query • DAX • Matplotlib • Seaborn</p>
      </div>

      <div className="skill-card">
        <h3>Databases</h3>
        <p>SQLite • PostgreSQL • SQL</p>
      </div>

      <div className="skill-card">
        <h3>DevOps & Cloud</h3>
        <p>Docker • Git • GitHub Actions • Linux • CI/CD</p>
      </div>

      <div className="skill-card">
        <h3>Tools</h3>
        <p>VS Code • GitHub • Postman</p>
      </div>

    </div>
  </div>
</section>
{/* Projects Section */}

<section className="section projects-section" id="projects">
  <div className="section-content">

```
<span className="section-label">MY WORK</span>

<h2>Projects I've Built</h2>

<p className="projects-intro">
  Here are some projects where I've applied my technical
  knowledge to build applications and explore data.
</p>

<div className="projects-grid">

  {projects.map((project) => (
    <div className="project-card" key={project.id}>

      <div className="project-card-content">

        <span className="project-number">
          PROJECT {String(project.id).padStart(2, "0")}
        </span>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>

      </div>

      <div className="project-card-footer">
        <span>Personal Project</span>
        <span className="project-arrow">↗</span>
      </div>

    </div>
  ))}

</div>
```

  </div>
</section>


{/* Experience Section */}
{/* Experience Section */}
<section className="section" id="experience">
  <div className="section-content">

    <span className="section-label">
      PROJECT EXPERIENCE
    </span>

    <div className="experience-card">

      <div className="experience-header">
        <div>
          <h3>Software Development & Data Analytics</h3>
        </div>
      </div>

      <ul>
        <li>
          Developed full-stack web applications using React,
          TypeScript, Python, FastAPI, and SQL databases.
        </li>

        <li>
          Created interactive Power BI dashboards to explore
          customer data, analyze churn patterns, and identify
          meaningful business insights.
        </li>

        <li>
          Used Python, SQL, Excel, and data visualization
          techniques to explore datasets and understand
          business problems.
        </li>
      </ul>

    </div>
  </div>
</section>
{/* Education Section */}
<section className="section" id="education">

  <div className="section-content">

    <span className="section-label">
      EDUCATION
    </span>


    <div className="education-list">

      {/* Bachelor's Degree */}
      <div className="education-card">

        <div className="education-top">

          <div>
            <h3>
              Bachelor of Science in Information Technology
            </h3>

            <p className="institution">
              Shailendra Education Society, Mumbai University
            </p>
          </div>

          <span className="education-date">
            2024 - 2026
          </span>

        </div>

        <p className="education-description">
          Studied computer Science and Information Technology with a focus on
          software development, databases, networking,
          and modern technology.
        </p>

      </div>


      {/* Diploma */}
      <div className="education-card">

        <div className="education-top">

          <div>
            <h3>
              Diploma in Information Technology
            </h3>

            <p className="institution">
              Pravin Patil College of Diploma and Engineering
            </p>
          </div>

          <span className="education-date">
            2020 - 2023
          </span>

        </div>

        <p className="education-description">
          Studied Information Technology with a focus on
          software development, databases, networking,
          and modern technology.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Certifications Section */}
<section className="section" id="certifications">

  <div className="section-content">

    <span className="section-label">
      CERTIFICATION
    </span>


    <div className="certification-card">

      <div className="certification-info">

        <h3>
          AI & Data Analytics with Python
        </h3>

        <p className="certification-issuer">
          Issued by: TechCryptors
        </p>

        <p className="certification-date">
          Issued: 2022
        </p>

      </div>

      <a
        href="#"
        className="certificate-link"
      >
        View Certificate
      </a>

    </div>

  </div>

</section>
{/* Contact Section */}
<section className="section contact-section" id="contact">
  <div className="section-content">

    <span className="section-label contact-label">
      CONTACT
    </span>

    <h2>Let's Work Together</h2>

    <div className="contact-divider">
      <span></span>
      <span></span>
    </div>

    <p className="contact-intro">
      I'm always interested in discussing new opportunities, projects, and ideas.
      <br />
      Feel free to get in touch.
    </p>

    <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    console.log("CONTACT FORM SUBMITTED");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contact: Contact = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    console.log("Sending contact:", contact);

    try {
      await sendContact(contact);

      console.log("CONTACT SENT SUCCESSFULLY");

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("CONTACT ERROR:", error);

      alert("Something went wrong. Please try again.");
    }
  }}
>
  <div className="contact-form-row">

    <div className="input-group">
      <span className="input-icon">♙</span>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />
    </div>

    <div className="input-group">
      <span className="input-icon">✉</span>

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
    </div>

  </div>

  <div className="input-group message-group">
    <span className="input-icon message-icon">☰</span>

    <textarea
      name="message"
      placeholder="Your Message"
      rows={7}
      required
    />
  </div>

  <div className="contact-submit-row">

    <button
      type="submit"
      className="contact-submit"
    >
      <span>➤</span>
      Send Message
    </button>

  </div>
</form>

    <div className="contact-links">

      <a
        href="mailto:anshkhedekar10@gmail.com"
        className="contact-card"
      >
        <div className="contact-card-icon">
          ✉
        </div>

        <h3>Email Me</h3>

        <p>Send me an email</p>

        <span className="contact-arrow">
          →
        </span>
      </a>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <div className="contact-card-icon github-icon">
          ●
        </div>

        <h3>GitHub</h3>

        <p>Check out my projects</p>

        <span className="contact-arrow">
          →
        </span>
      </a>

      <a
        href="https://www.linkedin.com/in/ansh-khedekar-1089323b2/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
      >
        <div className="contact-card-icon linkedin-icon">
          in
        </div>

        <h3>LinkedIn</h3>

        <p>Connect with me</p>

        <span className="contact-arrow">
          →
        </span>
      </a>

    </div>

  </div>
</section>

  
{/* Footer */}
<footer className="footer">

  <p>
    © 2026 Ansh. Built with React, TypeScript & FastAPI.
  </p>

  <div className="footer-links">

    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>

    <a
      href="www.linkedin.com/in/ansh-khedekar-1089323b2/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

  </div>

</footer>
  </main>


  );
}

export default App;