'use client';

import saddleData from '@/data/saddle-fitting.json';

export default function SaddleFittingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#001845]">
      <h1 className="text-3xl font-bold text-center mb-12">Le Saddle Fitting : tout ce qu’il faut savoir</h1>

      {saddleData.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>

          {section.content && (
            <p className="whitespace-pre-line leading-relaxed text-justify">
              {section.content}
            </p>
          )}

          {section.faq && (
            <div className="space-y-6 mt-4">
              {section.faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-medium">{item.question}</h3>
                  <p className="text-justify">{item.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
