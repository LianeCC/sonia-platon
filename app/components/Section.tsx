import Image from "next/image";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  background?: "light" | "dark";
  image?: string;
}

export default function Section({ title, children, background = "light", image }: SectionProps) {
  const bgClass = background === "dark" ? "bg-[#001845] text-white" : "bg-[#f5f5f5] text-black";

  return (
    <section className={`${bgClass} py-16 px-4`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {image && (
          <Image
            src={image}
            alt="illustration"
            className="w-full md:w-1/3 rounded"
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
          />
        )}
        <div className={image ? "md:w-2/3" : "w-full"}>
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}