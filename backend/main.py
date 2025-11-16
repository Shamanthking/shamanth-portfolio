from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os

app = FastAPI(title="Shamanth Portfolio API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Contact form model
class ContactRequest(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.get("/")
async def root():
    return {"message": "Shamanth Portfolio API", "status": "running"}

@app.get("/projects")
async def get_projects():
    projects = [
        {
            "id": 1,
            "title": "Disease Prediction & Medical Recommendation System",
            "description": "Built an ensemble of DL + ML model (MLP+RESNET, RF, XGBoost) for symptom-based disease prediction with personalized test/medication/diet recommendations.",
            "technologies": ["Python", "TensorFlow", "Deep Learning", "MLP", "RESNET", "Random Forest", "XGBoost"],
            "status": "In Progress",
            "period": "Jul 2025 – Present",
            "category": "AI/ML"
        },
        {
            "id": 2,
            "title": "Hospital Management System", 
            "description": "Developed a secure web app (Node.js + MySQL) for patient records, scheduling, and admin dashboards with authentication.",
            "technologies": ["Node.js", "MySQL", "JavaScript", "HTML/CSS", "Authentication"],
            "status": "In Progress",
            "period": "Aug 2023 – Present",
            "category": "Full-Stack"
        },
        {
            "id": 3,
            "title": "Car Price Prediction",
            "description": "Implemented ML Model XGBoost, CatBoost, RF on Kaggle dataset; achieved R² = 0.94 accuracy in price prediction.",
            "technologies": ["Python", "XGBoost", "CatBoost", "Random Forest", "Scikit-learn"],
            "status": "In Progress", 
            "period": "Mar 2024 – Present",
            "category": "Data Science"
        }
    ]
    return projects

@app.post("/contact")
async def contact(request: ContactRequest):
    # Here you would typically send an email or save to database
    print(f"Contact request from: {request.name} ({request.email})")
    print(f"Subject: {request.subject}")
    print(f"Message: {request.message}")
    
    return {
        "status": "success", 
        "message": "Thank you for your message! I'll get back to you soon."
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "portfolio-api"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)