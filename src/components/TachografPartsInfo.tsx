import Image from "next/image";

const TachografPartsInfo = () => {
  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-goldman">
      <header className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-800">
          Części zamienne do tachografów – zawsze pod ręką
        </h3>
      </header>

      <section
        aria-labelledby="tachograf-stock"
        className="bg-green-50 p-4 rounded-lg mb-6 border-l-4 border-green-500"
      >
        <h3 id="tachograf-stock" className="sr-only">
          Dostępność części tachografów
        </h3>
        <p className="text-gray-700">
          Nie czekaj na dostawę – wszystkie niezbędne części zamienne do
          tachografów mamy{" "}
          <span className="font-semibold text-green-700">
            od ręki, od A do Z
          </span>
          .
        </p>
      </section>

      <section aria-labelledby="parts-offer" className="mb-8">
        <h3
          id="parts-offer"
          className="font-semibold text-lg text-gray-800 mb-3"
        >
          Co dokładnie posiadamy?
        </h3>
        <p className="text-gray-600 mb-4">
          Kompletny asortyment oryginalnych części do wszystkich popularnych
          modeli tachografów.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          aria-label="Oferta części do tachografów"
        >
          {/* --- 1 --- */}
          <figure className="flex flex-col bg-gray-200 p-3 rounded-lg">
            <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
              Nowe tachografy gotowe do montażu
            </figcaption>
            <div className="relative pt-[56.25%] w-full mt-2">
              <Image
                src="/vdo_1_tachograph.png"
                alt="Nowy tachograf VDO gotowy do montażu"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-md"
              />
            </div>
          </figure>

          {/* --- 2 --- */}
          <figure className="flex flex-col bg-gray-200 p-3 rounded-lg">
            <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
              Czujniki ruchu na skrzynię biegów
            </figcaption>
            <div className="relative pt-[56.25%] w-full mt-2">
              <Image
                src="/AT6B8834-1.png"
                alt="Czujnik prędkości montowany na skrzyni biegów"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </figure>

          {/* --- 3 --- */}
          <figure className="flex flex-col bg-gray-200 p-3 rounded-lg">
            <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
              Kable i złącza
            </figcaption>
            <div className="relative pt-[56.25%] w-full mt-2">
              <Image
                src="/kable_to_tachografu.jpeg"
                alt="Oryginalne kable i złącza do tachografu"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </figure>

          {/* --- 4 --- */}
          <figure className="flex flex-col bg-gray-200 p-3 rounded-lg">
            <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
              Akcesoria lokalizacyjne, moduły GPS
            </figcaption>
            <div className="relative pt-[56.25%] w-full mt-2">
              <Image
                src="/cables_tacho.webp"
                alt="Moduły GPS i akcesoria do lokalizacji tachografów"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </figure>

          {/* --- 5 --- */}
          <figure className="flex flex-col bg-gray-200 p-3 rounded-lg">
            <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
              Adaptery M1N1
            </figcaption>
            <div className="relative pt-[56.25%] w-full mt-2">
              <Image
                src="/M1N1_1c,.png"
                alt="Adapter M1N1 do podłączenia tachografu"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </figure>

          {/* --- 6 --- */}
          <figure className="flex flex-col bg-gray-200 p-3 rounded-lg">
            <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
              Zestawy tachografów
            </figcaption>
            <div className="relative pt-[56.25%] w-full mt-2">
              <Image
                src="/zestaw_tachografu_vdo.jpg"
                alt="Kompletny zestaw tachografu VDO z osprzętem"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-2xl"
              />
            </div>
          </figure>
        </div>
      </section>

      <section aria-labelledby="why-choose-us" className="mb-6">
        <h3
          id="why-choose-us"
          className="font-semibold text-lg text-gray-800 mb-3"
        >
          Dlaczego warto wybrać nasze części?
        </h3>

        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg
                className="w-5 h-5 text-green-600"
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
              <h4 className="font-medium text-gray-700">Oryginalność i zgodność</h4>
              <p className="text-gray-600 text-sm">
                Wszystkie części są oryginalne lub certyfikowane, co gwarantuje
                pełną zgodność i legalność.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg
                className="w-5 h-5 text-green-600"
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
              <h4 className="font-medium text-gray-700">Zero przestojów</h4>
              <p className="text-gray-600 text-sm">
                Brakujące części często paraliżują pracę. U nas tego unikniesz –
                dostaniesz wszystko od razu.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg
                className="w-5 h-5 text-green-600"
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
              <h4 className="font-medium text-gray-700">Gwarancja jakości</h4>
              <p className="text-gray-600 text-sm">
                Każda część jest objęta gwarancją, a jej montaż wykonany według
                zatwierdzonej procedury.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Ekspercka pomoc</h4>
              <p className="text-gray-600 text-sm">
                Pomagamy dobrać idealne podzespoły do Twojego pojazdu.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <footer className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-semibold text-blue-800 mb-2">Podsumowanie:</h3>
        <p className="text-blue-700">
          Awaria nie musi oznaczać dni straconych na czekanie. Dzięki naszemu{" "}
          <span className="font-medium">pełnemu magazynowi części</span> naprawa
          Twojego tachografu odbędzie się{" "}
          <span className="font-medium">
            szybko, sprawnie i bez zbędnych opóźnień
          </span>
          . Po prostu przyjeżdżasz, a my mamy wszystko, czego potrzebujesz.
        </p>
      </footer>
    </article>
  );
};

export default TachografPartsInfo;
