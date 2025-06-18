'use client';

import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/types/form-types';
import generatePdf from '@/lib/pdfGenerator';

type Props = {
  rdvType: 'premiere' | 'suivi';
};

export default function FinalSubmitSection({ }: Props) {
  const { getValues } = useFormContext<FormValues>();

  const handleSubmit = async () => {
    const data = getValues();

    const chevaux = data.chevaux || [];
    if (chevaux.length === 0) {
      alert('Aucun formulaire cheval rempli. Veuillez ajouter au moins un équidé.');
      return;
    }

    const images = chevaux.map((cheval) => cheval.image as File);

    const personal = {
      nom: data.nom,
      prenom: data.prenom,
      taille: data.taille,
      taillePantalon: data.taillePantalon,
      telephone: data.telephone,
      email: data.email,
      adresse: data.adresse,
      codePostal: data.codePostal,
      ville: data.ville,
      adresseDiff: data.adresseDiff,
      lieuNom: data.lieuNom,
      lieuAdresse: data.lieuAdresse,
      lieuCodePostal: data.lieuCodePostal,
      lieuVille: data.lieuVille,
      lieuPrecisions: data.lieuPrecisions,
    };

    try {
      const pdfBytes = await generatePdf(personal, chevaux, images);

      // Affichage du PDF dans un nouvel onglet
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);

      alert('PDF généré avec succès ! (envoi par email à venir)');
    } catch (error) {
      console.error('Erreur lors de la génération du PDF :', error);
      alert('Une erreur est survenue pendant la génération du PDF.');
    }
  };

  return (
    <div className="mt-10 text-center">
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-[#001845] text-white px-6 py-3 rounded hover:bg-[#003366] transition"
      >
        Envoyer ma demande de rendez-vous et recevoir une copie par email
      </button>
    </div>
  );
}
