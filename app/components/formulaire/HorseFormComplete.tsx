'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { useState } from 'react';

type Props = {
  index: number;
  disabled?: boolean;
};

export default function HorseFormComplete({ index, disabled = false }: Props) {
  type ChevalFieldNames =
    | 'nom'
    | 'age'
    | 'taille'
    | 'race'
    | 'marqueSelle'
    | 'modeleSelle'
    | 'disciplines'
    | 'raison'
    | 'problemesCheval'
    | 'problemesCavalier'
    | 'image';

  type ChevalErrors = Partial<Record<ChevalFieldNames, { message?: string }>>;
  type FormErrors = {
    chevaux?: ChevalErrors[];
    [key: string]: unknown;
  };

  const {
    register,
    control,
    formState: { errors },
    trigger
  } = useFormContext();

  const [validated, setValidated] = useState(disabled);

  const fieldName = (name: ChevalFieldNames) =>
    `chevaux.${index}.${name}` as const;

  const getFieldError = (name: ChevalFieldNames) =>
    (errors as FormErrors)?.chevaux?.[index]?.[name]?.message;

  const handleValidation = async () => {
    const isValid = await trigger(`chevaux.${index}`);
    if (isValid) {
      setValidated(true);
    }
  };

  return (
    <fieldset className="mb-8 border border-gray-300 rounded p-4">
      <legend className="font-semibold text-lg mb-4">Informations sur l&apos;équidé</legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register(fieldName('nom'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Nom du cheval"
          />
          {getFieldError('nom') && <p className="text-red-500 text-sm">{getFieldError('nom')}</p>}
        </div>

        <div>
          <input
            {...register(fieldName('age'), { required: 'Champ obligatoire' })}
            type="number"
            disabled={validated}
            className="input"
            placeholder="Âge"
          />
          {getFieldError('age') && <p className="text-red-500 text-sm">{getFieldError('age')}</p>}
        </div>

        <div>
          <input
            {...register(fieldName('taille'), { required: 'Champ obligatoire' })}
            type="number"
            disabled={validated}
            className="input"
            placeholder="Taille au garrot (cm)"
          />
          {getFieldError('taille') && <p className="text-red-500 text-sm">{getFieldError('taille')}</p>}
        </div>

        <div>
          <input
            {...register(fieldName('race'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Race"
          />
          {getFieldError('race') && <p className="text-red-500 text-sm">{getFieldError('race')}</p>}
        </div>

        <div>
          <input
            {...register(fieldName('marqueSelle'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Marque de la selle"
          />
          {getFieldError('marqueSelle') && <p className="text-red-500 text-sm">{getFieldError('marqueSelle')}</p>}
        </div>

        <div>
          <input
            {...register(fieldName('modeleSelle'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Modèle de la selle"
          />
          {getFieldError('modeleSelle') && <p className="text-red-500 text-sm">{getFieldError('modeleSelle')}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            {...register(fieldName('disciplines'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Disciplines pratiquées ou envisagées"
          />
          {getFieldError('disciplines') && <p className="text-red-500 text-sm">{getFieldError('disciplines')}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            {...register(fieldName('raison'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Motif de la demande"
          />
          {getFieldError('raison') && <p className="text-red-500 text-sm">{getFieldError('raison')}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            {...register(fieldName('problemesCheval'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Problèmes rencontrés par le cheval"
          />
          {getFieldError('problemesCheval') && <p className="text-red-500 text-sm">{getFieldError('problemesCheval')}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            {...register(fieldName('problemesCavalier'), { required: 'Champ obligatoire' })}
            disabled={validated}
            className="input"
            placeholder="Problèmes rencontrés par le cavalier"
          />
          {getFieldError('problemesCavalier') && <p className="text-red-500 text-sm">{getFieldError('problemesCavalier')}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 text-sm font-medium">Photo du cheval (profil)</label>
          <Controller
            name={fieldName('image')}
            control={control}
            rules={{ required: 'Image obligatoire' }}
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                disabled={validated}
                className="w-full"
              />
            )}
          />
          {getFieldError('image') && <p className="text-red-500 text-sm">{getFieldError('image')}</p>}
        </div>
      </div>

      <div className="text-right mt-6">
        {validated ? (
          <p className="text-green-600 font-semibold">✅ Enregistré</p>
        ) : (
          <button
            type="button"
            onClick={handleValidation}
            className="bg-[#001845] text-white px-4 py-2 rounded hover:bg-[#003366] transition"
          >
            Valider cet équidé
          </button>
        )}
      </div>
    </fieldset>
  );
}
