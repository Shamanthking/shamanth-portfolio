import React from "react";

import reactdjango from "../certificates/reactdjango.jpg";
import python from "../certificates/python.jpg";
import aws from "../certificates/aws.jpg";
import excel from "../certificates/excel.jpg";
import nvidia from "../certificates/nvidia.jpg";
import ivis1 from "../certificates/ivis1.jpg";
import ivis2 from "../certificates/ivis2.jpg";

export default function CertificateGallery() {
  const images = [
    { src: nvidia, title: "LLM Applications – NVIDIA" },
    { src: ivis1, title: "Applied ML – IVIS Labs (Phase 1)" },
    { src: ivis2, title: "Applied ML – IVIS Labs (Phase 2)" },
    { src: excel, title: "Excel Fundamentals – JP Morgan" },
    { src: aws, title: "AWS Cloud – JP Morgan" },
    { src: python, title: "Python for Everybody" },
    { src: reactdjango, title: "React & Django" },
  ];

  return (
    <section id="certificate-gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Certificate Gallery</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4">
            All my verified certificates displayed visually
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl shadow border overflow-hidden hover:shadow-xl transition"
            >
              <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-medium text-gray-700">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
