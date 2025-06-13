'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        {/* Mobile header : Logo centré + burger à droite */}
        <div className="flex items-center justify-between sm:hidden">
          <div className="flex-1 flex justify-center">
            <Image src="/images/Logo.JPG" alt="Logo" width={50} height={60} />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2">
                <Menu className="w-6 h-6 text-black" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-56">
                <DropdownMenuItem><Link href="/">Accueil</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/pages/saddle-fitting">Le saddle fitting</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/pages/tarifs">Tarifs</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/pages/rendez-vous">Rendez-Vous</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/pages/boutique">Boutique</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Desktop header : logo au centre puis liens dessous */}
        <div className="hidden sm:flex flex-col items-center">
          <Image src="/images/Logo.JPG" alt="Logo" width={50} height={60} className="mb-2" />
          <nav className="flex gap-6 md:gap-10 text-black font-medium text-sm sm:text-base mt-2">
            <Link href="/">Accueil</Link>
            <Link href="/pages/saddle-fitting">Le saddle fitting en détails</Link>
            <Link href="/pages/tarifs">Tarifs</Link>
            <Link href="/pages/rendez-vous">Rendez-Vous</Link>
            <Link href="/pages/boutique">Boutique</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
