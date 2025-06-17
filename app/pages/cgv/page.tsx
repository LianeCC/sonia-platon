'use client';

import { useState } from "react";
import cgvData from "@/data/cgv.json";
import ReactMarkdown from "react-markdown";

type CGVType = {
  particuliers: string;
  professionnels: string;
};

const cgv = cgvData as CGVType;

export default function CGVPage() {
  const [type, setType] = useState<"particuliers" | "professionnels">("particuliers");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-[#001845] mb-8">Conditions Générales de Vente</h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded border ${type === "particuliers" ? "bg-[#001845] text-white" : "bg-white text-[#001845] border-[#001845]"}`}
          onClick={() => setType("particuliers")}
        >
          Particuliers
        </button>
        <button
          className={`px-4 py-2 rounded border ${type === "professionnels" ? "bg-[#001845] text-white" : "bg-white text-[#001845] border-[#001845]"}`}
          onClick={() => setType("professionnels")}
        >
          Professionnels
        </button>
      </div>

      <div className="bg-white p-6 border rounded whitespace-pre-line text-justify text-sm sm:text-base">
        <ReactMarkdown>{cgv[type]}</ReactMarkdown>
      </div>
    </div>
  );
}
