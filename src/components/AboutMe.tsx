export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2.5">
          <p className="text-sky-400 font-mono text-xs uppercase tracking-widest font-medium">
            Introduction
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight">
            About Me
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all pointer-events-none" />
            <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-3">
              Passionate Web Developer
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              I am Umma Habiba, a dedicated MERN Stack developer who loves
              transforming ideas into performant and visually captivating web
              applications. I focus on writing clean, maintainable code and
              building seamless user experiences.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              From crafting robust RESTful APIs to building interactive React and
              Next.js frontends, I handle the full lifecycle of modern web development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">100%</span>
              <p className="text-xs text-zinc-400 font-medium">Dedication</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-400">MERN</span>
              <p className="text-xs text-zinc-400 font-medium">Stack Focus</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400">Fast</span>
              <p className="text-xs text-zinc-400 font-medium">Performance</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Clean</span>
              <p className="text-xs text-zinc-400 font-medium">Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
