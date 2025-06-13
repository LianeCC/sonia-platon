interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  return (
    <details className="mb-4 bg-white p-4 rounded shadow">
      <summary className="font-medium cursor-pointer">{question}</summary>
      <p className="mt-2 whitespace-pre-line">{answer}</p>
    </details>
  );
}
