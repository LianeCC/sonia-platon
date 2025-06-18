'use client';

import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import HorseFormComplete from './HorseFormComplete';
import HorseFormLight from './HorseFormLight';

type Props = {
  rdvType: 'premiere' | 'suivi';
  onNext: () => void;
};

export default function HorseFormsContainer({ rdvType, onNext }: Props) {
  const { getValues } = useFormContext();
  const [chevalIndex, setChevalIndex] = useState(0);
  const chevalCount = getValues().chevaux?.length || 1;

  const handleNextCheval = () => {
    if (chevalIndex + 1 < chevalCount) {
      setChevalIndex((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <>
      {rdvType === 'premiere' ? (
        <HorseFormComplete index={chevalIndex} onNext={handleNextCheval} />
      ) : (
        <HorseFormLight index={chevalIndex} onNext={handleNextCheval} />
      )}
    </>
  );
}
