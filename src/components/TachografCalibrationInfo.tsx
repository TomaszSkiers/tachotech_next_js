import { useState } from "react";
import Image from "next/image";

const TachografCalibrationInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const legalDocuments = [
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180001480",
      title:
        "Ustawa z dnia 5 lipca 2018 r. o tachografach (Dz.U. 2018 poz. 1480, z późn. zm.)",
      description:
        "Podstawowy akt prawny regulujący wymagania dotyczące instalacji, kalibracji i kontroli tachografów.",
    },
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001037",
      title:
        "Obwieszczenie Marszałka Sejmu RP z dnia 28 czerwca 2024 r. – jednolity tekst ustawy o tachografach (Dz.U. 2024 poz. 1037)",
      description: "Aktualna wersja ustawy z naniesionymi zmianami.",
    },
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20190000878",
      title:
        "Rozporządzenie Ministra Przedsiębiorczości i Technologii z dnia 25 kwietnia 2019 r. (Dz.U. 2019 poz. 878)",
      description:
        "Określa wymagania dla urządzeń używanych do instalacji, sprawdzania, przeglądów i napraw tachografów cyfrowych.",
    },
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180001678",
      title:
        "Rozporządzenie Ministra Przedsiębiorczości i Technologii z dnia 30 sierpnia 2018 r. (Dz.U. 2018 poz. 1678)",
      description:
        "Dotyczy dodatkowych badań tachografów i ich doprowadzenia do prawidłowego działania.",
    },
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20190000606",
      title:
        "Rozporządzenie Ministra Przedsiębiorczości i Technologii z dnia 22 marca 2019 r. (Dz.U. 2019 poz. 606)",
      description:
        "Reguluje kwestie egzaminów z zakresu sprawdzania i przeglądów tachografów.",
    },
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20190000746",
      title:
        "Rozporządzenie Ministra Przedsiębiorczości i Technologii z dnia 12 kwietnia 2019 r. (Dz.U. 2019 poz. 746)",
      description:
        "Określa wysokość opłat za czynności administracyjne związane z tachografami.",
    },
    {
      href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20190000486",
      title:
        "Rozporządzenie Ministra Przedsiębiorczości i Technologii z dnia 7 marca 2019 r. (Dz.U. 2019 poz. 486)",
      description:
        "Reguluje zasady wydawania zezwoleń na działalność w zakresie instalacji, przeglądów i napraw tachografów.",
    },
  ];

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <header>
        <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Kalibracja Tachografu Cyfrowego
        </h3>
      </header>

      <section className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700">
          Kalibracja to po prostu <strong>„dostrojenie”</strong> tachografu do
          Twojej ciężarówki, żeby dokładnie pokazywał, ile jeździsz.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="tachograf-benefits">
        <h4 id="tachograf-benefits" className="sr-only">
          Informacje o kalibracji tachografu
        </h4>

        <div className="flex items-start">
          <span
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
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">Obowiązkowa</h5>
            <p className="text-gray-600">Prawo wymaga kalibracji tachografu.</p>
          </div>
        </div>

        <div className="flex items-start">
          <span
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">Okresowa</h5>
            <p className="text-gray-600">
              Należy ją wykonywać co <strong>2 lata</strong> (jak przegląd
              techniczny).
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span
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
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">
              Po awarii lub zmianach
            </h5>
            <p className="text-gray-600">
              Wymagana po wymianie opon, czujnika na skrzyni biegów lub samego
              tachografu.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </span>
          <div>
            <h5 className="font-semibold text-lg text-black">
              Tylko w autoryzowanym serwisie
            </h5>
            <p className="text-gray-600">
              Musi to wykonać warsztat ze specjalnym sprzętem i uprawnieniami –
              nie można zrobić tego samodzielnie.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-8 p-4 bg-gray-100 rounded-lg border-l-4 border-green-600">
        <h4 className="font-semibold text-gray-800 mb-2">Dlaczego to ważne?</h4>
        <p className="text-gray-700 mb-4">
          Kalibracja zapewnia, że Twoje dane pokazują <strong>prawdziwy</strong>{" "}
          czas jazdy i przejechane kilometry. To dowód, że jeździsz zgodnie z
          przepisami prawa.
        </p>

        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800">Więcej informacji</h4>
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
            {legalDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200 shadow-sm"
              >
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h5 className="font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-200 mb-1 text-sm leading-tight">
                    {doc.title}
                  </h5>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {doc.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
      {/* Zdjęcie tabliczki pomiarowej */}
      <div className="w-full max-w-4xl mx-auto mt-2">
        <div className="relative w-full aspect-video">
          <Image
            src="/calibration_plaque.png"
            alt="Tabliczka pomiarowa tachografu z danymi kalibracyjnymi"
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </div>
    </article>
  );
};

export default TachografCalibrationInfo;
