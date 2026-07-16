import { Github, Linkedin, ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glowing blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Avatar initials */}
        <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-gradient-to-br from-sky-400 to-teal-500 flex items-center justify-center shadow-2xl ring-4 ring-sky-400/30 animate-fade-in">
          <span className="text-3xl font-bold text-white tracking-wider">RK</span>
        </div>

        <p
          className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Portfolio
        </p>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 leading-tight animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Rishav Kumar
        </h1>

        <p
          className="text-xl sm:text-2xl text-slate-300 font-medium mb-4 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Web Developer &amp; BBA Student
        </p>

        <p
          className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          Building clean, functional web experiences — one line of code at a time.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-full text-sm transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Mail size={15} /> Get in Touch
          </button>
          <a
            href="https://github.com/kumarishav296-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rishav-kumar-78a007327"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-400 font-medium rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>

        <button
          onClick={() => scrollTo('#about')}
          className="mt-16 animate-bounce text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
