'use client'
import { useState } from "react";
import Image from "next/image";

const ParkingHeaterRepairInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Zamiast dokumentów prawnych, lepiej pasuje lista typowych usterek
  const commonIssues = [
    {
      title: "Urządzenie nie uruchamia się",
      description:
        "Brak reakcji na próbę włączenia, często związany z zasilaniem, świecą żarową lub zablokowanym sterownikiem.",
    },
    {
      title: "Silne dymienie (biały lub czarny dym)",
      description:
        "Zazwyczaj oznacza problem ze spalaniem, np. zanieczyszczony palnik, problem z dopływem paliwa lub niesprawną świecą.",
    },
    {
      title: "Ogrzewanie działa, ale słabo grzeje",
      description:
        "Problem może leżeć w pompie wody (ogrzewanie wodne), zablokowanym przepływie powietrza (ogrzewanie suche) lub ogólnym zakamienieniu/zanieczyszczeniu.",
    },
    {
      title: "Głośna praca lub nietypowe dźwięki",
      description:
        "Może wskazywać na zużycie łożysk wentylatora, problemy z silnikiem dmuchawy lub niestabilną pracą pompy paliwa.",
    },
    {
      title: "Wyświetlanie kodów błędów na sterowniku",
      description:
        "Urządzenie samo diagnozuje problem. Odczytujemy kody błędów i precyzyjnie lokalizujemy źródło usterki.",
    },
  ];

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <header>
        <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Naprawa Ogrzewania Postojowego
        </h3>
      </header>

      <section className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700">
          Sprawne ogrzewanie postojowe (np. Webasto, Eberspächer) to klucz do{" "}
          <strong>komfortu i bezpieczeństwa</strong> w zimne dni.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="heater-repair-benefits">
        <h4 id="heater-repair-benefits" className="sr-only">
          Informacje o naprawie ogrzewania postojowego
        </h4>

        <div className="flex items-start">
          <span
            className="bg-blue-100 p-2 rounded-full mr-3"
            aria-hidden="true"
          >
            {/* Ikona Diagnostyki (Clipboard) */}
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">
              Precyzyjna Diagnostyka
            </h5>
            <p className="text-gray-600">
              Używamy specjalistycznego sprzętu do odczytu błędów i znalezienia
              źródła problemu.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span
            className="bg-blue-100 p-2 rounded-full mr-3"
            aria-hidden="true"
          >
            {/* Ikona Serwisu Marek (Cog/Wrench) */}
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 001.066 1.066c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-1.066-1.066c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-1.066z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.879 14.879a3 3 0 01-4.242 0M9.121 9.121a3 3 0 014.242 0M14.879 9.121a3 3 0 00-4.242 0M9.121 14.879a3 3 0 004.242 0"
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">
              Serwis Wielu Marek
            </h5>
            <p className="text-gray-600">
              Naprawiamy urządzenia najpopularniejszych producentów, m.in.{" "}
              <strong>Webasto</strong> i <strong>Eberspächer</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span
            className="bg-blue-100 p-2 rounded-full mr-3"
            aria-hidden="true"
          >
            {/* Ikona Gwarancji (Shield) */}
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
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">
              Części i Gwarancja
            </h5>
            <p className="text-gray-600">
              Używamy oryginalnych części lub sprawdzonych zamienników. Na każdą
              naprawę udzielamy gwarancji.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span
            className="bg-blue-100 p-2 rounded-full mr-3"
            aria-hidden="true"
          >
            {/* Ikona Czasu (Clock) */}
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">Szybkie Terminy</h5>
            <p className="text-gray-600">
              Rozumiemy, jak ważny jest czas. Popularne usterki usuwamy często
              &quot;od ręki&quot;, minimalizując Twój postój.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-8 p-4 bg-gray-100 rounded-lg border-l-4 border-green-600">
        <h4 className="font-semibold text-gray-800 mb-2">Dlaczego to ważne?</h4>
        <p className="text-gray-700 mb-4">
          Sprawne ogrzewanie to nie tylko <strong>komfort</strong> pracy, ale
          też <strong>bezpieczeństwo</strong> (odmrożone szyby i lepsza
          widoczność) oraz <strong>oszczędność</strong> (mniejsze zużycie silnika
          dzięki ciepłym startom).
        </p>

        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800">Najczęstsze usterki</h4>
          <button
            onClick={toggleExpand}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            <span>{isExpanded ? "Zwiń" : "Rozwiń"}</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
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

        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-3 pt-2">
            {commonIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
              >
                <h5 className="font-semibold text-blue-700 mb-1 text-sm leading-tight">
                  {issue.title}
                </h5>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Zdjęcie naprawy ogrzewania */}
      <div className="w-full max-w-4xl mx-auto mt-2">
        <div className="relative w-full aspect-video">
          <Image
            src="/webasto_1.png" // Pamiętaj o zmianie ścieżki na właściwą
            alt="Naprawa ogrzewania postojowego Webasto / Eberspächer w serwisie"
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority // Możesz usunąć 'priority', jeśli to nie jest obraz LCP
          />
        </div>
      </div>
    </article>
  );
};

export default ParkingHeaterRepairInfo;