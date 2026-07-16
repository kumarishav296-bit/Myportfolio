import { Github, ExternalLink, Package, Award, Star } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Shipments Data Entry Web Application',
    dates: 'May 2025 – July 2025',
    description:
      'A full-featured web application for real-time shipment tracking and workflow automation, built as part of an academic project.',
    bullets: [
      'Built API and backend integration for real-time shipment tracking.',
      'Implemented efficient workflow automation to streamline data entry operations.',
    ],
    stack: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    github: 'https://github.com/kumarishav296-bit',
    demo: null,
  },
  {
    title: 'GenAI Stadium Ops Fan Experience Platform',
    dates: '2025',
    description:
      'An end-to-end solution leveraging Generative AI to elevate the stadium fan experience across navigation, crowd management, transportation, sustainability, multilingual assistance, and operational intelligence.',
    bullets: [
      'Designed an end-to-end solution that uses Generative AI to improve at least one of: Navigation, Crowd Management, Transportation, Sustainability, Multilingual Assistance, or Operational Intelligence.',
      'Integrated AI-driven assistance for real-time wayfinding, crowd density monitoring, and multilingual support to enhance fan engagement and safety.',
    ],
    stack: ['Generative AI', 'Python', 'Full-Stack', 'Cloud'],
    github: 'https://github.com/kumarishav296-bit',
    demo: null,
  },
  {
    title: 'Personal Portfolio Website',
    dates: '2025',
    description:
      'A personal portfolio website showcasing projects, skills, experience, and certifications with a clean, responsive design and smooth animations.',
    bullets: [
      'Built a personal portfolio website with responsive design, scroll animations, and a contact form.',
      'Implemented reusable section components and a cohesive design system for easy content updates.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/kumarishav296-bit',
    demo: null,
  },
];

const certifications = [
  { text: 'Web Developer Intern Certificate', org: 'Zedex Software', icon: Star },
  { text: 'Teacher Intern Certificate', org: 'Pehchaan The Street School', icon: Star },
  { text: 'Certificate of Recognition', org: 'National Service Scheme', icon: Star },
   { text: 'Certificate of Training as UI/UX Trainee', org: 'Tripple One Solutions', icon: Award }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-slate-50">
      <SectionHeading label="Work" title="Projects & Highlights" />

      {/* Project cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {projects.map((p) => (
          <div
            key={p.title}
            className="relative rounded-2xl bg-white border border-slate-100 p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-md hover:border-sky-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                <Package size={17} className="text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base leading-tight">{p.title}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{p.dates}</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>

            <ul className="space-y-1.5">
              {p.bullets.map((b) => (
                <li key={b} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-sky-400 mt-1.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {p.stack.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-1 border-t border-slate-100">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors font-medium"
                >
                  <Github size={13} /> GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1.5 text-slate-500 hover:text-sky-600 transition-colors font-medium"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-5">Certifications</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {certifications.map(({ text, org, icon: Icon }) => (
            <div
              key={text}
              className="flex gap-3 items-start p-4 rounded-xl bg-white border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={14} className="text-sky-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 leading-snug">{text}</p>
                <p className="text-xs text-slate-500 mt-0.5">{org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
