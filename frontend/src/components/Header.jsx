import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
          Shamanth M
        </h1>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400">Certifications</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </nav>

        {/* THEME TOGGLE */}
        <ThemeToggle />
      </div>
    </header>
  );
}
