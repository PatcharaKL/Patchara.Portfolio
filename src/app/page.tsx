"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Server,
  Database,
  Monitor,
  Settings,
  GitBranch,
  Terminal,
  Cloud,
  Home,
  User,
  Briefcase,
  Phone,
  Smartphone,
  Globe2,
  Palette,
  HardDrive,
  Container,
  FileCode,
} from "lucide-react";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special handling for contact section at bottom of page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skillIcons = {
    "React.js": Code,
    "Next.js": Globe2,
    "React Native": Smartphone,
    "Tailwind CSS": Palette,
    TypeScript: FileCode,
    "Go (Golang)": Code,
    Python: Code,
    "Node.js": Server,
    "Express.js": Server,
    FastAPI: Server,
    PostgreSQL: Database,
    MySQL: Database,
    "Database Design": HardDrive,
    "VMware vRO/vRA": Cloud,
    Docker: Container,
    "GitLab CI/CD": GitBranch,
    Jenkins: Settings,
    "GitHub Actions": GitBranch,
    Git: GitBranch,
    Linux: Terminal,
    "Proxmox VE": Server,
    ServiceNow: Settings,
    "Container Orchestration": Container,
  };

  const skills = {
    frontend: {
      title: "Frontend",
      icon: Monitor,
      color: "text-blue-400",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    backend: {
      title: "Backend",
      icon: Server,
      color: "text-green-400",
      skills: ["Go (Golang)", "Python", "Node.js", "Express.js", "FastAPI"],
    },
    database: {
      title: "Database",
      icon: Database,
      color: "text-purple-400",
      skills: ["PostgreSQL", "MySQL", "Database Design"],
    },
    devops: {
      title: "DevOps & Infrastructure",
      icon: Cloud,
      color: "text-orange-400",
      skills: [
        "VMware vRO/vRA",
        "Docker",
        "GitLab CI/CD",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: Settings,
      color: "text-cyan-400",
      skills: [
        "Git",
        "Linux",
        "Proxmox VE",
        "ServiceNow",
        "Container Orchestration",
      ],
    },
  };

  const projects = [
    {
      title: "TeleHealth Platform",
      category: "Healthcare Technology",
      description:
        "Comprehensive telemedicine platform connecting patients with healthcare providers through video consultations and prescription management.",
      tech: ["Next.js", "Tailwind CSS", "WebRTC", "RESTful APIs"],
      status: "Production",
      role: "Frontend Developer",
      highlights: [
        "Built responsive web interface for cross-device compatibility",
        "Implemented real-time video consultation functionality",
        "Created intuitive dashboards for patients and providers",
        "Currently serving users across Thailand",
      ],
    },
    {
      title: "TicketBox - Enterprise Workflow Management",
      category: "Enterprise Software",
      description:
        "Comprehensive request management and workflow automation system designed as a ServiceNow alternative for enterprise clients.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Enterprise APIs"],
      status: "Active Development",
      role: "Full-Stack Developer",
      highlights: [
        "Leading full-stack development for enterprise clients",
        "Implementing complex workflow automation features",
        "Designing scalable architecture for large-scale usage",
        "Streamlining operational workflows and reducing manual processes",
      ],
    },
    {
      title: "Infrastructure Automation at KBTG",
      category: "Enterprise Infrastructure",
      description:
        "VMware vRO workflow development and ServiceNow integration for automated infrastructure provisioning in banking environment.",
      tech: [
        "VMware vRO/vRA",
        "ServiceNow API",
        "JavaScript",
        "Enterprise Integration",
      ],
      status: "Production",
      role: "Infrastructure Automation Engineer",
      highlights: [
        "Automated complex infrastructure provisioning workflows",
        "Integrated ServiceNow with VMware infrastructure automation",
        "Reduced manual deployment processes significantly",
        "Enhanced operational efficiency in banking-grade environment",
      ],
    },
    {
      title: "Personal Homelab Infrastructure",
      category: "Learning & Development",
      description:
        "Comprehensive homelab using Proxmox VE for exploring technologies and hosting self-managed services.",
      tech: ["Proxmox VE", "Docker", "Pi-hole", "Caddy", "Various Services"],
      status: "Ongoing",
      role: "System Administrator",
      highlights: [
        "Managing virtualized infrastructure with multiple VMs and containers",
        "Implementing network security and service orchestration",
        "Testing ground for evaluating new technologies",
        "Hands-on experience with enterprise virtualization",
      ],
    },
  ];

  const experience = [
    {
      company: "MFEC Public Company Limited",
      role: "Software Engineer",
      period: "2023 - Present",
      location: "Bangkok, Thailand",
      description:
        "Leading full-stack development of enterprise applications and collaborating on complex client projects.",
      achievements: [
        "Lead development of TicketBox workflow management system",
        "Collaborate with cross-functional teams on enterprise solutions",
        "Mentor junior developers and contribute to technical architecture",
        "Build scalable applications for large-scale enterprise clients",
      ],
    },
    {
      company: "KBTG (via MFEC)",
      role: "Infrastructure Automation Engineer",
      period: "2023 - Present",
      location: "Bangkok, Thailand",
      description:
        "Specializing in VMware vRO/vRA automation and ServiceNow integration for banking infrastructure.",
      achievements: [
        "Design and implement infrastructure automation workflows",
        "Develop ServiceNow integrations for seamless automation",
        "Create Infrastructure as Code solutions for banking environment",
        "Improve operational efficiency through intelligent automation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 opacity-90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Right Side Navigation */}
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

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div
          className="max-w-4xl mx-auto px-4"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg mb-6 flex items-center justify-center text-6xl font-bold text-slate-500 border border-slate-700 backdrop-blur-sm">
                Photo
              </div>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed animate-fade-in-right">
              <p>
                I{"'"}m a software engineer with experience spanning full-stack
                development and infrastructure automation. My current role at
                MFEC allows me to work on two distinct yet complementary areas:
                developing web applications like TicketBox, and contributing to
                infrastructure automation at KBTG using VMware vRO.
              </p>
              <p>
                This dual exposure has given me valuable insights into both
                application development and the enterprise infrastructure that
                supports it. I{"'"}ve found that understanding both perspectives
                helps me build more robust solutions and collaborate more
                effectively with cross-functional teams.
              </p>
              <p>
                Outside of professional work, I maintain a personal homelab
                using Proxmox VE where I experiment with various technologies
                and self-hosted services. This hands-on exploration helps me
                stay current with industry trends and evaluate new tools before
                applying them professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 md:pl-20">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillData], index) => {
              const IconComponent = skillData.icon;
              return (
                <div
                  key={category}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-lg bg-slate-700/50 mr-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${skillData.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {skillData.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skillData.skills.map((skill, skillIndex) => {
                      const SkillIcon =
                        skillIcons[skill as keyof typeof skillIcons] || Code;
                      return (
                        <div
                          key={skill}
                          className="text-slate-300 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:translate-x-1 animate-fade-in border-l-2 border-transparent hover:border-blue-400/50"
                          style={{
                            animationDelay: `${
                              index * 100 + skillIndex * 50
                            }ms`,
                          }}
                        >
                          <span className="flex items-center">
                            <SkillIcon
                              className={`w-4 h-4 ${skillData.color} mr-3 opacity-80`}
                            />
                            <div
                              className={`w-2 h-2 rounded-full ${skillData.color.replace(
                                "text-",
                                "bg-"
                              )} mr-3 opacity-60`}
                            ></div>
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 md:pl-20">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {project.category}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-slate-200 mb-2">
                    Key Highlights:
                  </p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">
                    Role: {project.role}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 md:pl-20">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {job.role}
                    </h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                    <p className="text-sm text-slate-400">{job.location}</p>
                  </div>
                  <span className="text-sm text-slate-400 mt-2 md:mt-0 px-3 py-1 bg-slate-700/50 rounded">
                    {job.period}
                  </span>
                </div>

                <p className="text-slate-300 mb-4">{job.description}</p>

                <div>
                  <h4 className="font-medium text-slate-200 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">
            Let{"'"}s Connect
          </h2>
          <p
            className="text-slate-300 max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            I{"'"}m interested in connecting with professionals, teams, and
            organizations working on meaningful technology challenges. Whether
            you{"'"}re looking for technical expertise, collaboration
            opportunities, or simply want to discuss emerging technologies, I
            {"'"}d welcome the conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                link: "mailto:your-email@domain.com",
                text: "your-email@domain.com",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                link: "#",
                text: "linkedin.com/in/your-profile",
              },
              {
                icon: Github,
                title: "GitHub",
                link: "https://github.com/PatcharaKL",
                text: "github.com/PatcharaKL",
              },
            ].map((contact, index) => (
              <div
                key={contact.title}
                className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <contact.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2 text-slate-100">
                  {contact.title}
                </h3>
                <a
                  href={contact.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="mailto:your-email@domain.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium inline-flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >
              <Mail size={16} className="mr-2" />
              Get in Touch
            </a>
            <button className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800/50 hover:border-blue-500 transition-all duration-300 font-medium inline-flex items-center justify-center transform hover:scale-105">
              <Download size={16} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm text-slate-400 py-8 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>
            &copy; 2024 Patchara Kleebbua. Thank you for taking the time to
            learn about my work.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
