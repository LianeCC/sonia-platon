// app/pages/tarifs/page.tsx
import Separator from "@/app/components/Separator";
import Sectionwhite from "../../components/Sectionwhite";
import MapSection from "../../components/MapSection";

export default function TarifsPage() {
  return (
    <><Sectionwhite title="Services et Tarifs 2025">
      <div className="space-y-8 text-center">
        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Consultation en écurie</h3>
          <p>
            Prises de mesures, essais statiques et dynamiques. Environ 1h30 par cheval.
          </p>
          <p><strong>80€</strong></p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Consultation centre équestre / Piquet professionnel</h3>
          <p>
            Optimisation du matériel présent, essais dynamiques. <br /><strong>Sur devis</strong>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Forfait 4 saisons</h3>
          <p className="max-w-2xl mx-auto">
            4 consultations réparties sur l&apos;année pour que le matériel suive l&apos;évolution de votre cheval, particulièrement indiqué pour le cheval de compétition (avant les concours importants par exemple), pour le jeune cheval qui change énormément la première année de travail, ou pour une remise en route dans le confort. 
            <br /><strong>270€</strong> (au lieu de 320€)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Essais de selles</h3>
          <p>
            <strong>Gratuit</strong> si prévu lors ou en complément d’une consultation, < br/>ou <strong>50€</strong> si nouveau déplacement à prévoir dans les deux mois suivants une consultation.
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
            <strong>Offert</strong> lors de la consultation pour les marques les plus courantes < br/>ou arcade supplémentaire facturée au <strong>tarif du fabricant</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Reflock partiel</h3>
          <p>
            Modification des panneaux en laine pour amorti et équilibrage.
            <br /><strong>30€</strong> (panneaux vissés, à l&apos;écurie)<br />
            <strong>+ 80€</strong> supplémentaires si panneaux cousus, se fait à mon atelier
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Reflock total</h3>
          <p>
            Remplacement de la laine, ajustements complets.
            <br /><strong>100€</strong> (panneaux vissés, à l&apos;écurie)<br />
            <strong>+80€</strong> supplémentaires si panneaux cousus, se fait à mon atelier
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Ouverture d&apos;arcade par presse</h3>
          <p>
            ❄️ À froid : <strong>60€</strong> (à l&apos;écurie si prévu en avance, sinon à mon atelier)<br />
            🔥 À chaud : <strong>80€</strong> (à mon atelier)
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Thermographie infrarouge</h3>
          <p className="max-w-2xl mx-auto">
            Bilan des écarts de température détectables : cette prestation n&apos;a pas pour but d’adapter une selle, ni de poser un diagnostic vétérinaire, mais peut permettre de détecter une asymétrie révélée par le matériel (selle qui tourne) ou donner des écarts de valeurs chiffres en cas de boiterie, de locomotion perturbée etc.
          </p>
          <p><strong>Tarif variable suivant la zone et le nombre de clichés</strong></p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#001845]">Dépôt-vente de matériel</h3>
          <p className="max-w-2xl mx-auto">
            Possible pour selles, tapis, sangles qui ont des caractéristiques intéressantes pour le saddle fitting (selles à matelassures laine uniquement par exemple), évaluation de votre matériel à vendre, prise en charge si accord pour dépôt-vente.
          </p>
          <p><strong>Tarif sur présentaiton</strong></p>
        </div>
      </div>
    </Sectionwhite>
    <MapSection /></>

  );
}
