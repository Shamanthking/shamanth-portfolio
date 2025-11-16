import React from "react";

export default function Skills() {
  const skills = {
    "Programming": ["Python", "C", "R"],
    "AI / ML": ["TensorFlow", "Keras", "scikit-learn", "OpenCV"],
    "Web Development": ["Django", "HTML", "CSS", "JavaScript"],
    "Databases": ["MySQL","firebase"],
    "Tools": ["Git", "Power BI", "Excel", "Jupyter", "Google Colab"],
    "Core AI": ["Machine Learning","Deep Learning","Computer Vision","NLP"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="bg-white p-6 shadow rounded-xl border">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
