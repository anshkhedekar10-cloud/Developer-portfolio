import os
import smtplib

from email.message import EmailMessage

from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import engine, Base, SessionLocal
from .models import Project, ContactMessage

class ProjectCreate(BaseModel):
    title: str
    description: str
    technologies: str

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Developer Portfolio API")


Base.metadata.create_all(bind=engine)


# CORS
# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:8080",
        "https://developer-portfolio-xndo.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Database session
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


# Home API
@app.get("/")
def root():
    return {
        "message": "Developer Portfolio API is running"
    }


# Profile API
@app.get("/api/profile")
def get_profile():
    return {
        "name": "Ansh",
        "role": "Software Engineer",
        "description": (
            "I build scalable web applications, APIs, "
            "and cloud-ready software solutions."
        ),
        "skills": [
            "Python",
            "React",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "Git",
            "CI/CD"
        ]
    }


# Projects API
@app.get("/api/projects")
def get_projects(db: Session = Depends(get_db)):

    projects = db.query(Project).all()

    return [
        {
            "id": project.id,
            "title": project.title,
            "description": project.description,
            "technologies": project.technologies.split(",")
        }
        for project in projects
    ]

# Add initial projects to database
def add_initial_projects():
    db = SessionLocal()

    try:
        existing_projects = db.query(Project).count()

        if existing_projects == 0:

            projects = [
                Project(
                    title="Developer Portfolio Platform",
                    description="A full-stack developer portfolio built with React, TypeScript, FastAPI, and SQLite.",
                    technologies="React,TypeScript,FastAPI,SQLite"
                ),

                Project(
                    title="Medicine Delivery Wesite",
                    description="A REST API for managing users, tasks, priorities, and deadlines.",
                    technologies="Python,FastAPI,SQLite,REST API"
                ),

                Project(
                    title="Sign Language Recognition",
                    description="A containerized application with automated testing, building, and deployment.",
                    technologies="Docker,GitHub Actions,Linux,CI/CD"
                )
            ]

            db.add_all(projects)
            db.commit()

    finally:
        db.close()


add_initial_projects()

@app.post("/api/projects")
def create_project(
    project: ProjectCreate,
    db: Session = Depends(get_db)
):
    new_project = Project(
        title=project.title,
        description=project.description,
        technologies=project.technologies
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return {
        "id": new_project.id,
        "title": new_project.title,
        "description": new_project.description,
        "technologies": new_project.technologies.split(",")
    }
@app.put("/api/projects/{project_id}")
def update_project(
    project_id: int,
    project: ProjectCreate,
    db: Session = Depends(get_db)
):
    existing_project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )

    if existing_project is None:
        return {
            "error": "Project not found"
        }

    existing_project.title = project.title
    existing_project.description = project.description
    existing_project.technologies = project.technologies

    db.commit()
    db.refresh(existing_project)

    return {
        "id": existing_project.id,
        "title": existing_project.title,
        "description": existing_project.description,
        "technologies": existing_project.technologies.split(",")
    }


@app.delete("/api/projects/{project_id}")
def delete_project(
    project_id: int,
    db: Session = Depends(get_db)
):
    project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )

    if project is None:
        return {
            "error": "Project not found"
        }

    db.delete(project)
    db.commit()

    return {
        "message": "Project deleted successfully",
        "id": project_id
    }

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/contact")
def create_contact(contact: ContactCreate):
    db = SessionLocal()

    try:
        # Save message to database
        new_message = ContactMessage(
            name=contact.name,
            email=contact.email,
            message=contact.message
        )

        db.add(new_message)
        db.commit()
        db.refresh(new_message)

        # Get Gmail credentials from Render environment variables
        gmail_username = os.getenv("GMAIL_USERNAME")
        gmail_app_password = os.getenv("GMAIL_APP_PASSWORD")

        if not gmail_username or not gmail_app_password:
            raise HTTPException(
                status_code=500,
                detail="Email configuration is missing"
            )

        # Create email
        email = EmailMessage()

        email["Subject"] = f"New Portfolio Contact from {contact.name}"
        email["From"] = gmail_username
        email["To"] = gmail_username
        email["Reply-To"] = contact.email

        email.set_content(
            f"""
You received a new message from your developer portfolio.

Name: {contact.name}
Email: {contact.email}

Message:
{contact.message}

------------------------------
Developer Portfolio Contact Form
"""
        )

        # Send email through Gmail SMTP
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(gmail_username, gmail_app_password)
            smtp.send_message(email)

        return {
            "message": "Contact message saved and email sent successfully",
            "id": new_message.id
        }

    except HTTPException:
        db.rollback()
        raise

    except Exception as error:
        db.rollback()
        print("Contact email error:", error)

        raise HTTPException(
            status_code=500,
            detail="Message was saved, but email notification failed"
        )

    finally:
        db.close()