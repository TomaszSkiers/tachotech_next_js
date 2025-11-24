"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ServiceAccordionProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  text: string;
}

export default function ServiceAccordion({
  children,
  icon,
  text,
}: ServiceAccordionProps) {
  const [showMore, setShowMore] = useState(false);
  const id = text.toLowerCase().replace(/\s+/g, "-"); // unikalne ID np. "kalibracja"

  return (
    <li
      className="bg-gradient-to-b from-white to-gray-400 rounded-lg border-t-2 border-red-600 mt-1"
      role="listitem"
    >
      <div className="flex justify-between items-center">
        {/* 🔹 Nagłówek sekcji z ID dla aria-labelledby */}
        {icon}
        <h3
          id={`accordion-title-${id}`}
          className="text-center text-lg tracking-wide font-semibold text-black"
        >
          {text}
        </h3>

        {/* 🔹 Przycisk z pełnym wsparciem dla czytników ekranu */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="
            flex items-center gap-2 
            px-4 py-2 mr-2
            bg-red-700 text-white rounded-full  
            transition-all duration-300 
            hover:bg-red-800 
            active:bg-red-900 
            active:scale-95
            text-sm 
          "
          aria-expanded={showMore}
          aria-controls={`accordion-panel-${id}`}
          aria-label={
            showMore ? `Zwiń sekcję ${text}` : `Rozwiń sekcję ${text}`
          }
        >
          {showMore ? "MNIEJ" : "WIĘCEJ"}
          <ChevronDown
            className={`hidden sm:block transition-transform duration-300 ${
              showMore ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* 🔹 Panel rozwijany z regionem i opisem dla screen readerów */}
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-hidden={!showMore}
        className={`
          grid transition-all duration-500 ease-in-out
          ${
            showMore
              ? "grid-rows-[1fr] opacity-100 mt-3"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden sm:pb-2">{children}</div>
      </div>
    </li>
  );
}
