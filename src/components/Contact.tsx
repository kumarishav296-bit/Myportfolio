import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    note: 'placeholder — update with your real email',
    placeholder: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kumarishav296-bit',
    href: 'https://github.com/kumarishav296-bit',
    note: '',
    placeholder: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rishav-kumar-78a007327',
    href: 'https://www.linkedin.com/in/rishav-kumar-78a007327',
    note: '',
    placeholder: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New Delhi, India',
    href: null,
    note: '',
    placeholder: false,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading label="Say Hello" title="Get In Touch" />
        <p className="text-slate-600 text-base leading-relaxed mb-12 -mt-6">
          I'm open to internship opportunities, collaborative projects, and conversations about tech. Whether you have a project in mind or just want to connect, I'd love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {links.map(({ icon: Icon, label, value, href, note, placeholder }) => (
            <div
              key={label}
              className={`group flex gap-4 items-start p-5 rounded-2xl border transition-all duration-200 ${
                placeholder
                  ? 'border-dashed border-amber-300 bg-amber-50'
                  : 'border-slate-100 bg-slate-50 hover:border-sky-200 hover:bg-sky-50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-sky-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:text-sky-600 transition-colors truncate block"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-slate-800">{value}</p>
                )}
                {placeholder && (
                  <p className="text-xs text-amber-600 mt-1 italic">{note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-900 text-white text-center">
          <p className="font-semibold text-lg mb-1">Open to Opportunities</p>
          <p className="text-slate-300 text-sm">
            Currently pursuing B.B.A (2024–2027) and actively looking for part-time web development roles or internships.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
