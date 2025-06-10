import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Saddle fitting FAQ</h2>
      <div className="max-w-2xl mx-auto">
        {[1, 2, 3, 4, 5].map((i) => (
          <Accordion
            key={i}
            question={`Question fréquente ${i}`}
            answer={`Réponse détaillée à la question ${i}...`}
          />
        ))}
      </div>
    </section>
  );
}