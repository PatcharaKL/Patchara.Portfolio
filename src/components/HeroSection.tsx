import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import useScrollToSection from "@/hooks/useScrollToSection";
const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center text-4xl font-bold text-blue-400 border border-blue-500/30 backdrop-blur-sm animate-glow">
            P
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-100 animate-fade-in-up">
            Full-Stack & Infrastructure Engineer
          </h1>
          <p
            className="text-xl md:text-2xl text-blue-300 mb-2 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Building applications and automations that power ideas into reality
          </p>
          <p
            className="text-lg text-slate-400 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            I{"'"}m Patchara, a software engineer who bridges web development
            and infrastructure automation. Currently working across dual domains
            at MFEC and KBTG, I focus on creating scalable solutions and
            efficient workflows.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800/50 transition-all duration-300 font-medium hover:border-blue-500 transform hover:scale-105"
          >
            Let{"'"}s Connect
          </button>
        </div>

        <div
          className="flex justify-center space-x-6 animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <a
            href="https://github.com/PatcharaKL"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your-email@domain.com"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
