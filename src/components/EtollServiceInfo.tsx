"use client";
import { useState } from "react";
import Image from "next/image";

const ETollServiceInfo = () => {
  const [showDevices, setShowDevices] = useState(false);

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">

      <header>
        <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Usługi e-TOLL – Urządzenia, Montaż i Pełne Wsparcie
        </h3>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            Oferujemy kompleksową obsługę systemu{" "}
            <span className="font-semibold">e-TOLL</span> – sprzedaż urządzeń,
            montaż oraz pełne uruchomienie.
          </p>
        </div>
      </header>

      <section aria-labelledby="uslugi-heading">
        <h4 id="uslugi-heading" className="sr-only">
          Zakres usług e-TOLL
        </h4>

        <ul className="space-y-4 list-none">

          {/* Sprzedaż urządzeń */}
          <li className="flex items-start">
            <div
              className="bg-blue-100 p-2 rounded-full mr-3"
              aria-hidden="true"
            >
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
                  d="M9 3h6a2 2 0 012 2v2H7V5a2 2 0 012-2zm-3 6h12l1 11H5L6 9zm3 4h.01M15 13h.01"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-lg text-black">
                Sprzedaż urządzeń e-TOLL
              </h4>
              <p className="text-gray-600 mb-3">
                Dostarczamy certyfikowane urządzenia pokładowe gotowe do pracy z e-TOLL.
              </p>

              {/* Przyciski */}
              <button
                onClick={() => setShowDevices((p) => !p)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition text-sm"
              >
                Rodzaje urządzeń
              </button>

              {/* Sekcja rozwijana */}
              {showDevices && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 text-gray-700 space-y-2">
                  <h5 className="font-semibold text-blue-800 mb-2">
                    Dostępne urządzenia:
                  </h5>
              {/* tu trzeba utworzyć dwa ładne boksy ze zdjęciami i już, zostawić dwie pozycje */}
                  <ul className="pl-5 space-y-1">
                    
                    <li>✔ Zestawy OBU z zasilaniem stałym</li>
                    <li>✔ Zestawy OBU z gniazda zapalniczki</li>
                   
                  </ul>
                </div>
              )}
            </div>
          </li>

          {/* Montaż */}
          <li className="flex items-start">
            <div
              className="bg-blue-100 p-2 rounded-full mr-3"
              aria-hidden="true"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M6 7l2 12h8l2-12M10 11h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">
                Profesjonalny montaż w pojeździe
              </h4>
              <p className="text-gray-600">
                Montujemy urządzenia zgodnie z wymaganiami technicznymi i najlepszymi praktykami.
              </p>
            </div>
          </li>

          {/* Wsparcie i konfiguracja */}
          <li className="flex items-start">
            <div
              className="bg-blue-100 p-2 rounded-full mr-3"
              aria-hidden="true"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10c0-3.314-2.686-6-6-6S6 6.686 6 10c0 2.22 1.21 4.153 3 5.197V19l3-1 3 1v-3.803c1.79-1.044 3-2.977 3-5.197z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">
                Uruchomienie i konfiguracja
              </h4>
              <p className="text-gray-600">
                Pomagamy we wdrożeniu, rejestracji i konfiguracji urządzenia w systemie e-TOLL.
              </p>
            </div>
          </li>

        </ul>
      </section>

      <aside
        aria-labelledby="wsparcie-heading"
        className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600"
      >
        <h4 id="wsparcie-heading" className="font-semibold text-blue-800 mb-2">
          Dlaczego warto skorzystać z naszej obsługi?
        </h4>

        <p className="text-gray-700 mb-3">
          Oferujemy{" "}
          <span className="font-medium text-blue-800">kompletną obsługę</span> – od urządzenia, przez montaż, po pełne uruchomienie.
        </p>

        <p className="text-gray-700">
          Twoje pojazdy są{" "}
          <span className="font-medium text-blue-800">gotowe do jazdy</span> bez ryzyka błędów i niepotrzebnych kosztów.
        </p>
      </aside>

      {/* Zdjęcie */}
      <div className="w-full max-w-4xl mx-auto mt-2">
        <div className="relative w-full aspect-video">
          <Image
            src="/etoll_service.png"
            alt="Urządzenia i obsługa systemu e-TOLL"
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>

    </article>
  );
};

export default ETollServiceInfo;
