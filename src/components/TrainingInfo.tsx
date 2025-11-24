import React, { useState, useRef, useEffect } from "react";

const TrainingInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const componentId = "training-updates";

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0" aria-hidden="true">
      {children}
    </div>
  );

  return (
    <section
      aria-labelledby={`${componentId}-heading`}
      className="bg-gradient-to-b from-white to-gray-400 rounded-lg border-t-2 border-blue-500 shadow-md mt-5 mx-auto max-w-4xl"
    >
      <div className="p-6">
        <div className="text-center mb-4">
          <h3
            id={`${componentId}-heading`}
            className="text-2xl font-bold text-gray-800 mb-2"
          >
            Szkolenia techniczne i rozwój – zawsze o krok przed konkurencją
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            W branży transportowej liczy się nie tylko doświadczenie, ale i
            znajomość najnowszych technologii. Dlatego nasi technicy
            regularnie uczestniczą w szkoleniach producentów tachografów, takich jak
            <strong> VDO, Stoneridge i Intellic</strong>.
          </p>
        </div>

        {/* 🔹 Sekcja rozwijana */}
        <div
          id={`${componentId}-panel`}
          role="region"
          aria-labelledby={`${componentId}-heading`}
          aria-hidden={!isOpen}
          style={{ maxHeight: isOpen ? `${contentHeight}px` : "0" }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <div ref={contentRef} className="pt-4 border-t border-gray-300">
            <div className="space-y-6">
              <article className="flex items-start">
                <IconWrapper>
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13.003m0-13.003a2.997 2.997 0 00-2.99-2.99h-2.115a2.997 2.997 0 00-2.99 2.99v13.003a2.997 2.997 0 002.99 2.99h2.115a2.997 2.997 0 002.99-2.99m0-13.003a2.997 2.997 0 012.99-2.99h2.115a2.997 2.997 0 012.99 2.99v13.003a2.997 2.997 0 01-2.99 2.99h-2.115a2.997 2.997 0 01-2.99-2.99"
                    />
                  </svg>
                </IconWrapper>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Szkolenia u producentów tachografów
                  </h3>
                  <p className="text-gray-600">
                    Nasi technicy uczą się bezpośrednio od producentów, dzięki czemu
                    mogą pracować z urządzeniami zgodnie z najwyższymi standardami
                    jakości i bezpieczeństwa. Uczestniczymy w szkoleniach certyfikowanych przez
                    <strong> VDO, Stoneridge oraz Intellic</strong>.
                  </p>
                </div>
              </article>

              <article className="flex items-start">
                <IconWrapper>
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </IconWrapper>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Technologia i prawo – zawsze aktualna wiedza
                  </h3>
                  <p className="text-gray-600">
                    Dzięki regularnym szkoleniom jesteśmy zawsze przygotowani na
                    zmiany w przepisach, aktualizacje oprogramowania i nowe modele
                    tachografów. Gdy pojawia się nowa technologia – my już ją znamy.
                  </p>
                </div>
              </article>

              <article className="flex items-start">
                <IconWrapper>
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </IconWrapper>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Gwarancja jakości i bezpieczeństwa serwisu
                  </h3>
                  <p className="text-gray-600">
                    Przeszkolony personel to gwarancja, że każda naprawa tachografu
                    jest zgodna z rygorystycznymi normami producentów i przepisami
                    europejskimi. Dbamy o precyzję, bezpieczeństwo i wiarygodność danych.
                  </p>
                </div>
              </article>

              <div
                className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                role="note"
              >
                <p className="text-gray-700 text-center">
                  Nasze zaangażowanie w ciągły rozwój techniczny to Twoja pewność,
                  że powierzasz swój tachograf w ręce ekspertów. Jesteśmy
                  serwisem, który stale się uczy, by zapewniać najwyższą jakość usług.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Przycisk rozwijania */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={`${componentId}-panel`}
            aria-label={
              isOpen
                ? "Zwiń sekcję o szkoleniach tachografowych"
                : "Rozwiń sekcję o szkoleniach tachografowych"
            }
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 active:bg-blue-800 active:scale-95 font-semibold"
          >
            {isOpen ? "ZWIŃ" : "WIĘCEJ"}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingInfo;
