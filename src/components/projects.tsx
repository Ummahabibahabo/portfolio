import Image from "next/image";

interface Project {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "bazardor",
      badge: "Project 01",
      title: "বাজার দর (BazarDor) — Commodity Price Tracker",
      subtitle: "Next.js • BetterAuth • REST API",
      description:
        "A full-stack daily commodity price tracking platform for Bangladeshi markets with live price trend indicators (▲/▼), category filtering, Bengali numeral sorting, and secure BetterAuth authentication.",
      image: "/projects/bazardor.jpg",
      liveUrl: "https://bazardor-price-project.vercel.app/",
      githubUrl: "https://github.com/Ummahabibahabo/bazardor-price-project.git",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "BetterAuth", "REST API", "Vercel"],
    },
    {
      id: "fitlog",
      badge: "Project 02",
      title: "FitLog — Workout Library & Fitness Planner",
      subtitle: "Next.js • React • Tailwind CSS",
      description:
        "A dark-themed fitness companion web app featuring a multi-muscle workout library, exercise detail specs (sets, reps, calories), live plan counters, and interactive daily workout logging.",
      image: "/projects/fitlog.jpg",
      liveUrl: "https://fit-long-next-js-project-1zwu.vercel.app/",
      githubUrl: "https://github.com/Ummahabibahabo/fit-long-next-js-project.git",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Local Storage", "Vercel"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-[#09090b] relative">
      {/* Subtle, soft ambient glow (soothing, not harsh) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header with soothing text colors */}
        <div className="text-center space-y-2.5">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-widest font-medium">
            Featured Work
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-zinc-400 text-sm leading-relaxed pt-1">
            Real-world full-stack web applications with modern architectures, clean code, and responsive designs.
          </p>
        </div>

        {/* 2-Column Responsive Projects Grid (Compact & Centered) */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden shadow-md hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Compact Centered Image Container */}
                <div className="pt-3.5 px-3.5 flex justify-center">
                  <div className="relative h-28 sm:h-32 md:h-36 w-full max-w-[300px] sm:max-w-[340px] rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800/80 group-hover:border-zinc-700/80 transition-all shadow-sm">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 300px, 340px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Project Number Badge */}
                    <div className="absolute top-2 left-2 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-sky-300 text-[9px] font-mono font-medium backdrop-blur-md shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {proj.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area with Soft, Eye-Friendly Colors */}
                <div className="p-4 sm:p-5 space-y-2.5">
                  <div>
                    <span className="text-[10px] font-mono text-sky-400/90 tracking-wider">
                      {proj.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight mt-0.5 group-hover:text-sky-300 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  {/* Gentle, comfortable body text */}
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech Stack Pills (Subtle and easy on the eyes) */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-4 sm:p-5 pt-0 border-t border-zinc-800/50 flex items-center gap-2.5">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-sky-600/90 hover:bg-sky-500 text-white font-medium text-xs shadow-sm transition-all"
                >
                  <span>Live Preview</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-zinc-800/70 hover:bg-zinc-700/70 border border-zinc-700/60 text-zinc-300 hover:text-zinc-100 text-xs transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
