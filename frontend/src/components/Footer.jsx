import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold mb-4">Shamanth M</h3>
        <p className="text-gray-400 max-w-lg mx-auto mb-6">
          AI/ML Developer & Full-Stack Engineer passionate about building intelligent solutions.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="https://linkedin.com/in/shamanth-m" target="_blank" className="hover:text-blue-400">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/shamanth2626" target="_blank" className="hover:text-white">
            <FaGithub size={28} />
          </a>
          <a href="mailto:shamanth2626@gmail.com" className="hover:text-red-400">
            <FaEnvelope size={28} />
          </a>
        </div>

        <div className="border-t border-gray-800 pt-6 text-gray-500">
          <p className="flex justify-center items-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Shamanth M
          </p>
          <p className="text-sm mt-2">© 2024 All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
