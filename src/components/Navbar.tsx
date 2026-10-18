"use client";

import React, { useState, useEffect } from "react";

interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

// Custom lightweight inline icons
const HomeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SkillsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const ProjectsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const EducationIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2.686 3 6 3s6-1 6-3v-5" />
  </svg>
);

const ContactIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SparklesIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const DownloadIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Navigation items corresponding to components in src/components:
const NAV_ITEMS: NavItem[] = [
  { id: "hero", name: "Home", href: "#hero", icon: HomeIcon },
  { id: "about", name: "About Me", href: "#about", icon: UserIcon },
  { id: "skills", name: "Skills", href: "#skills", icon: SkillsIcon },
  { id: "projects", name: "Projects", href: "#projects", icon: ProjectsIcon },
  { id: "education", name: "Education", href: "#education", icon: EducationIcon },
  { id: "contact", name: "Contact", href: "#contact", icon: ContactIcon },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll detection for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent border-b border-white/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="group flex items-center gap-3 select-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300">
              <span className="text-cyan-400 font-mono font-black text-lg group-hover:scale-110 transition-transform duration-300">
                &lt;/&gt;
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-lg group-hover:text-cyan-400 transition-colors duration-200">
                Umma Habiba<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                MERN Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/15 via-blue-500/20 to-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/40 border border-transparent"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? "scale-110 text-cyan-400" : "text-zinc-500"
                    }`}
                  />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Umma_Habiba_Resume.pdf"
              title="Download Umma Habiba's Resume"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/50 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] active:scale-95 transition-all duration-200"
            >
              <DownloadIcon className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
              <span>Resume</span>
            </a>

            {/* Hire Me / Let's Talk Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="relative hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 transition-all duration-200 overflow-hidden group"
            >
              <SparklesIcon className="w-3.5 h-3.5 text-cyan-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Hire Me</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors duration-200 focus:outline-none"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100 border-b border-zinc-800/80 bg-black/95 backdrop-blur-2xl"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 border border-transparent"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "bg-zinc-800/50 text-zinc-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{item.name}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-zinc-800/80 space-y-2">
            <a
              href="/resume.pdf"
              download="Umma_Habiba_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-sm hover:border-cyan-500/50 active:scale-98 transition-all"
            >
              <DownloadIcon className="w-4 h-4 text-cyan-400" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 active:scale-98 transition-all"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Get in Touch / Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
