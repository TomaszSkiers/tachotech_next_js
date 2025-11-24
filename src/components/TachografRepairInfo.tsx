import Image from "next/image";

// todo: poprawić zdjęcia i grid, zastanowić się jak wyświetlać przedmioty i opisy na małych ekranach

const TachografRepairInfo = () => {
  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <header className="text-center mb-6">
        <h3 className="text-3xl font-bold text-blue-800">
          Naprawa tachografu
        </h3>
        
      </header>

      <section className="bg-blue-50 p-4 rounded-lg mb-6" aria-label="Wprowadzenie">
        <p className="text-gray-700">
          Naprawa tachografu to{" "}
          <strong>niezwłoczna i obowiązkowa reakcja na każdą usterkę</strong>.
          Nie można jej ignorować ani odkładać.
        </p>
      </section>

      <section aria-label="Najczęstsze pytania o naprawę tachografu">
        <ul className="space-y-5">
          <li className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">
                Kiedy trzeba go naprawić?
              </h3>
              <p className="text-gray-600">
                Gdy tylko cokolwiek przestanie działać poprawnie – wyświetlacz,
                przyciski, pojawiają się błędy lub urządzenie nie włącza się.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">
                Kto może naprawiać?
              </h3>
              <p className="text-gray-600">
                <strong>Tylko uprawnione warsztaty</strong> z odpowiednimi
                zezwoleniami. Zwykły mechanik ani elektryk nie mogą tego robić.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">
                Co jest najważniejsze?
              </h3>
              <p className="text-gray-600">
                Każda naprawa kończy się{" "}
                <strong>obowiązkowym przeglądem i kalibracją</strong>.
                Nawet po wymianie drobnej części tachograf musi być ponownie
                dostrojony, inaczej staje się nielegalny.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">
                Dlaczego to takie ważne?
              </h3>
              <p className="text-gray-600">
                Bo tylko poprawnie działający tachograf jest{" "}
                <strong>Twoim dowodem i alibi</strong> podczas kontroli.
                Wadliwe urządzenie grozi wysokimi mandatami.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500"
        aria-label="Podsumowanie"
      >
        <h3 className="font-semibold text-yellow-800 mb-2">Podsumowanie:</h3>
        <p className="text-yellow-700">
          Awaria? Od razu jedź do{" "}
          <strong>autoryzowanego serwisu tachografów</strong>. Tylko oni mogą
          naprawić urządzenie zgodnie z prawem i wystawić odpowiednie dokumenty.
          Nie ryzykuj samodzielnych napraw – to się nie opłaca.
        </p>
      </section>

      <figure className="w-full max-w-4xl mx-auto mt-6">
        <div className="relative w-full aspect-video">
          <Image
            src="/tachograph_repair_info.png"
            alt="Technik dokonujący naprawy tachografu w autoryzowanym serwisie"
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        <figcaption className="text-center text-gray-600 mt-2">
          Autoryzowany serwis tachografów – naprawa z gwarancją legalności
        </figcaption>
      </figure>
    </article>
  );
};

export default TachografRepairInfo;
