'use client';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import HorseFormComplete from './HorseFormComplete';
import HorseFormLight from './HorseFormLight';

type Props = {
  rdvType: 'premiere' | 'suivi';
  onNext: () => void;
};

type HorseState = {
  index: number;
  validated: boolean;
};

export default function HorseFormsContainer({ rdvType, onNext }: Props) {
  useFormContext();
  const [horses, setHorses] = useState<HorseState[]>([{ index: 0, validated: false }]);

  const handleAddHorse = () => {
    if (horses.length < 3) {
      const newIndex = horses.length;
      setHorses([...horses, { index: newIndex, validated: false }]);
    }
  };

  const handleRemoveHorse = (indexToRemove: number) => {
    setHorses((prev) => prev.filter((horse) => horse.index !== indexToRemove));
  };

  const allValidated = horses.every((h) => h.validated);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-[#001845]">Informations sur le(s) cheval(aux)</h2>

      {horses.map(({ index, validated }) => (
        <div key={index} className="relative border border-gray-200 rounded p-4 space-y-4">
          {rdvType === 'premiere' ? (
            <HorseFormComplete index={index} disabled={validated} />
          ) : (
            <HorseFormLight index={index} disabled={validated} />
          )}

          {horses.length > 1 && index !== 0 && (
            <button
              type="button"
              onClick={() => handleRemoveHorse(index)}
              className="absolute top-2 right-2 text-red-600 text-lg"
              title="Supprimer ce cheval"
            >
              ❌
            </button>
          )}

        </div>
      ))}

      {horses.length < 3 && (
        <button
          type="button"
          onClick={handleAddHorse}
          className="bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#001845] transition"
        >
          Ajouter un autre équidé
        </button>
      )}

      {horses.length === 3 && (
        <p className="text-sm text-red-600 mt-2">
          Pour plus de 3 équidés, merci de{' '}
          <a href="mailto:liane.coupat@gmail.com" className="underline">
            nous contacter
          </a>{' '}
          directement.
        </p>
      )}

      {allValidated && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onNext}
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Passer à l’envoi de la demande
          </button>
        </div>
      )}
    </div>
  );
}
