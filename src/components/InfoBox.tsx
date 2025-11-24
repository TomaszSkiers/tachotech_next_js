"use client";

import { ReactNode, useState } from "react";

interface InfoBoxProps {
  icon: ReactNode;
  text: string;
  children?: ReactNode;
}

export default function InfoBox({ icon, text, children }: InfoBoxProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="opacity-95 w-full max-w-4xl mx-auto border-t-2 border-red-700 p-4 grid grid-cols-1 bg-gradient-to-r from-gray-50 to-white shadow-xl rounded-lg transition-all duration-300 hover:shadow-2xl">
      {/* NAGŁÓWEK/ELEMENT WIDOCZNY */}
      <div className="flex items-center justify-between gap-4">
        {/* Kontener na Ikonę (ikonę renderujemy bezpośrednio z propa) */}
        <div className="flex-shrink-0">{icon}</div>

        {/* Tekst Opisu */}
        <p className="font-goldman text-lg tracking-wide flex-grow text-left text-gray-800 font-semibold">
          {text}
        </p>

        {/* Przycisk Rozwijania */}
        <button
          className="px-4 py-1 bg-red-700 text-white font-goldman rounded-full shadow-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105 flex-shrink-0"
          onClick={() => setShowMore(!showMore)}
          aria-expanded={showMore}
          aria-controls="info-box-details"
        >
          {showMore ? "MNIEJ" : "WIĘCEJ"}
        </button>
      </div>

      {/* SEKCJA ROZWIJANA (Accordion Body) */}
      <div
        id="info-box-details"
        // Logika grid-rows dla animacji:
        // grid-rows-[0fr] -> wysokość 0, ukryte
        // grid-rows-[1fr] -> wysokość dynamiczna, widoczne
        className={`
          grid transition-all duration-500 ease-in-out
          ${
            showMore
              ? "grid-rows-[1fr] opacity-100 pt-4"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden p-3 bg-white/70 border border-gray-200 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
