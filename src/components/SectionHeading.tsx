interface Props {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: Props) {
  return (
    <div className="mb-14">
      <p className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-2">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">{title}</h2>
      <div className="mt-4 w-12 h-1 rounded-full bg-sky-500" />
    </div>
  );
}
