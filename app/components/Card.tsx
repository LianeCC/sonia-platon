import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  icon: string;
}

export default function Card({ title, text, icon }: CardProps) {
  return (
    <div className="max-w-[300px] bg-[#001845] p-6 sm:p-8 md:p-10 border border-white rounded-xl text-white text-center mx-auto">
      <Image src={icon} alt={title} width={48} height={48} className="mx-auto mb-4 sm:mb-6" />
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base">{text}</p>
    </div>
  );
}