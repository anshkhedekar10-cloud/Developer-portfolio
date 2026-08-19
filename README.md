# 🚀 Developer Portfolio

A modern full-stack developer portfolio built to showcase my software engineering projects, technical skills, education, certifications, and experience.

The project uses a React + TypeScript frontend, FastAPI backend, SQLite database, Docker, and GitHub Actions CI/CD.

---

## 🌐 Project Overview

This portfolio is designed as a production-style full-stack application rather than a simple static website.

It provides:

- Responsive developer portfolio UI
- Projects dynamically loaded from the backend API
- Contact form with database persistence
- REST API built with FastAPI
- SQLite database
- Dockerized frontend and backend
- Automated CI/CD using GitHub Actions
- Docker image publishing through GitHub Container Registry

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Axios
- CSS

### Backend

- Python
- FastAPI
- SQLAlchemy
- Uvicorn

### Database

- SQLite

### DevOps

- Docker
- Docker Compose / Docker containers
- Git
- GitHub
- GitHub Actions
- GitHub Container Registry

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      User / Browser  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ React + TypeScript   │
                    │       Frontend       │
                    └──────────┬───────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌──────────────────────┐
                    │      FastAPI         │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       SQLite         │
                    │      Database        │
                    └──────────────────────┘

                         CI/CD Pipeline

                    GitHub Repository
                            │
                            ▼
                     GitHub Actions
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        Frontend Build  Backend Check  Docker Build
                                            │
                                            ▼
                                   GitHub Container
                                      Registry