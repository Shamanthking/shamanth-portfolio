import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              AI/ML Developer · Full-Stack Enthusiast · Problem Solver
            </h3>

            <p className="text-gray-600 mb-4 text-lg">
              I’m a final-year Artificial Intelligence & Machine Learning student passionate 
              about building real-world intelligent systems. I specialize in 
              <span className="font-semibold"> predictive modeling, deep learning, NLP, and full-stack development</span>.
            </p>

            <p className="text-gray-600 mb-4 text-lg">
              As the <span className="font-semibold">Treasurer at IET</span> and 
              <span className="font-semibold"> a YFS volunteer</span>, I’ve led workshops, 
              STEM events, and service-based initiatives—strengthening my communication, 
              leadership, and team collaboration skills.
            </p>

            <p className="text-gray-600 text-lg">
              I enjoy participating in <span className="font-semibold">hackathons, open-source</span>, 
              and building impactful solutions using Python, React, Machine Learning, and cloud technologies.
              I'm actively seeking roles in <span className="font-semibold">AI/ML engineering, data science, and software development.</span>
            </p>
          </div>

          {/* RIGHT SIDE SECTIONS */}
          <div className="space-y-6">

            {/* EDUCATION */}
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h4 className="text-xl font-semibold mb-4">Education</h4>

              <div className="border-l-4 border-blue-500 pl-4 mb-4">
                <h5 className="font-semibold">B.E. – Artificial Intelligence & Machine Learning</h5>
                <p className="text-gray-600">ATME College of Engineering, Mysuru</p>
                <p className="text-gray-500 text-sm">2022 – Present</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-semibold">PUC – PCMC</h5>
                <p className="text-gray-600">Gopalaswamy PU College</p>
                <p className="text-gray-500 text-sm">73.22%</p>
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h4 className="text-xl font-semibold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Kannada</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Hindi</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">English</span>
              </div>
            </div>

            {/* HOBBIES & VOLUNTEERING */}
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h4 className="text-xl font-semibold mb-4">Hobbies & Volunteering</h4>

              <ul className="space-y-3 text-gray-700 text-lg">
                <li>🎨 <span className="font-medium">Painting</span> – Creative expression and sketching anime characters</li>
                <li>🎮 <span className="font-medium">Gaming</span> – Enjoy both online competitive games & offline casual gaming</li>
                <li>✈️ <span className="font-medium">Traveling</span> – Love exploring new places, cultures, and nature</li>
                <li>🤝 <span className="font-medium">Volunteering</span> – Active contributor in YFS initiatives & STEM workshops</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
