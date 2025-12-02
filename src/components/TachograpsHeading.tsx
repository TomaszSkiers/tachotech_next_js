import Image from "next/image"


export default function TachographsHeading () {
    return (
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-gray-300 rounded-lg border-t-4 border-red-600 py-1 shadow-lg mb-6">
            {/* HERO */}
        <section className="text-center mb-6 px-2 pt-6">
          <h1 className="text-black text-4xl font-extrabold mb-4 drop-shadow-sm">
            Tachografy cyfrowe – montaż, kalibracja, legalizacja i serwis
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Oferujemy kompleksowe usługi związane z tachografami cyfrowymi dla pojazdów ciężarowych, autobusów oraz flot firmowych. Wykonujemy profesjonalny montaż, kalibrację, okresową legalizację oraz pełną obsługę serwisową urządzeń. Zapewniamy szybkie terminy, zgodność z obowiązującymi przepisami oraz rzetelne wsparcie techniczne dla kierowców i firm transportowych.
          </p>

          {/** Zdjęcie pobierania danych z tachografu */}
                <div className="w-full max-w-4xl mx-auto mt-2">
                  <div className="relative w-full aspect-video">
                    <Image
                      src="/home_background.png"
                      alt="zdjęcie serwisu tachografów"
                      fill
                      className="object-cover rounded-lg shadow-md"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                </div>
        </section>
        </div>
    )
}