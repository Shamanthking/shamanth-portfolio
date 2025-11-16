import React from "react";

import hacksprint from "../hackcertificates/hacksprint.jpg";
import techtonic from "../hackcertificates/techtonic.jpg";
import symbiont from "../hackcertificates/symbiont.jpg";
import anveshan from "../hackcertificates/anveshan.png";

export default function HackCertificateGallery() {

  const certificates = [
    { src: hacksprint, title: "HackSprint 2024 – PES College (National)" },
    { src: techtonic, title: "TechTonic 2024 – Dayananda Sagar College" },
    { src: symbiont, title: "SYMBIONT 2025 – VVCE, Mysuru" },
    { src: anveshan, title: "Anveshan 2025 – SJCE Mysuru" },
  ];

  return (
    <section id="hack-certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Hackathon Certificates</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4">Verified achievements from national & inter-college hackathons</p>
        </div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow hover:shadow-xl transition overflow-hidden"
            >
              <img src={cert.src} alt={cert.title} className="w-full h-44 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-medium text-gray-700">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
