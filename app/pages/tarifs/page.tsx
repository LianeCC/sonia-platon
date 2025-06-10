// app/pages/tarifs/page.tsx
import Separator from "@/app/components/Separator";
import Section2 from "../../components/Sectionwhite";

export default function TarifsPage() {
  return (
    <Section2 title="Services et Tarifs 2025">
      <div className="space-y-8 text-center">
        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Consultation en écurie</h3>
          <p>
            Prises de mesures, essais statiques et dynamiques. Environ 1h30 par cheval.
          </p>
          <p><strong>80€</strong></p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Consultation centre équestre</h3>
          <p>
            Optimisation du matériel présent, essais dynamiques. <br /><strong>Sur devis</strong>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Forfait 4 saisons</h3>
          <p>
            4 consultations annuelles pour suivi personnalisé.
            <br /><strong>270€</strong> (au lieu de 320€)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Essais de selles</h3>
          <p>
            Inclus avec consultation ou <strong>50€</strong> (déplacement complémentaire)
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Contrôle technique</h3>
          <p>
            Évaluation complète d&apos;une selle.
            <br /><strong>50€</strong>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Échange d&apos;arcade</h3>
          <p>
            Offert lors de la consultation pour les marques les plus courantes.
            <br /><strong>0€</strong>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Reflock partiel</h3>
          <p>
            Modification laine pour amorti et équilibrage.
            <br /><strong>30€</strong> (panneaux vissés, à l&apos;écurie)<br />
            <strong>+80€</strong> (panneaux cousus, à l&apos;atelier)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Reflock total</h3>
          <p>
            Remplacement de la laine, ajustements complets.
            <br /><strong>100€</strong> (panneaux vissés, à l&apos;écurie)<br />
            <strong>+80€</strong> (panneaux cousus, à l&apos;atelier)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Ouverture d&apos;arcade par presse</h3>
          <p>
            ❄️ À froid : <strong>60€</strong> (à l&apos;écurie si prévu)<br />
            🔥 À chaud : <strong>80€</strong> (à l&apos;atelier)
          </p>
        </div>

        <Separator />
             
        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Thermographie infrarouge</h3>
          <p>
            Bilan thermique pour détecter asymétries ou zones sensibles. 
          </p>
          <p><strong>Tarif variable</strong></p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Dépôt-vente de matériel</h3>
          <p>
            Sur sélection de matériel adapté au saddle fitting.
          </p>
          <p><strong>Tarif sur présentaiton</strong></p>
        </div>        
      </div>
    </Section2>
  );
}
