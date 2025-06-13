import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-black text-sm border-t">
      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 justify-center sm:justify-start">
          <Image src="/images/Logo.JPG" alt="Logo" width={50} height={50} />
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icones/facebook-icone.png" alt="Facebook Icon" width={50} height={24} />
          </a>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-2">Infos utiles</h3>
          <ul className="space-y-1">
            <li><Link href="/pages/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/pages/cgv">Conditions générales de vente</Link></li>
            <li><Link href="/pages/politique-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Sonia Platon</p>
          <p>+33 6 12 34 56 78</p>
          <p>soniaplaton@gmail.com</p>
          <p>Lundi au Samedi de 10h à 18h</p>
        </div>
      </div>
      <div className="text-center pb-4 text-xs px-4">
        &copy; 2025, Sonia Platon - SIREN 00000. Tous droits réservés. Créé par <a href="https://www.lianecc.com" className="underline">LianeCC</a>
      </div>
    </footer>
  );
}
