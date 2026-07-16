import { Github, Linkedin, ArrowDown, Mail, FileText } from 'lucide-react';
import profilePhoto from '../assets/images/image.png';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="flex flex-col">
      {/* ── LANDING PANEL ─────────────────────────────────────────────── */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#0d1f2d] to-slate-900">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ── Text column */}
            <div className="order-2 lg:order-1">
              <p className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
                Web Developer &amp; BBA Student
              </p>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
                Rishav<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                  Kumar
                </span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up">
                Building modern web experiences. First-year BBA at USME Delhi Technological University — bridging business thinking with technology.
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-10 animate-fade-up">
                {['HTML', 'CSS', 'TypeScript', 'Angular', 'UI/UX', 'Gen AI'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 bg-white/5 text-slate-300 border border-white/10 rounded-full font-medium hover:border-sky-500/40 hover:text-sky-300 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-up">
                <a
                  href="/Rishav_Kumar_CV_updated_(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-sky-500/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <FileText size={15} /> View CV
                </a>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-sky-400/60 text-slate-300 hover:text-sky-300 text-sm font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={15} /> Get In Touch
                </button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-6 animate-fade-in">
                <a
                  href="https://github.com/kumarishav296-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors"
                >
                  <Github size={17} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rishav-kumar-78a007327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-sky-400 text-sm transition-colors"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>
              </div>
            </div>

            {/* ── Photo column */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Glow ring behind photo */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/20 to-teal-500/10 blur-2xl" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Rishav Kumar"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
                  <p className="text-white text-xs font-semibold">Available for opportunities</p>
                  <p className="text-sky-400 text-xs">Open to internships &amp; projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('#profile-banner')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-sky-400 transition-colors z-10"
          aria-label="Scroll down"
        >
          <ArrowDown size={22} />
        </button>
      </div>

      {/* ── LINKEDIN-STYLE PROFILE BANNER ─────────────────────────────── */}
      <div id="profile-banner" className="bg-white">
        {/* Banner image strip */}
        <div className="relative w-full h-40 sm:h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#0f2027] to-[#1a3a4a]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="60%" y2="0" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="20%" y1="100%" x2="80%" y2="0" stroke="#38bdf8" strokeWidth="1" />
            <line x1="40%" y1="100%" x2="100%" y2="0" stroke="#38bdf8" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Profile card */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative -mt-12 sm:-mt-14 mb-4 flex flex-wrap items-end gap-4">
            {/* Avatar */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden flex-shrink-0 bg-slate-800">
              <img
                src={profilePhoto}
                alt="Rishav Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Desktop action buttons */}
            <div className="hidden sm:flex items-center gap-3 pb-2 ml-auto">
              <a
                href="/Rishav_Kumar_CV_updated_(2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium rounded-full shadow-md hover:shadow-sky-400/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={14} /> View CV
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 hover:border-sky-400 text-slate-700 hover:text-sky-600 text-sm font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={14} /> Contact
              </button>
            </div>
          </div>

          <div className="pb-10 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">Rishav Kumar</h2>
            <p className="text-slate-600 text-sm mt-1">Web Developer · BBA Student at USME Delhi Technological University</p>
            <p className="text-slate-500 text-xs mt-1">
              New Delhi, India ·{' '}
              <a
                href="https://www.linkedin.com/in/rishav-kumar-78a007327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline"
              >
                linkedin.com/in/rishav-kumar-78a007327
              </a>
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['HTML', 'CSS', 'TypeScript', 'Angular', 'UI/UX', 'Gen AI'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-sky-50 text-sky-700 border border-sky-100 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            {/* Mobile buttons */}
            <div className="flex sm:hidden items-center gap-3 mt-4">
              <a
                href="/Rishav_Kumar_CV_updated_(2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-full shadow-md"
              >
                <FileText size={14} /> View CV
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-full"
              >
                <Mail size={14} /> Contact
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
              <a href="https://github.com/kumarishav296-bit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 text-sm transition-colors">
                <Github size={15} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rishav-kumar-78a007327" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-500 hover:text-sky-600 text-sm transition-colors">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
