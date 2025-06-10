'use client';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Image src="/images/Logo.JPG" alt="Logo" width={50} height={60} className="mt-2 mb-8" />
        <nav className="flex gap-10 text-black font-medium mb-6">
          <Link href="/">Accueil</Link>
          <Link href="/pages/saddle-fitting">Le saddle fitting en détails</Link>
          <Link href="/pages/tarifs">Tarifs</Link>
          <Link href="/pages/rendez-vous">Rendez-Vous</Link>
          <Link href="/pages/boutique">Boutique</Link>
        </nav>
      </div>
    </header>
  );
}
