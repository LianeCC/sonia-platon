import Accordion from "./Accordion";
import faqData from "@/data/faq.json";

export default function FAQ() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Saddle fitting FAQ</h2>
      <div className="max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}
