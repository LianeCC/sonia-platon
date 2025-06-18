'use client';

import { useFormContext, Controller } from 'react-hook-form';

type Props = {
  index: number;
  onNext: () => void;
};

export default function HorseFormLight({ index, onNext }: Props) {
  const {
    register,
    control,
  } = useFormContext();

  const fieldName = (name: 'nom' | 'raison' | 'image') =>
    `chevaux.${index}.${name}` as const;

  return (
    <fieldset className="mb-8 border border-gray-300 rounded p-4">
      <legend className="font-semibold text-lg mb-4">Équidé {index + 1}</legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register(fieldName('nom'))}
          className="input"
          placeholder="Nom du cheval"
        />
        <textarea
          {...register(fieldName('raison'))}
          className="input"
          placeholder="Motif du rendez-vous"
        />
        <div>
          <label className="block mb-1 text-sm font-medium">
            Photo du cheval (profil)
          </label>
          <Controller
            name={fieldName('image')}
            control={control}
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="w-full"
              />
            )}
          />
        </div>
      </div>

      <div className="text-right mt-6">
        <button
          type="button"
          onClick={onNext}
          className="bg-[#001845] text-white px-4 py-2 rounded hover:bg-[#003366] transition"
        >
          Valider cet équidé
        </button>
      </div>
    </fieldset>
  );
}
