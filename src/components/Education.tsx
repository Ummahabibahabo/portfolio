export default function Education() {
  const educations = [
    {
      degree: "B.A. (Honours) in English",
      institution: "National University, Bangladesh",
      duration: "Ongoing (Currently Pursuing)",
      description:
        "Developing advanced professional communication, critical thinking, linguistic precision, and comprehensive analytical abilities. Leveraging these strong English language skills to collaborate smoothly with international teams, write clear technical documentation, and deliver articulate client presentations.",
      isCurrent: true,
    },
    {
      degree: "Complete MERN Stack Web Development",
      institution: "Professional Full-Stack Certification",
      duration: "Completed & Continuous Learning",
      description:
        "Rigorous training in modern web engineering, covering HTML5, CSS3, modern JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB database modeling, RESTful API design, JWT authentication, and agile development practices.",
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2.5">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-widest font-medium">
            Academic & Training
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight">
            Education & Background
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-5">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/80 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    {edu.isCurrent ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-sky-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-sky-400/90">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full w-fit ${
                    edu.isCurrent
                      ? "bg-emerald-950/50 text-emerald-400 border border-emerald-800/50 flex items-center gap-1.5"
                      : "bg-zinc-800/60 text-zinc-400 border border-zinc-700/50"
                  }`}
                >
                  {edu.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  {edu.duration}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-2 pl-0 sm:pl-13">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
