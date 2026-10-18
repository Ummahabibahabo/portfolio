import Image from "next/image";
import profileImg from "@/assests/g2EzjAg9.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#09090b]"
    >
      {/* Subtle, soft ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Direct Title, Short 1-Line Profession Bio, & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Professional Role Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sky-400 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse" />
              <span>Full-Stack Web Developer</span>
            </div>

            {/* Name & Main Title with Soothing, High-End Contrast */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Umma Habiba
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 tracking-tight">
                MERN Stack Developer
              </p>
            </div>

            {/* Exactly 1 clean, comfortable line about her profession */}
            <p className="max-w-xl mx-auto lg:mx-0 text-zinc-400 text-sm sm:text-base leading-relaxed">
              Passionate MERN Stack Developer specializing in building modern, scalable, and responsive web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-xl bg-sky-600/90 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm shadow-sm active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl bg-zinc-800/70 hover:bg-zinc-700/70 border border-zinc-700/60 text-zinc-300 hover:text-zinc-100 font-medium text-xs sm:text-sm active:scale-95 transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Key Value Metrics with Gentle Contrast */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0 border-t border-zinc-800/60">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-zinc-100">Full-Stack</p>
                <p className="text-xs text-zinc-400 mt-1">End-to-End Apps</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-sky-400">Clean Code</p>
                <p className="text-xs text-zinc-400 mt-1">Scalable & Tested</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-teal-400">Fast Learner</p>
                <p className="text-xs text-zinc-400 mt-1">Modern Practices</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Stylized Portrait Card without Extra Overlays */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px]">


              {/* Main Image Card */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/90 shadow-xl group">
                <Image
                  src={profileImg}
                  alt="Umma Habiba - Fullstack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle soft dark vignette gradient at bottom edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
