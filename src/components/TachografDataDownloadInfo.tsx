import Image from "next/image";

const TachografDataDownloadInfo = () => {
  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <header>
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Pobieranie Danych z Tachografu
        </h1>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            To <span className="font-semibold">obowiązkowy proces</span>{" "}
            regularnego ściągania zapisów z tachografu oraz karty kierowcy przez firmę transportową.
          </p>
        </div>
      </header>

      <section aria-labelledby="obowiazki-heading">
        <h2 id="obowiazki-heading" className="sr-only">
          Obowiązki związane z pobieraniem danych
        </h2>

        <ul className="space-y-4 list-none">
          

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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">
                Obowiązek firmy
              </h3>
              <p className="text-gray-600">
                Pobieraj dane z <span className="font-bold"> kart kierowców </span> co najmniej
                <span className="font-bold"> raz na 28 dni</span> oraz dane <span className="font-bold"> z tachografu</span> co najmniej <span className="font-bold">raz na 90 dni</span>.
              </p>
            </div>
          </li>

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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">
                Przechowywanie
              </h3>
              <p className="text-gray-600">
                Przechowuj dane przez{" "}
                <span className="font-medium">12 miesięcy</span> i udostępniaj
                na żądanie kontroli.
              </p>
            </div>
          </li>

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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Twoje alibi</h3>
              <p className="text-gray-600">
                Dane są dowodem przestrzegania przepisów czasu pracy i jazdy.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <aside
        aria-labelledby="porady-heading"
        className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600"
      >
        <h2 id="porady-heading" className="font-semibold text-blue-800 mb-2">
          Gdzie pobierać dane?
        </h2>
        <p className="text-gray-700 mb-3">
          Aby mieć{" "}
          <span className="font-medium text-blue-800">
            pewność poprawnego pobrania i przechowania danych
          </span>
          , skorzystaj z usług{" "}
          <span className="font-medium text-blue-800">
            autoryzowanego serwisu obsługi tachografów
          </span>
          .
        </p>
        <p className="text-gray-700">
          Profesjonalny serwis nie tylko prawidłowo pobierze Twoje dane, ale
          również
          <span className="font-medium text-blue-800">
            {" "}
            zapewni ich bezpieczne archiwizowanie
          </span>{" "}
          oraz
          <span className="font-medium text-blue-800">
            {" "}
            pomoże w interpretacji
          </span>{" "}
          w przypadku kontroli.
        </p>
      </aside>

      {/** Zdjęcie pobierania danych z tachografu */}
      <div className="w-full max-w-4xl mx-auto mt-2">
        <div className="relative w-full aspect-video">
          <Image
            src="/data_download.png"
            alt="Opis mojego obrazka"
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>
    </article>
  );
};
export default TachografDataDownloadInfo;
