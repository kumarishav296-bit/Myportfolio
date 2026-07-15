import { Code2, Layers, Monitor, Cloud } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const groups = [
  {
    icon: Code2,
    category: 'Languages',
    color: 'sky',
    skills: ['HTML', 'CSS', 'TypeScript'],
  },
  {
    icon: Layers,
    category: 'Frameworks & Tools',
    color: 'teal',
    skills: ['Angular', 'Visual Studio', 'Canva'],
  },
  {
    icon: Monitor,
    category: 'Platforms',
    color: 'indigo',
    skills: ['Windows', 'Android'],
  },
  {
    icon: Cloud,
    category: 'Exploring',
    color: 'amber',
    skills: ['Google Cloud', 'AI Prompting', 'UI/UX Design'],
  },
];

const colorMap: Record<string, { card: string; icon: string; badge: string }> = {
  sky: {
    card: 'hover:border-sky-200 hover:bg-sky-50',
    icon: 'bg-sky-100 text-sky-600',
    badge: 'bg-sky-100 text-sky-700',
  },
  teal: {
    card: 'hover:border-teal-200 hover:bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
  },
  indigo: {
    card: 'hover:border-slate-300 hover:bg-slate-50',
    icon: 'bg-slate-100 text-slate-600',
    badge: 'bg-slate-100 text-slate-700',
  },
  amber: {
    card: 'hover:border-amber-200 hover:bg-amber-50',
    icon: 'bg-amber-100 text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white">
      <SectionHeading label="Expertise" title="Skills & Technologies" />

      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map(({ icon: Icon, category, color, skills }) => {
          const c = colorMap[color];
          return (
            <div
              key={category}
              className={`rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-200 ${c.card}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-slate-800">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${c.badge}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
