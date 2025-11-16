import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaHandsHelping,
  FaCalendar,
  FaUsers,
  FaFilter,
  FaTimes,
  FaTrophy,
  FaCode,
  FaMedal,
} from "react-icons/fa";

import hacksprint from "../hackcertificates/hacksprint.jpg";
import techtonic from "../hackcertificates/techtonic.jpg";
import symbiont from "../hackcertificates/symbiont.jpg";
import anveshan from "../hackcertificates/anveshan.png";

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const stats = [
    { label: "ML / Software Projects", value: 8 },
    { label: "Certifications", value: 10 },
    { label: "Hackathons", value: 4 },
    { label: "Leadership & Volunteering Roles", value: 2 },
  ];

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setAnimatedStats(
        stats.map((s) => Math.floor(s.value * progress))
      );
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []); // run once

  const experiences = [
    {
      icon: <FaBriefcase className="text-blue-600 text-xl" />,
      title: "Treasurer",
      organization: "IET Local Chapter, Mysuru",
      period: "Feb 2024 – Present",
      description:
        "Managing budgets, coordinating technical events, and collaborating with faculty & industry professionals.",
      points: [
        "Handled event budgets and resource allocation",
        "Organized workshops and seminars with 100+ attendees",
        "Worked with teams across departments and clubs",
      ],
    },
    {
      icon: <FaHandsHelping className="text-green-600 text-xl" />,
      title: "Volunteer",
      organization: "Youth for Seva (YFS), Mysuru",
      period: "Dec 2023 – Present",
      description:
        "Supporting education and social impact initiatives through community-driven programs.",
      points: [
        "Conducted STEM activities for school students",
        "Designed simple, engaging learning modules",
        "Participated in outreach and awareness programs",
      ],
    },
  ];

  const hackathons = [
    {
      name: "HackSprint 2024",
      location: "PES College (National)",
      type: "National",
      icon: <FaTrophy className="text-yellow-300 text-2xl mb-2" />,
      cert: hacksprint,
    },
    {
      name: "TechTonic 2024",
      location: "Dayananda Sagar College",
      type: "Intercollege",
      icon: <FaCode className="text-cyan-300 text-2xl mb-2" />,
      cert: techtonic,
    },
    {
      name: "SYMBIONT 2025",
      location: "VVCE, Mysuru",
      type: "Intercollege",
      icon: <FaMedal className="text-orange-300 text-2xl mb-2" />,
      cert: symbiont,
    },
    {
      name: "Anveshan 2025",
      location: "SJCE Mysuru",
      type: "Intercollege",
      icon: <FaCode className="text-pink-300 text-2xl mb-2" />,
      cert: anveshan,
    },
  ];

  const filters = ["All", "National", "Intercollege"];

  const filteredHackathons =
    activeFilter === "All"
      ? hackathons
      : hackathons.filter((h) => h.type === activeFilter);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
          <p className="mt-4 text-gray-600">
            A blend of technical experience, leadership roles, hackathon exposure, and community work.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl border p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {animatedStats[i]}+
              </p>
              <p className="text-gray-700 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Experience & Volunteering Timeline
          </h3>
          <div className="relative border-l-2 border-blue-100 pl-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 relative">
                <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-[9px] top-1.5" />
                <div className="bg-gray-50 p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                  <div className="flex items-center mb-2">
                    {exp.icon}
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 text-sm">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaCalendar className="mr-2" />
                    {exp.period}
                  </div>
                  <p className="text-gray-600 mb-3">{exp.description}</p>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {exp.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HACKATHON SECTION */}
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-purple-700 text-white p-8 rounded-2xl shadow-xl mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <FaUsers className="text-3xl" />
              <div>
                <h3 className="text-2xl font-bold">Hackathon Participation</h3>
                <p className="text-blue-100 text-sm">
                  Hands-on experience in problem-solving, teamwork, and rapid prototyping.
                </p>
              </div>
            </div>

            {/* FILTERS */}
            <div className="flex items-center gap-2">
              <FaFilter className="text-xl" />
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition
                    ${
                      activeFilter === f
                        ? "bg-white text-blue-700 border-white shadow"
                        : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* HACKATHON CARDS */}
          <div className="grid md:grid-cols-4 gap-6">
            {filteredHackathons.map((h, i) => (
              <div
                key={i}
                onClick={() => setSelectedHackathon(h)}
                className="bg-white/15 rounded-xl p-5 text-center backdrop-blur-md border border-white/30
                           cursor-pointer transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg"
              >
                {h.icon}
                <h4 className="text-lg font-semibold">{h.name}</h4>
                <p className="text-blue-100 text-sm mb-2">{h.location}</p>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {h.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP VIEWER WITH CERTIFICATE */}
      {selectedHackathon && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedHackathon(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full mx-4 overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHackathon(null)}
              className="absolute top-3 right-3 text-gray-200 bg-black/40 hover:bg-black/70 rounded-full p-2 z-10"
            >
              <FaTimes className="text-lg" />
            </button>

            {selectedHackathon.cert && (
              <img
                src={selectedHackathon.cert}
                alt={selectedHackathon.name}
                className="w-full max-h-[60vh] object-contain bg-black"
              />
            )}

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {selectedHackathon.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {selectedHackathon.location}
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                  {selectedHackathon.type}
                </span>
              </div>

              <p className="text-gray-700 text-sm mb-4">
                Participated in this hackathon focusing on building innovative
                solutions using AI/ML, web development, and problem-solving,
                collaborating with diverse teammates under time constraints.
              </p>

              <div className="flex gap-3">
                <a
                  href={selectedHackathon.cert}
                  download
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                >
                  Download Certificate
                </a>
                <button
                  onClick={() => setSelectedHackathon(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
