import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  icon: string;
}

export default function Card({ title, text, icon }: CardProps) {
  return (
    <div className="bg-[#001845] p-4 border border-white rounded text-white text-center">
      <Image src={icon} alt={title} width={48} height={48} className="mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
