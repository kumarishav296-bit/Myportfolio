import { useReveal } from '../hooks/useReveal';

interface Props {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className = '', children }: Props) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-reveal py-24 px-6 ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
