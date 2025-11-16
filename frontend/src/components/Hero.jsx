import React from "react";
import AvatarInteractive from "./AvatarInteractive";

export default function Hero() {
  return (
    <section 
  id="home" 
  className="min-h-screen flex items-center justify-center 
             bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 
             dark:from-gray-900 dark:via-black dark:to-black 
             text-white pt-24">



      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-6xl font-bold mb-4">👋 Hello,</h1>

            <h1 className="text-6xl font-bold mb-4">Shamanth M</h1>
            <p className="text-xl text-blue-200 mb-2">AI/ML Developer & Full-Stack Engineer</p>
            <p className="text-lg text-blue-100 max-w-2xl mb-8">
              Final-year AI & ML student building intelligent solutions and smart applications.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start mb-10">
              <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold">
                Get In Touch
              </a>
              <a href="#projects"
                className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900">
                View Projects
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <AvatarInteractive />
          </div>

        </div>
      </div>
    </section>
  );
}
