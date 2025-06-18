// app/components/formulaire/PersonalInfoForm.tsx
'use client';

import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/types/form-types';

type Props = {
  onNext: () => void;
};

export default function PersonalInfoForm({ onNext }: Props) {
  const { register, handleSubmit } = useFormContext<FormValues>();

  const onSubmit = () => {
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Vos informations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input {...register("nom")} placeholder="Nom" className="input" />
        <input {...register("prenom")} placeholder="Prénom" className="input" />
        <input {...register("taille")} type="number" placeholder="Taille (cm)" className="input" />
        <input {...register("taillePantalon")} placeholder="Taille de pantalon" className="input" />
        <input {...register("telephone")} placeholder="Téléphone" className="input" />
        <input {...register("email")} type="email" placeholder="Email" className="input" />
        <input {...register("adresse")} placeholder="Adresse" className="input" />
        <input {...register("codePostal")} placeholder="Code Postal" className="input" />
        <input {...register("ville")} placeholder="Ville" className="input" />

        <label className="flex items-center gap-2 col-span-2">
          <input type="checkbox" {...register("adresseDiff")} />
          L&apos;adresse du rendez-vous est différente
        </label>

        <input {...register("lieuNom")} placeholder="Nom du lieu" className="input" />
        <input {...register("lieuAdresse")} placeholder="Adresse du lieu" className="input" />
        <input {...register("lieuCodePostal")} placeholder="Code postal du lieu" className="input" />
        <input {...register("lieuVille")} placeholder="Ville du lieu" className="input" />
        <textarea {...register("lieuPrecisions")} placeholder="Précisions d'accès" className="input" />
      </div>

      <div className="text-center mt-6">
        <button type="submit" className="bg-[#001845] text-white px-6 py-3 rounded hover:bg-[#003366] transition">
          Valider mes informations
        </button>
      </div>
    </form>
  );
}
