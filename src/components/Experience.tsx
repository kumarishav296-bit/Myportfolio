import { Building2, Users, Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

interface TimelineItem {
  icon: React.ElementType;
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  tag: string;
}

const items: TimelineItem[] = [
  {
    icon: Building2,
    role: 'Web Developer Trainee',
    org: 'Zedex Software · Aya Nagar',
    dates: '05 Apr 2026 – 30 Jun 2026',
    tag: 'Internship',
    bullets: [
      'Worked on real client projects with hands-on experience in web development.',
      'Integrated APIs, social media pages, Google Maps, and contact forms into client websites.',
    ],
  },
  {
    icon: Users,
    role: 'Teacher Intern',
    org: 'Pehchaan The Street School',
    dates: '09 Jan 2026 – 09 Mar 2026',
    tag: 'Volunteer',
    bullets: [
      'Volunteered as a teaching intern, contributing to education for underprivileged students.',
      'Earned an official Teacher Intern Certificate for dedicated service.',
    ],
  },
  {
    icon: Award,
    role: 'Volunteer',
    org: 'National Service Scheme (NSS)',
    dates: '2024',
    tag: 'Community',
    bullets: [
      'Active NSS volunteer, earning a Certificate of Recognition for community contributions.',
    ],
  },
];

const tagColors: Record<string, string> = {
  Internship: 'bg-sky-100 text-sky-700',
  Volunteer: 'bg-teal-100 text-teal-700',
  Community: 'bg-emerald-100 text-emerald-700',
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-slate-50">
      <SectionHeading label="Career" title="Experience & Involvement" />

      <div className="relative pl-8 border-l-2 border-slate-200 space-y-12">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.role} className="relative group">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-sky-500 border-4 border-white shadow-md group-hover:scale-110 transition-transform" />

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all duration-200">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-base leading-tight">{item.role}</h3>
                      <p className="text-slate-500 text-sm">{item.org}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[item.tag]}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400">{item.dates}</span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="text-sm text-slate-600 flex gap-2">
                      <span className="text-sky-400 mt-1.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
