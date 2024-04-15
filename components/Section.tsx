interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <section className="flex flex-col gap-2">{children}</section>
);

export default Section;
