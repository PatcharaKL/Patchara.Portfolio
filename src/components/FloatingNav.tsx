import React from "react";
import useScrollToSection from "@/hooks/useScrollToSection";
import { Code, Terminal, Home, User, Briefcase, Phone } from "lucide-react";
import useScrollPosition from "@/hooks/useScrollPosition";

const FloatingNav = (activeSection: string) => {
  const { scrollToSection } = useScrollToSection();
  const scrollY = useScrollPosition();
  return (
    <>
      <nav
        className={`fixed right-12 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
          scrollY > 100
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4"
        } hidden md:block`}
      >
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-full py-4 px-3 shadow-2xl">
          <div className="flex flex-col items-center space-y-4">
            {[
              { icon: Home, section: "hero", label: "Home" },
              { icon: User, section: "about", label: "About" },
              { icon: Code, section: "skills", label: "Skills" },
              { icon: Briefcase, section: "projects", label: "Projects" },
              { icon: Terminal, section: "experience", label: "Experience" },
              { icon: Phone, section: "contact", label: "Contact" },
            ].map(({ icon: Icon, section, label }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`group relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  activeSection === section
                    ? "bg-blue-500/20 text-blue-400 scale-110"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
                title={label}
              >
                <Icon size={18} />
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-800 text-slate-200 px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
                  {label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 md:hidden ${
          scrollY > 100
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {[
              { icon: Home, section: "hero", label: "Home" },
              { icon: User, section: "about", label: "About" },
              { icon: Code, section: "skills", label: "Skills" },
              { icon: Briefcase, section: "projects", label: "Projects" },
              { icon: Terminal, section: "experience", label: "Experience" },
              { icon: Phone, section: "contact", label: "Contact" },
            ].map(({ icon: Icon, section, label }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`group relative p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                  activeSection === section
                    ? "bg-blue-500/20 text-blue-400 scale-110"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
                title={label}
              >
                <Icon size={16} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-slate-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
