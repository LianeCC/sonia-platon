'use client';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white py-4 border-b shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={120} height={60} className="mb-2" />
        <nav className="flex gap-6 text-black font-medium">
          <Link href="/">Accueil</Link>
          <Link href="/saddle-fitting">Le saddle fitting en détails</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/rendez-vous">Rendez-Vous</Link>
          <Link href="/boutique">Boutique</Link>
        </nav>
      </div>
    </header>
  );
}
