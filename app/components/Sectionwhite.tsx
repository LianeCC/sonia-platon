interface SectionwhiteProps {
  title: string;
  children: React.ReactNode;
}

export default function Sectionwhite({ title, children }: SectionwhiteProps) {
  return (
    <section className="bg-white text-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#001845] mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}