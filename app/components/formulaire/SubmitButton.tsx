'use client';

import { useFormContext } from 'react-hook-form';
import { FormValues, HorseFormValues, PersonalInfo } from '@/types/form-types';
import generatePdf from '@/lib/pdfGenerator';

export default function SubmitButton() {
  const { getValues } = useFormContext<FormValues>();

  const handleClick = async () => {
    const formData = getValues();
    const horses: HorseFormValues[] = formData.chevaux || [];
    const images = horses.map((h) => h.image as File);

    const personal: PersonalInfo = {
      nom: formData.nom,
      prenom: formData.prenom,
      taille: formData.taille,
      taillePantalon: formData.taillePantalon,
      telephone: formData.telephone,
      email: formData.email,
      adresse: formData.adresse,
      codePostal: formData.codePostal,
      ville: formData.ville,
      adresseDiff: formData.adresseDiff,
      lieuNom: formData.lieuNom,
      lieuAdresse: formData.lieuAdresse,
      lieuCodePostal: formData.lieuCodePostal,
      lieuVille: formData.lieuVille,
      lieuPrecisions: formData.lieuPrecisions,
    };

    try {
      const pdfBytes = await generatePdf(personal, horses, images);
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
      alert("PDF généré avec succès !");
    } catch (error) {
      console.error("Erreur lors de la génération du PDF :", error);
      alert("Une erreur est survenue pendant la génération du PDF.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#001845] text-white px-6 py-3 rounded hover:bg-[#003366] transition"
    >
      Envoyer ma demande et recevoir une copie par email
    </button>
  );
}
