import React from "react";
import { FaGithub, FaExternalLinkAlt, FaHospital, FaCode, FaChartLine } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      icon: <FaHospital className="text-3xl text-green-600" />,
      title: "Disease Prediction & Medical Recommendation System",
      description:
        "Ensemble of Deep Learning + Machine Learning models (MLP, ResNet, RF, XGBoost) for symptom-based disease prediction with personalized test, medication and diet suggestions.",
      technologies: ["Python", "TensorFlow", "MLP", "ResNet", "Random Forest", "XGBoost"],
      status: "In Progress",
      period: "Jul 2025 – Present",
      category: "AI/ML",
    },
    {
      icon: <FaCode className="text-3xl text-blue-600" />,
      title: "Hospital Management System",
      description:
        "A secure management platform using Node.js + MySQL for patient data, scheduling, user authentication, and admin dashboards.",
      technologies: ["Node.js", "JavaScript", "MySQL", "Auth"],
      status: "In Progress",
      period: "Aug 2023 – Present",
      category: "Full-Stack",
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-600" />,
      title: "Car Price Prediction",
      description:
        "ML project using XGBoost, CatBoost, and Random Forest. Achieved 0.94 R² accuracy on a real-world Kaggle dataset.",
      technologies: ["Python", "XGBoost", "CatBoost", "Random Forest"],
      status: "Completed",
      period: "Mar 2024 – Oct 2024",
      category: "Data Science",
    },
  ];

  const statusColor = (s) =>
    s === "In Progress" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800";

  const categoryColor = {
    "AI/ML": "bg-purple-100 text-purple-800",
    "Full-Stack": "bg-blue-100 text-blue-800",
    "Data Science": "bg-green-100 text-green-800",
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-xl border hover:shadow-xl transition">

              <div className="flex items-start mb-4">
                {project.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${categoryColor[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600">{project.description}</p>

              <p className="mt-3 text-sm text-gray-500">{project.period}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 text-blue-600">
                <button className="flex items-center gap-2 hover:text-blue-800 transition">
                  <FaGithub /> Code
                </button>
                <button className="flex items-center gap-2 text-green-700 hover:text-green-900 transition">
                  <FaExternalLinkAlt /> Demo
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
