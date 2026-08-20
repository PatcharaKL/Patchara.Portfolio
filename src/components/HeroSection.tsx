"use client"
import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import useScrollToSection from "@/hooks/useScrollToSection";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-12 md:pt-0"
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Role badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Currently building KInfra Provisioning Center @ KBTG
          </div>

          {/* Avatar */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 animate-pulse opacity-30 blur-md" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-blue-500/40">
              <Image
                src="/images/profile.jpeg"
                alt="Patchara Kleebbua"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-100">
            Platform Engineer
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-4">
            Building internal developer platforms and infrastructure automation
            in a banking environment
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I&apos;m Patchara — sole engineer and product owner of KInfra
            Provisioning Center, an internal developer platform at KBTG that
            turns a multi-day, multi-system manual provisioning process into
            self-service infrastructure requests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
            Let&apos;s Connect
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a
            target="_blank"
            href="https://github.com/PatcharaKL"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/patchara-kleebbua"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:patchara.pck@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-slate-400" />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
