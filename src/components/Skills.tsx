import React from "react";

interface SkillItem {
  name: string;
  level: string;
  icon: React.JSX.Element;
  glowColor: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming Languages & Core",
      subtitle: "Foundational web and scripting languages",
      skills: [
        {
          name: "JavaScript (ES6+)",
          level: "Advanced",
          glowColor: "rgba(247, 223, 30, 0.25)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm">
              <rect width="32" height="32" rx="6" fill="#F7DF1E" />
              <path
                fill="#000"
                d="M19.8 24.5c.7.4 1.5.7 2.4.7 1.5 0 2.4-.7 2.4-1.9v-9.5h3.4v9.6c0 3.3-2 5-5.6 5-1.5 0-2.8-.4-3.7-1l1.1-2.9zm-8.3-.3c.7.4 1.5.6 2.3.6 1.4 0 2.2-.6 2.2-1.6 0-1-.8-1.5-2.2-2.1-2.1-.8-3.4-1.9-3.4-3.8 0-2.3 1.8-3.9 4.6-3.9 1.4 0 2.5.3 3.4.8l-1 2.8c-.6-.4-1.4-.6-2.2-.6-1.1 0-1.7.5-1.7 1.3 0 .9.7 1.3 2.1 1.9 2.3.9 3.6 2 3.6 4.1 0 2.6-2 4.1-5.2 4.1-1.6 0-3-.4-4-1l1.1-3.2z"
              />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          level: "Proficient",
          glowColor: "rgba(49, 120, 198, 0.25)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm">
              <rect width="32" height="32" rx="6" fill="#3178C6" />
              <path
                fill="#fff"
                d="M14.5 12.8h-4.2V26H7.1V12.8H2.9V9.9h11.6v2.9zm5.5 10.4c.8.5 1.8.8 2.8.8 1.6 0 2.6-.7 2.6-1.9 0-1.1-.9-1.8-2.6-2.5-2.5-1-4-2.3-4-4.5 0-2.7 2.1-4.6 5.4-4.6 1.6 0 3 .4 4.1 1l-1.2 3.3c-.8-.5-1.7-.8-2.6-.8-1.3 0-2 .6-2 1.5 0 1 .8 1.6 2.5 2.3 2.7 1.1 4.1 2.4 4.1 4.7 0 3.1-2.4 4.9-6.1 4.9-1.9 0-3.6-.5-4.8-1.2l1.2-3.3z"
              />
            </svg>
          ),
        },
        {
          name: "HTML5",
          level: "Expert",
          glowColor: "rgba(227, 79, 38, 0.25)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm">
              <rect width="32" height="32" rx="6" fill="#18181b" />
              <path fill="#E34F26" d="M6 4.5l2.1 20.8L16 28l7.9-2.7 2.1-20.8H6z" />
              <path fill="#EF652A" d="M16 26.1l6.4-1.9 1.7-17H16v18.9z" />
              <path
                fill="#EBEBEB"
                d="M10.8 9.5h5.2v3H13l.4 3.2h2.6v3.1H12.7l.5 4.8 2.8.8v3l-5.6-1.7-.6-16.2z"
              />
              <path
                fill="#FFF"
                d="M16 9.5h5.2l-.5 5.5H16v-2.5h2.7l.2-2.5H16V9.5zm0 6.6h2.6l-.3 3-2.3.7v3.1l4.7-1.4.7-8H16v2.6z"
              />
            </svg>
          ),
        },
        {
          name: "CSS3",
          level: "Expert",
          glowColor: "rgba(21, 114, 182, 0.25)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm">
              <rect width="32" height="32" rx="6" fill="#18181b" />
              <path fill="#1572B6" d="M6 4.5l2.1 20.8L16 28l7.9-2.7 2.1-20.8H6z" />
              <path fill="#33A9DC" d="M16 26.1l6.4-1.9 1.7-17H16v18.9z" />
              <path
                fill="#EBEBEB"
                d="M16 9.5h-5.2l.3 3H16v-3zm0 5.8h-2.5l-.3-3h-2.6l.5 5.5H16v-2.5zm0 9.2l-2.7-.8-.2-2H10.5l.4 4.5 5.1 1.5v-3.2z"
              />
              <path
                fill="#FFF"
                d="M16 9.5v3h2.7l-.3 3H16v2.8h2.4l-.3 3-2.1.7v3.1l4.7-1.4.7-8 .2-3.2H16z"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      subtitle: "Modern reactive UI and server frameworks",
      skills: [
        {
          name: "React.js",
          level: "Advanced",
          glowColor: "rgba(97, 218, 251, 0.25)",
          icon: (
            <svg
              viewBox="-11.5 -10.23174 23 20.46348"
              className="w-8 h-8 bg-zinc-900 rounded-lg p-1 border border-zinc-800"
            >
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: "Next.js",
          level: "Proficient",
          glowColor: "rgba(255, 255, 255, 0.2)",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 bg-zinc-950 rounded-lg border border-zinc-700/80 p-0.5"
            >
              <circle cx="12" cy="12" r="11" fill="#000" />
              <path fill="#fff" d="M15.5 16.5L9.5 8.5H8v7h1.5v-5.2l5.2 7h.8z" />
              <path fill="#fff" d="M14.5 8.5h1.5v5.5h-1.5z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          level: "Advanced",
          glowColor: "rgba(255, 255, 255, 0.15)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm">
              <rect width="32" height="32" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
              <text
                x="16"
                y="21"
                fill="#FFFFFF"
                fontSize="13"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="middle"
              >
                ex
              </text>
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          level: "Expert",
          glowColor: "rgba(6, 182, 212, 0.25)",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1.5"
            >
              <path
                fill="#06B6D4"
                d="M12 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.7 3.2-1.3.7.3 1.2.8 1.8 1.3 1 1 2.1 2 4.2 2 2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.7-3.2 1.3-.7-.3-1.2-.8-1.8-1.3-1-1-2.1-2-4.2-2zm-6 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.7 3.2-1.3.7.3 1.2.8 1.8 1.3 1 1 2.1 2 4.2 2 2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.7-3.2 1.3-.7-.3-1.2-.8-1.8-1.3-1-1-2.1-2-4.2-2z"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Databases, Runtime & Tools",
      subtitle: "Scalable backend storage and development environment",
      skills: [
        {
          name: "Node.js",
          level: "Advanced",
          glowColor: "rgba(95, 160, 78, 0.25)",
          icon: (
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1"
            >
              <path
                fill="#5FA04E"
                d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5zm0 3.4L7.3 11v10l8.7 5.1 8.7-5.1V11L16 5.9z"
              />
              <path fill="#5FA04E" d="M15.2 11.2h2v9.6h-2z" />
            </svg>
          ),
        },
        {
          name: "MongoDB & Mongoose",
          level: "Advanced",
          glowColor: "rgba(71, 162, 72, 0.25)",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1.5"
            >
              <path
                fill="#47A248"
                d="M12 1.5s-4.5 5.5-4.5 11.5c0 4.2 3.2 7.8 4.5 9 1.3-1.2 4.5-4.8 4.5-9C16.5 7 12 1.5 12 1.5z"
              />
              <path
                fill="#499D4A"
                d="M12 1.5v20.5c1.3-1.2 4.5-4.8 4.5-9C16.5 7 12 1.5 12 1.5z"
              />
              <path
                fill="#E8E8E8"
                d="M12 8.5c-.2 2.5-1.5 4.5-1.5 7 0 2 1.5 4 1.5 4s1.5-2 1.5-4c0-2.5-1.3-4.5-1.5-7z"
              />
            </svg>
          ),
        },
        {
          name: "Git Version Control",
          level: "Proficient",
          glowColor: "rgba(240, 80, 50, 0.25)",
          icon: (
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1"
            >
              <path
                fill="#F05032"
                d="M30.4 14.5L17.5 1.6c-.8-.8-2.1-.8-2.9 0l-2.8 2.8 3.7 3.7c.9-.3 1.9-.1 2.5.6.7.7.8 1.7.5 2.5l3.5 3.5c.8-.3 1.9-.1 2.5.6 1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0-.8-.8-.9-1.9-.5-2.8l-3.3-3.3v7.3c.2.2.4.4.5.6 1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0-1-1-1-2.6 0-3.6.3-.3.7-.5 1.1-.6v-7.4c-.4-.1-.8-.3-1.1-.6-.8-.8-.9-1.9-.5-2.8L9.8 8.1 1.6 16.3c-.8.8-.8 2.1 0 2.9l12.9 12.9c.8.8 2.1.8 2.9 0l13-13c.8-.8.8-2.1 0-2.9z"
              />
            </svg>
          ),
        },
        {
          name: "GitHub & CI/CD",
          level: "Proficient",
          glowColor: "rgba(255, 255, 255, 0.2)",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 text-white"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Human Languages & Communication",
      subtitle: "B.A. (Honours) in English & professional collaboration",
      skills: [
        {
          name: "English (B.A. Honours)",
          level: "Professional & Academic",
          glowColor: "rgba(1, 33, 105, 0.4)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm overflow-hidden">
              <rect width="32" height="32" rx="6" fill="#012169" />
              <path stroke="#FFF" strokeWidth="4" d="M0 0l32 32M32 0L0 32" />
              <path stroke="#C8102E" strokeWidth="2.5" d="M0 0l32 32M32 0L0 32" />
              <path stroke="#FFF" strokeWidth="6" d="M16 0v32M0 16h32" />
              <path stroke="#C8102E" strokeWidth="3.5" d="M16 0v32M0 16h32" />
            </svg>
          ),
        },
        {
          name: "Bengali (বাংলা)",
          level: "Native Speaker",
          glowColor: "rgba(0, 106, 78, 0.4)",
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8 rounded-lg shadow-sm">
              <rect width="32" height="32" rx="6" fill="#006A4E" />
              <circle cx="14" cy="16" r="7.5" fill="#F42A41" />
              <text
                x="14"
                y="20.5"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                fontFamily="sans-serif"
                textAnchor="middle"
              >
                অ
              </text>
            </svg>
          ),
        },
        {
          name: "Technical Documentation",
          level: "Advanced",
          glowColor: "rgba(6, 182, 212, 0.25)",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
        },
        {
          name: "Team Collaboration",
          level: "Cross-functional",
          glowColor: "rgba(168, 85, 247, 0.25)",
          icon: (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg p-1.5 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-[#09090b] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-widest font-medium">
            Technical Stack & Languages
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-400 text-sm leading-relaxed pt-1">
            A comprehensive overview of programming languages, modern frameworks,
            database technologies, and academic communication proficiency.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Category Title */}
              <div className="mb-4 pb-3.5 border-b border-zinc-800/60 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{cat.subtitle}</p>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/40">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.05)`,
                    }}
                    className="group relative flex items-center gap-3.5 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/90 hover:border-cyan-500/50 hover:bg-zinc-900/80 transition-all duration-200"
                  >
                    <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {skill.name}
                      </p>
                      <p className="text-[11px] font-mono text-zinc-400 truncate">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
