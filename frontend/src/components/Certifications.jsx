import React, { useState } from "react";

import nvidia from "../certificates/nvidia.jpg";
import ivis1 from "../certificates/ivis1.jpg";
import ivis2 from "../certificates/ivis2.jpg";
import excel from "../certificates/excel.jpg";
import aws from "../certificates/aws.jpg";
import python from "../certificates/python.jpg";
import reactdjango from "../certificates/reactdjango.jpg";

export default function Certifications() {
  const certifications = [
    {
      name: "LLM Applications with Prompt Engineering",
      issuer: "NVIDIA",
      date: "2024",
      category: "AI/ML",
      image: nvidia,
    },
    {
      name: "Applied Machine Learning – Phase 1",
      issuer: "IVIS Labs",
      date: "2024",
      category: "AI/ML",
      image: ivis1,
    },
    {
      name: "Applied Machine Learning – Phase 2",
      issuer: "IVIS Labs",
      date: "2024",
      category: "AI/ML",
      image: ivis2,
    },
    {
      name: "Excel Fundamentals",
      issuer: "JP Morgan",
      date: "2024",
      category: "Tools",
      image: excel,
    },
    {
      name: "AWS Cloud Simulation Essentials",
      issuer: "JP Morgan",
      date: "2024",
      category: "Cloud",
      image: aws,
    },
    {
      name: "Python for Everybody",
      issuer: "University of Michigan (Coursera)",
      date: "2023",
      category: "Programming",
      image: python,
    },
    {
      name: "React & Django Certification",
      issuer: "Computer Paradise, Mysuru",
      date: "2025",
      category: "Web Dev",
      image: reactdjango,
    },
  ];

  const categoryColor = {
    "AI/ML": "bg-purple-100 text-purple-800",
    Cloud: "bg-blue-100 text-blue-800",
    Programming: "bg-green-100 text-green-800",
    "Web Dev": "bg-cyan-100 text-cyan-800",
    Tools: "bg-yellow-100 text-yellow-800",
  };

  const categoryIcon = {
    "AI/ML": "🧠",
    Cloud: "☁️",
    Programming: "💻",
    "Web Dev": "🌐",
    Tools: "🛠️",
  };

  const categories = ["All", "AI/ML", "Cloud", "Tools", "Programming", "Web Dev"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4">
            Professional training and learning progress across AI/ML, Cloud, Programming, and Web Development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat === "All" ? "All" : `${categoryIcon[cat]} ${cat}`}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((c, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-xl border shadow-md hover:shadow-2xl transition
                         transform hover:-translate-y-2 hover:-rotate-1 cursor-pointer"
              onClick={() => setSelectedCert(c)}
            >
              {/* Thumbnail */}
              {c.image && (
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColor[c.category]
                    }`}
                  >
                    {categoryIcon[c.category]} {c.category}
                  </span>
                  <span className="text-sm text-gray-500">{c.date}</span>
                </div>

                <h3 className="font-semibold text-gray-800 mb-1">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="bg-blue-50 p-8 rounded-2xl border mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Continuous Learning</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Staying updated with the latest advancements in AI, ML, Cloud, and software development through structured
            courses, certifications, and hands-on projects.
          </p>
        </div>
      </div>

      {/* Fullscreen Modal Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full mx-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedCert.image && (
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
            )}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColor[selectedCert.category]
                  }`}
                >
                  {categoryIcon[selectedCert.category]} {selectedCert.category}
                </span>
                <span className="text-sm text-gray-500">{selectedCert.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {selectedCert.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedCert.issuer}</p>
              <button
                onClick={() => setSelectedCert(null)}
                className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
