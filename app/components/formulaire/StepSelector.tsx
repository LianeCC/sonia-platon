type Props = {
  value: 'premiere' | 'suivi';
  onChange: (val: 'premiere' | 'suivi') => void;
};

export default function StepSelector({ value, onChange }: Props) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => onChange('premiere')}
        className={`px-4 py-2 rounded border ${value === 'premiere' ? 'bg-[#001845] text-white' : 'bg-white'}`}
      >
        Première visite
      </button>
      <button
        onClick={() => onChange('suivi')}
        className={`px-4 py-2 rounded border ${value === 'suivi' ? 'bg-[#001845] text-white' : 'bg-white'}`}
      >
        Visite de suivi
      </button>
    </div>
  );
}
