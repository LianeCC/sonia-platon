"use client";
import Image from "next/image";

export default function MapSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#001845] mb-6">Secteur de déplacement</h2>

        <a
          href="/images/secteur2025.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block overflow-hidden rounded border border-gray-300 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/images/secteur2025.png"
            alt="Carte du secteur de consultation"
            width={800}
            height={600}
            className="mx-auto w-full h-auto"
          />
        </a>
      </div>
    </section>
  );
}
