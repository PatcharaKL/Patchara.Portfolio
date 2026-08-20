"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Monitor,
  FileCode,
  Shield,
} from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Homepage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    languages: {
      title: "Languages",
      icon: FileCode,
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", note: "strongest" },
        { name: "Go", note: "solid" },
        { name: "Python", note: "" },
      ],
    },
    backend: {
      title: "Backend & Data",
      icon: Database,
      color: "text-green-400",
      skills: [
        { name: "PostgreSQL", note: "solid" },
        { name: "REST API design", note: "" },
        { name: "OpenAPI", note: "" },
      ],
    },
    infrastructure: {
      title: "Infrastructure",
      icon: Server,
      color: "text-orange-400",
      skills: [
        { name: "VMware vRO/vRA", note: "strongest" },
        { name: "OpenShift", note: "working knowledge" },
        { name: "Docker", note: "" },
        { name: "ServiceNow", note: "" },
        { name: "Terraform", note: "beginner" },
        { name: "Proxmox VE", note: "" },
      ],
    },
    platform: {
      title: "Platform",
      icon: Shield,
      color: "text-purple-400",
      skills: [
        { name: "OpenAPI", note: "" },
        { name: "Task orchestration", note: "" },
        { name: "Vendor abstraction layers", note: "" },
        { name: "Internal developer platforms", note: "" },
      ],
    },
    frontend: {
      title: "Frontend",
      icon: Monitor,
      color: "text-cyan-400",
      skills: [
        { name: "React.js", note: "" },
        { name: "Next.js", note: "" },
        { name: "TypeScript", note: "" },
        { name: "Tailwind CSS", note: "" },
      ],
    },
  };

  const projects = [
    {
      featured: true,
      title: "KInfra Provisioning Center",
      category: "Internal Developer Platform",
      status: "In development · launching December",
      statusColor: "text-blue-400 bg-blue-500/20 border-blue-500/30",
      description:
        "Engineer and product owner for an internal developer platform that replaces a manual ServiceNow to Excel to vRA relay, which previously took days per request, with a self-service system for VM and OpenShift namespace provisioning.",
      highlights: [
        "Self-service request platform supporting multiple resources in one submission, with templates for clustered databases and clustered OpenShift namespaces",
        "Admin plane for infrastructure standards: network schemas, versioned software catalog, OS mount and disk standards, and default agent install rules",
        "Architected the vendor abstraction layer, task orchestration engine, and Resource Schema Registry",
        "On approval, the RITM is created, tasks are generated and run automatically, through to a ready-to-use VM or namespace",
      ],
      tech: ["Go", "PostgreSQL", "OpenShift", "VMware vRO"],
      role: "Platform Owner and Engineer",
    },
    {
      featured: false,
      title: "Cross-Team Infrastructure Automation",
      category: "Banking Infrastructure",
      status: "Production",
      statusColor: "text-green-400 bg-green-500/20 border-green-500/30",
      description:
        "Automated infrastructure workflows for several teams: Network (F5 load balancing), PID (CyberArk), and Platform (Linux and Windows decommissioning). Built in VMware vRO with JavaScript, pushed well past normal vendor usage: an async task queue with worker execution, lock and release semantics for concurrent runs, and configuration elements used as a persistence layer. Those teams now handle exceptions rather than running the work by hand.",
      highlights: [
        "Cut manual provisioning and decommissioning effort by an estimated 90%",
        "Automated VM lifecycle tasks including IP reservation, backup jobs, patching, network configuration, and disk and filesystem setup",
        "Built error handling and handoff so anything outside the automated path routes to the team that owns it",
        "Day-2 catalog for software installation after provisioning",
      ],
      tech: ["JavaScript", "VMware vRO/vRA", "ServiceNow API", "Async task queues"],
      role: "Automation Engineer",
    },
    {
      featured: false,
      title: "Personal Homelab",
      category: "Infrastructure · Ongoing",
      status: "Ongoing",
      statusColor: "text-slate-400 bg-slate-500/20 border-slate-500/30",
      description:
        "Proxmox VE homelab used for hosting personal services and for trying infrastructure-as-code and platform tooling hands-on.",
      highlights: [
        "Immich, Pi-hole, Plane, K3s, Caddy, Tailscale - all self-hosted",
        "Testing ground for Terraform, K3s, and container tooling",
      ],
      tech: ["Proxmox VE", "K3s", "Docker", "Terraform", "Caddy", "Tailscale"],
      role: "System Administrator",
    },
    {
      featured: false,
      title: "TicketBox",
      category: "Enterprise Software",
      status: "Active Development",
      statusColor: "text-green-400 bg-green-500/20 border-green-500/30",
      description:
        "Request management and workflow automation system built as a ServiceNow alternative for enterprise clients.",
      highlights: [
        "Leading full-stack development for enterprise clients",
        "Implementing complex workflow automation features",
      ],
      tech: ["React.js", "Node.js", "PostgreSQL"],
      role: "Full-Stack Developer",
    },
    {
      featured: false,
      title: "TeleHealth Platform",
      category: "Healthcare Technology",
      status: "Production",
      statusColor: "text-green-400 bg-green-500/20 border-green-500/30",
      description:
        "Telemedicine platform connecting patients with healthcare providers through video consultations and prescription management.",
      highlights: [
        "Built responsive web interface for cross-device compatibility",
        "Implemented real-time video consultation functionality",
      ],
      tech: ["Next.js", "Tailwind CSS", "WebRTC", "RESTful APIs"],
      role: "Frontend Developer",
    },
  ];

  const experience = [
    {
      company: "MFEC Public Company Limited",
      companyDetail: "on-site at KBTG",
      role: "Software Engineer",
      project: "",
      period: "Mar 2023 – Present",
      location: "Bangkok, Thailand",
      description:
        "Engineer and product owner for an internal developer platform covering VM and OpenShift namespace provisioning, decommissioning, and infrastructure automation across several teams.",
      achievements: [
        "Own the architecture decisions across the platform: vendor abstraction layer, task orchestration engine, Resource Schema Registry",
        "Gather requirements directly from stakeholders, run daily coordination meetings, and direct backlog work for two other engineers without formal management authority",
        "Automated provisioning and decommissioning workflows for the Network, PID, and Platform teams, cutting manual effort by an estimated 90%",
        "Set up the team's engineering practices: spec-driven development, mandatory merge request review before merge, and CI running go vet, golangci-lint, go test -race, and go build",
        "Made the case internally for moving from vendor workflow tooling to a purpose-built platform, and took ownership of the resulting project",
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingNav activeSection={activeSection} />
      <HeroSection />

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="about"
        className="py-20 relative"
      >
        <div
          className="max-w-4xl mx-auto px-4"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden ring-1 ring-slate-700">
                <Image
                  src="/images/profile.jpeg"
                  alt="Patchara Kleebbua"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating tag */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {["Platform Engineering", "Infrastructure Automation", "Go · JavaScript"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-slate-800/60 border border-slate-700/50 rounded-full text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I work on infrastructure automation and internal tooling. At
                KBTG (via MFEC) I own KInfra Provisioning Center end to end -
                from requirements gathering to the architecture decisions to the
                Go services and admin plane that run it.
              </p>

              {/* Highlighted paragraph */}
              <div className="pl-4 border-l-2 border-blue-500/50 bg-blue-500/5 rounded-r-lg py-3 pr-3">
                <p className="text-sm">
                  Before this project, I spent two years building the automation
                  layer entirely in VMware vRO using JavaScript - treating it as
                  a backend runtime rather than a scripting tool. That included
                  an async task queue with worker execution, lock and release
                  semantics for concurrent runs, and configuration elements used
                  as a persistence layer. I also built a task runner engine using
                  Strategy, Registry, Decorator, Worker Pool, and Repository
                  patterns, which is still how I approach system design.
                </p>
              </div>

              <p>
                I lead requirements gathering, run daily coordination and direct
                backlog work for two other engineers, and work with the Network,
                PID, and Platform teams to automate work that used to be done by
                hand.
              </p>
              <p>
                Outside of work I run a Proxmox homelab (Immich, Pi-hole,
                Plane, K3s, Caddy, Tailscale) as a place to try infrastructure
                tooling before I use it at work.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="skills"
        className="py-20 relative"
      >
        <div className="max-w-6xl mx-auto px-4 md:pl-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(skills).map(([category, skillData]) => {
              const IconComponent = skillData.icon;
              return (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <div className="flex items-center mb-4 gap-3">
                    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-5 h-5 ${skillData.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {skillData.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skillData.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200 border-l-2 border-transparent hover:border-blue-400/50"
                      >
                        <span className="flex items-center gap-2 text-slate-300 text-sm">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${skillData.color.replace("text-", "bg-")} opacity-70`}
                          />
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-xs text-slate-500 italic">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="projects"
        className="py-20 relative"
      >
        <div className="max-w-6xl mx-auto px-4 md:pl-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          {/* Featured KInfra card - full width */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-8 relative rounded-xl p-px bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-slate-700/20"
              >
                <div className="rounded-xl bg-slate-900/90 backdrop-blur-sm p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-xs font-semibold bg-blue-600/30 text-blue-300 border border-blue-500/40 rounded">
                          FEATURED
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-100">
                        {project.title}
                      </h3>
                      <p className="text-blue-400 font-medium">
                        {project.category}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full border self-start ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-5">{project.description}</p>

                  <div className="mb-5">
                    <p className="text-sm font-medium text-slate-200 mb-2">
                      Highlights
                    </p>
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1.5">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-300"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-blue-500/15 text-blue-300 text-xs rounded border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-400">
                    Role: {project.role}
                  </p>
                </div>
              </motion.div>
            ))}

          {/* Remaining project cards - 2-col grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-400/80 font-medium">
                        {project.category}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 text-xs rounded-full border ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <ul className="mb-4 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500">Role: {project.role}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="experience"
        className="py-20 relative"
      >
        <div className="max-w-4xl mx-auto px-4 md:pl-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {job.role}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {job.company}
                      {job.companyDetail && (
                        <span className="text-slate-400 font-normal">
                          {" "}· {job.companyDetail}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-slate-400">{job.location}</p>
                  </div>
                  <span className="text-sm text-slate-400 mt-2 md:mt-0 px-3 py-1 bg-slate-700/50 rounded self-start">
                    {job.period}
                  </span>
                </div>

                {job.project && (
                  <p className="text-sm text-indigo-400 mb-4 font-medium">
                    Project: {job.project}
                  </p>
                )}

                <p className="text-slate-300 mb-5">{job.description}</p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="contact"
        className="py-20 relative"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-12">
            I&apos;m interested in talking with teams working on platform
            engineering, developer tooling, and infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                href: "mailto:patchara.pck@gmail.com",
                text: "patchara.pck@gmail.com",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                href: "https://www.linkedin.com/in/patchara-kleebbua/",
                text: "patchara-kleebbua",
              },
              {
                icon: Github,
                title: "GitHub",
                href: "https://github.com/PatcharaKL",
                text: "PatcharaKL",
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 block group"
              >
                <contact.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-1 text-slate-100">
                  {contact.title}
                </h3>
                <span className="text-blue-400 text-sm">{contact.text}</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:patchara.pck@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium inline-flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            <Mail size={16} className="mr-2" />
            Get in Touch
          </a>
        </div>
      </motion.section>

      <footer className="bg-slate-900/50 backdrop-blur-sm text-slate-400 py-8 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Patchara Kleebbua. Thank you for
            taking the time to learn about my work.
          </p>
        </div>
      </footer>
    </div>
  );
}
