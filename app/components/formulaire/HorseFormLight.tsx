'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { useState } from 'react';

type Props = {
  index: number;
  onNext?: () => void;
  disabled?: boolean;
};

export default function HorseFormLight({ index, onNext }: Props) {
  const {
    register,
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  const [validated, setValidated] = useState(false);

  const fieldName = (name: 'nom' | 'raison' | 'image') =>
    `chevaux.${index}.${name}` as const;

  const getFieldError = (name: 'nom' | 'raison' | 'image') =>
    // @ts-expect-error – erreurs sur champ imbriqué indexé dynamiquement
    errors?.chevaux?.[index]?.[name]?.message;

  const handleValidation = async () => {
    const isValid = await trigger([
      fieldName('nom'),
      fieldName('raison'),
      fieldName('image'),
    ]);

    if (isValid) {
      setValidated(true);
      if (onNext) onNext();
    }
  };

  return (
    <fieldset className="mb-8 border border-gray-300 rounded p-4">
      <legend className="font-semibold text-lg mb-4">Informations sur l&apos;équidé</legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register(fieldName('nom'), { required: 'Champ obligatoire' })}
            className="input"
            placeholder="Nom du cheval"
            disabled={validated}
          />
          {getFieldError('nom') && <p className="text-red-500 text-sm">{getFieldError('nom')}</p>}
        </div>

        <div>
          <textarea
            {...register(fieldName('raison'), { required: 'Champ obligatoire' })}
            className="input"
            placeholder="Motif du rendez-vous"
            disabled={validated}
          />
          {getFieldError('raison') && <p className="text-red-500 text-sm">{getFieldError('raison')}</p>}
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
                className="w-full"
                disabled={validated}
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
