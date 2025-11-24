'use client';
import React, { useState, useRef, useEffect } from 'react';

const TachografInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const componentId = "tachograf-original-tools";

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const IconWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
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
        <header className="text-center mb-4">
          <h3 id={`${componentId}-heading`} className="text-2xl font-bold text-gray-800 mb-2">
            Używamy wyłącznie oryginalnych narzędzi do tachografów
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Wybierając nasze usługi, masz pewność, że serwis i kalibracja tachografów
            są przeprowadzane z największą precyzją. Używamy wyłącznie narzędzi i oprogramowania
            dostarczanych bezpośrednio od producentów, co gwarantuje pełną zgodność z normami
            i najwyższą jakość świadczonych usług.
          </p>
        </header>

        <div
          id={`${componentId}-panel`}
          role="region"
          aria-labelledby={`${componentId}-heading`}
          aria-hidden={!isOpen}
          style={{ maxHeight: isOpen ? `${contentHeight}px` : '0' }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <div ref={contentRef} className="pt-4 border-t border-gray-300">
            <div className="space-y-6">
              <article className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    Gwarancja precyzji i niezawodności
                  </h3>
                  <p className="text-gray-600">
                    Tachograf to serce każdego pojazdu ciężarowego, a jego prawidłowe działanie to podstawa
                    bezpieczeństwa i zgodności z przepisami. Korzystanie z oryginalnych narzędzi producentów,
                    takich jak VDO, Stoneridge czy Intellic, gwarantuje najwyższą dokładność kalibracji
                    i diagnozy, eliminując ryzyko błędów typowych dla zamienników.
                  </p>
                </div>
              </article>

              <article className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </IconWrapper>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Bezpieczeństwo i zgodność z regulacjami
                  </h3>
                  <p className="text-gray-600">
                    Branża transportowa jest ściśle regulowana, a kary za nieprawidłowości w tachografie
                    mogą być bardzo dotkliwe. Używanie niecertyfikowanego sprzętu serwisowego może prowadzić
                    do niezgodności z przepisami. Nasze oryginalne narzędzia to gwarancja zgodności
                    z aktualnymi normami prawnymi i branżowymi.
                  </p>
                </div>
              </article>

              <article className="flex items-start">
                <IconWrapper>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    Szybsza i bardziej efektywna obsługa
                  </h3>
                  <p className="text-gray-600">
                    Oryginalne oprogramowanie diagnostyczne pozwala nam szybko wykrywać i usuwać problemy.
                    Krótszy czas diagnozy oznacza mniejsze przestoje pojazdu i oszczędności dla Twojej firmy.
                    Dzięki nowoczesnym narzędziom każda wizyta w naszym serwisie przebiega sprawnie i profesjonalnie.
                  </p>
                </div>
              </article>

              <aside className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200" role="note">
                <p className="text-gray-700 text-center">
                  Wybierając nasz serwis, inwestujesz w jakość, bezpieczeństwo i spokój.
                  Nasze podejście opiera się na certyfikowanym sprzęcie i doświadczeniu,
                  które przekładają się na trwałe efekty i zadowolenie klientów.
                </p>
              </aside>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={`${componentId}-panel`}
            aria-label={isOpen ? 'Zwiń sekcję o oryginalnych narzędziach' : 'Rozwiń sekcję o oryginalnych narzędziach'}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 active:bg-blue-800 active:scale-95 font-semibold"
          >
            {isOpen ? 'ZWIŃ' : 'WIĘCEJ'}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TachografInfo;
