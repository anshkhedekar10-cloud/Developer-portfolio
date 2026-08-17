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
  const [profile, setProfile] = useState<Profile | null>(null);


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

      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
           Hi, I'm {profile?.name || "Ansh"}
          </h1>

          <h2>
            {profile?.role || "Software Engineer"}
          </h2>

          <p>
            {profile?.description || 
            "I build scalable web applications, APIs, and cloud-ready software solutions."}
          </p>

          <div className="buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>

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
      Building Software That Solves Real Problems
    </h2>

    <p>
      I am a software developer focused on building
      reliable, scalable, and user-friendly applications.
      I enjoy turning ideas into practical software solutions.
    </p>

    <p>
      My technical interests include full-stack development,
      backend engineering, cloud technologies, DevOps,
      automation, and modern software architecture.
    </p>

    <p>
      I am continuously improving my skills by building
      real-world projects and learning technologies used
      in professional engineering environments.
    </p>

  </div>

</section>
{/* Skills Section */}
<section className="section" id="skills">

  <div className="section-content">

    <span className="section-label">
      MY SKILLS
    </span>

    <h2>
      Technologies I Work With
    </h2>

    <p>
      A growing technical toolkit focused on software
      engineering, Web development, cloud, and DevOps.
    </p>

    <div className="skills-grid">

      <div className="skill-card">
        <h3>Frontend</h3>
        <p>•React •TypeScript •HTML •CSS</p>
      </div>

      <div className="skill-card">
        <h3>Backend</h3>
        <p>•Python •FastAPI •REST APIs</p>
      </div>

      <div className="skill-card">
        <h3>Database</h3>
        <p>•PostgreSQL •SQL</p>
      </div>

      <div className="skill-card">
        <h3>DevOps</h3>
        <p>•Docker •Git •GitHub Actions •CI/CD</p>
      </div>

      <div className="skill-card">
        <h3>Cloud</h3>
        <p>•Cloud Fundamentals •Cloud Deployment •Linux</p>
      </div>

      <div className="skill-card">
        <h3>Tools</h3>
        <p>•VS Code •GitHub •Postman</p>
      </div>

    </div>

  </div>

</section>
{/* Projects Section */}
<section className="section" id="projects">

  <div className="section-content">

    <span className="section-label">
      MY PROJECTS
    </span>

    <h2>
      Projects I've Built
    </h2>

    <p>
      A selection of projects demonstrating my skills in
      software development, Web Development, and DevOps.
    </p>

  <div className="projects-grid">

  {[...projects]
    .sort((a, b) => {
      if (a.title === "Developer Portfolio Platform") return -1;
      if (b.title === "Developer Portfolio Platform") return 1;
      return a.id - b.id;
    })
    .map((project, index) => (
      <div className="project-card" key={project.id}>

        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>

        <div className="project-tech">
          {project.technologies.map(
            (technology: string) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>

      </div>
    ))}

</div>

  </div>

</section>

{/* Experience Section */}
<section className="section" id="experience">

  <div className="section-content">

    <span className="section-label">
      EXPERIENCE
    </span>

  

    <div className="experience-card">

      <div className="experience-header">

        <div>
          <h3>
            Software Developer
          </h3>
          </div>

      </div>

      <ul>

        <li>
          Developed and maintained software applications
          using modern development technologies.
        </li>

        <li>
          Built REST APIs and worked with databases to
          support application functionality.
        </li>

        <li>
          Used Git and software development best practices
          for version control and collaboration.
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

    <span className="section-label">
      CONTACT
    </span>

    <h2>
      Let's Work Together
    </h2>

    <p>
      I'm always interested in discussing new opportunities,
      projects, and ideas. Feel free to get in touch.
    </p>

<form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const contact: Contact = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      await sendContact(contact);

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    }
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={6}
    required
  />

  <button type="submit">
    Send Message
  </button>
</form>

    <div className="contact-links">

      <a href="mailto:anshkhedekar10@gmail.com">
        Email Me
      </a>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ansh-khedekar-1089323b2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
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