import { Github, Linkedin, ArrowDown, Mail, FileText } from 'lucide-react';
// Profile photo — replace this URL with your own by placing your image at src/assets/images/image.png
// and switching this back to: import profilePhoto from '../assets/images/image.png';
const profilePhoto =
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* LinkedIn-style banner */}
      <div className="relative w-full h-52 sm:h-64 md:h-72 flex-shrink-0 overflow-hidden">
        {/* Dark professional gradient banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#0f2027] to-[#1a3a4a]" />
        {/* Geometric line overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        {/* Diagonal accent lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="100%" x2="60%" y2="0" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="20%" y1="100%" x2="80%" y2="0" stroke="#38bdf8" strokeWidth="1" />
          <line x1="40%" y1="100%" x2="100%" y2="0" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="60%" y1="100%" x2="100%" y2="20%" stroke="#7dd3fc" strokeWidth="0.8" />
        </svg>
        {/* Subtle dot cluster bottom-right */}
        <div
          className="absolute bottom-6 right-10 w-32 h-20 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '10px 10px',
          }}
        />
      </div>

      {/* Profile card overlapping the banner */}
      <div className="relative z-10 flex-1 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Avatar — overlaps banner */}
          <div className="relative -mt-16 sm:-mt-20 mb-4 flex items-end gap-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden flex-shrink-0 bg-slate-800">
              <img
                src={profilePhoto}
                alt="Rishav Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Action buttons — aligned bottom-right on desktop */}
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

          {/* Name & meta */}
          <div className="pb-8 pt-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Rishav Kumar
            </h1>
            <p className="text-slate-600 text-base mt-1">
              Web Developer &amp; BBA Student at USME Delhi Technological University
            </p>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-1.5">
              <span>New Delhi, India</span>
              <span className="text-slate-300">·</span>
              <a
                href="https://www.linkedin.com/in/rishav-kumar-78a007327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline"
              >
                linkedin.com/in/rishav-kumar-78a007327
              </a>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['HTML', 'CSS', 'TypeScript', 'Angular', 'UI/UX', 'Gen AI'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-sky-50 text-sky-700 border border-sky-100 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Mobile action buttons */}
            <div className="flex sm:hidden items-center gap-3 mt-5">
              <a
                href="/Rishav_Kumar_CV_updated_(2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium rounded-full shadow-md transition-all duration-200"
              >
                <FileText size={14} /> View CV
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-full transition-all duration-200"
              >
                <Mail size={14} /> Contact
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-slate-100">
              <a
                href="https://github.com/kumarishav296-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 text-sm transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rishav-kumar-78a007327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-500 hover:text-sky-600 text-sm transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollTo('#about')}
          className="animate-bounce text-slate-400 hover:text-sky-500 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={22} />
        </button>
      </div>
    </section>
  );
}
