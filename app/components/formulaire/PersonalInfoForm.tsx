// app/components/formulaire/PersonalInfoForm.tsx
'use client';

import { useFormContext, useWatch } from 'react-hook-form';

type Props = {
  onNext: () => void;
};

export default function PersonalInfoForm({ onNext }: Props) {
  const {
    register,
    trigger,
    control,
    formState: { errors },
  } = useFormContext();

  const adresseDiff = useWatch({ control, name: 'adresseDiff' });

  const handleValidation = async () => {
    const baseFields = [
      'nom',
      'prenom',
      'taille',
      'taillePantalon',
      'telephone',
      'email',
      'adresse',
      'ville',
      'codePostal',
      'nomLieu',
    ];

    const altFields = adresseDiff
      ? ['lieuNom', 'lieuAdresse', 'lieuCodePostal', 'lieuVille', 'lieuPrecisions']
      : [];

    const isValid = await trigger([...baseFields, ...altFields]);
    if (isValid) {
      onNext();
    }
  };

  const renderError = (field: keyof typeof errors) =>
    errors[field] ? (
      <p className="text-red-500 text-sm">{errors[field]?.message as string}</p>
    ) : null;

  return (
    <fieldset className="space-y-4 mb-10 border border-gray-300 rounded p-4">
      <legend className="text-xl font-semibold mb-4">Vos informations</legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input {...register('nom', { required: 'Champ obligatoire' })} className="input" placeholder="Nom" />
          {renderError('nom')}
        </div>

        <div>
          <input {...register('prenom', { required: 'Champ obligatoire' })} className="input" placeholder="Prénom" />
          {renderError('prenom')}
        </div>

        <div>
          <input {...register('taille', { required: 'Champ obligatoire' })} type="number" className="input" placeholder="Taille (cm)" />
          {renderError('taille')}
        </div>

        <div>
          <input {...register('taillePantalon', { required: 'Champ obligatoire' })} className="input" placeholder="Taille de pantalon" />
          {renderError('taillePantalon')}
        </div>

        <div>
          <input {...register('telephone', { required: 'Champ obligatoire' })} className="input" placeholder="Téléphone" />
          {renderError('telephone')}
        </div>

        <div>
          <input {...register('email', { required: 'Champ obligatoire' })} className="input" placeholder="Email" />
          {renderError('email')}
        </div>

        <div className="md:col-span-2">
          <input {...register('adresse', { required: 'Champ obligatoire' })} className="input" placeholder="Adresse" />
          {renderError('adresse')}
        </div>

        <div>
          <input {...register('ville', { required: 'Champ obligatoire' })} className="input" placeholder="Ville" />
          {renderError('ville')}
        </div>

        <div>
          <input {...register('codePostal', { required: 'Champ obligatoire' })} className="input" placeholder="Code postal" />
          {renderError('codePostal')}
        </div>

        <div className="md:col-span-2">
          <input {...register('nomLieu', { required: 'Champ obligatoire' })} className="input" placeholder="Nom du lieu (ex: Écurie des Pins)" />
          {renderError('nomLieu')}
        </div>
      </div>

      {/* Checkbox pour adresse différente */}
      <div>
        <label className="text-sm font-medium">Adresse de rendez-vous différente ?</label>
        <input type="checkbox" {...register('adresseDiff')} className="ml-2" />
      </div>

      {/* Champs alternatifs visibles si coche */}
      {adresseDiff && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              {...register('lieuNom', { required: 'Champ obligatoire' })}
              placeholder="Nom du lieu"
              className="input"
            />
            {renderError('lieuNom')}
          </div>
          <div>
            <input
              {...register('lieuAdresse', { required: 'Champ obligatoire' })}
              placeholder="Adresse alternative"
              className="input"
            />
            {renderError('lieuAdresse')}
          </div>
          <div>
            <input
              {...register('lieuCodePostal', { required: 'Champ obligatoire' })}
              placeholder="Code postal alternatif"
              className="input"
            />
            {renderError('lieuCodePostal')}
          </div>
          <div>
            <input
              {...register('lieuVille', { required: 'Champ obligatoire' })}
              placeholder="Ville alternative"
              className="input"
            />
            {renderError('lieuVille')}
          </div>
          <div className="md:col-span-2">
            <input
              {...register('lieuPrecisions', { required: 'Champ obligatoire' })}
              placeholder="Précisions accès"
              className="input"
            />
            {renderError('lieuPrecisions')}
          </div>
        </div>
      )}

      <div className="text-right mt-6">
        <button
          type="button"
          onClick={handleValidation}
          className="bg-[#001845] text-white px-4 py-2 rounded hover:bg-[#003366] transition"
        >
          Continuer
        </button>
      </div>
    </fieldset>
  );
}
