import { GraduationCap, MapPin, Briefcase } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const highlights = [
  { icon: GraduationCap, label: 'BBA @ DTU', sub: '2024 – 2027' },
  { icon: MapPin, label: 'New Delhi, India', sub: 'Available remotely' },
  { icon: Briefcase, label: 'Web Developer', sub: 'Open to opportunities' },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading label="Who I am" title="About Me" />
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              I'm Rishav Kumar, a first-year BBA student at USME Delhi Technological University with a passion for building web applications. I gained hands-on professional experience as a Web Developer Trainee at Zedex Software, where I worked on real client projects integrating APIs, maps, and interactive features.
            </p>
            <p>
              Alongside my studies I've pursued UI/UX training, explored AI prompting through Prompt Wars, and completed Google Cloud Skills Boost — always looking to bridge business thinking with modern technology.
            </p>
            <p>
              Outside of tech, I'm an active cricket player and a dedicated volunteer with the National Service Scheme.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {highlights.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}

          {/* Education quick-view */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Education</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-slate-800">B.B.A — DTU (USME)</span>
                <span className="text-slate-400 text-xs">2024–2027</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-slate-600">CBSE Class XII — Laxman Public School</span>
                <span className="text-slate-400 text-xs">2024 · 58.6%</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-slate-600">CBSE Class X — Laxman Public School</span>
                <span className="text-slate-400 text-xs">2022 · 77%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
