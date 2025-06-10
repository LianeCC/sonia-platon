import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  icon: string;
}

export default function Card({ title, text, icon }: CardProps) {
  return (
    <div className="max-w-[300px] bg-[#001845] p-10 border border-white rounded-xl text-white text-center">
      <Image src={icon} alt={title} width={48} height={48} className="mx-auto mb-6" />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
