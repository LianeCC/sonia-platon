'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues } from '@/types/form-types';
import PersonalInfoForm from './PersonalInfoForm';
import HorseFormsContainer from './HorseFormsContainer';
import FinalSubmitSection from './FinalSubmitSection';
import StepSelector from './StepSelector';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [rdvType, setRdvType] = useState<'premiere' | 'suivi'>('premiere');
  const methods = useForm<FormValues>({ defaultValues: { chevaux: [] } });

  const handlePersonalSubmit = () => setStep(2);
  const handleChevalCountSubmit = () => setStep(3);

  return (
    <FormProvider {...methods}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-[#001845] mb-8">Prise de rendez-vous</h1>
        <StepSelector value={rdvType} onChange={setRdvType} />

        {step === 1 && <PersonalInfoForm onNext={handlePersonalSubmit} />}
        {step === 2 && <HorseFormsContainer rdvType={rdvType} onNext={handleChevalCountSubmit} />}
        {step === 3 && <FinalSubmitSection rdvType={rdvType} />}
      </div>
    </FormProvider>
  );
}
