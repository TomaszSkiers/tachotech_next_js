import Image from "next/image";
import { ShieldCheck, RadioTower, HandHelping } from "lucide-react";

/* Lista urządzeń */
const devices = [
  {
    title: "OBU – zasilanie stałe",
    img: "/FMC880-OBU.png",
    alt: "Urządzenie OBU do systemu e-TOLL – zasilanie stałe",
  },
  {
    title: "OBU – gniazdo zapalniczki",
    img: "/FMC880-OBU_zapalniczka.png",
    alt: "Urządzenie OBU e-TOLL do samochodu – zasilanie z gniazda zapalniczki",
  },
];

export default function EtollPage() {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-gray-300 rounded-lg border-t-4 border-red-600 py-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="text-center mb-6 ">
          <h1 className="text-black text-4xl font-extrabold mb-4 drop-shadow-sm">
            Urządzenia OBU do systemu e-TOLL – sprzedaż, montaż i konfiguracja
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Oferujemy nowoczesne urządzenia OBU w pełni zgodne z systemem
            e-TOLL. Zapewniamy profesjonalny montaż, konfigurację oraz obsługę
            posprzedażową. Idealne rozwiązanie dla firm transportowych, flot
            pojazdów i kierowców indywidualnych.
          </p>
        </section>

        {/** Zdjęcie pobierania danych z tachografu */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="relative w-full aspect-video">
            <Image
              src="/etoll_service.png"
              alt="zdjęcie serwisu tachografów"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* URZĄDZENIA */}
        <section>
          <h2 className="text-3xl text-gray-800 font-bold mb-8 text-center">
            Dostępne urządzenia OBU zgodne z e-TOLL
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {devices.map((device, i) => (
              <figure
                key={i}
                className="flex flex-col bg-gray-300 p-3 rounded-lg"
              >
                <figcaption className="text-gray-700 bg-white rounded-2xl p-2 font-medium text-center">
                  {device.title}
                </figcaption>

                <div className="relative pt-[56.25%] w-full mt-2">
                  <Image
                    src={device.img}
                    alt={device.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain rounded-md"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* OPIS ROZSZERZONY SEO */}
        <section className="mt-16 space-y-6 text-lg text-gray-800 leading-relaxed">
          <p>
            Nasze urządzenia OBU umożliwiają automatyczny i bezobsługowy pobór
            opłat na płatnych odcinkach dróg w Polsce. To pewne i stabilne
            rozwiązanie, które eliminuje konieczność korzystania z aplikacji
            telefonicznych i gwarantuje zgodność z wymaganiami systemu e-TOLL.
          </p>

          <p>
            Urządzenia są gotowe do pracy od razu po aktywacji i konfiguracji.
            Sprawdzają się zarówno w samochodach osobowych, jak i w pojazdach
            ciężarowych oraz flotach firmowych.
          </p>
        </section>

        {/* IKONY / KORZYŚCI */}
        <section className="mt-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <RadioTower className="text-red-500 w-15 h-15 flex-none" />
              <p className="text-gray-800 leading-relaxed text-lg">
                Automatyczny pobór opłat e-TOLL bez aplikacji mobilnej i bez
                konieczności wykonywania dodatkowych czynności.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="text-red-500 w-15 h-15 flex-none" />
              <p className="text-gray-800 leading-relaxed text-lg">
                Bezpieczny zakup, brak długoterminowych umów i ukrytych kar.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <HandHelping className="text-red-500 w-15 h-15 flex-none" />
              <p className="text-gray-800 leading-relaxed text-lg">
                Pełna pomoc przy konfiguracji, montażu i serwisie urządzeń OBU.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-14">
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Potrzebujesz urządzenia OBU do e-TOLL?
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-red-700 transition"
          >
            Skontaktuj się z nami
          </a>
        </section>

        {/* FAQ SEO */}
        <section className="mt-20">
          <h2 className="text-3xl text-gray-800 font-bold mb-8 text-center">
            Najczęstsze pytania dotyczące urządzeń OBU e-TOLL (FAQ)
          </h2>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <div>
              <h3 className="font-semibold text-xl">
                Czy urządzenie OBU działa od razu po zakupie?
              </h3>
              <p>
                Tak. Po aktywacji i konfiguracji OBU jest gotowe do pracy i
                automatycznego poboru opłat e-TOLL.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Czy OBU działa w każdym pojeździe?
              </h3>
              <p>
                Tak — można je stosować w samochodach osobowych, dostawczych i
                ciężarowych, również w dużych flotach.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Jakie są koszty użytkowania OBU?
              </h3>
              <p>
                Urządzenia nie wymagają podpisywania umowy terminowej. Płacisz
                tylko za samo urządzenie i usługę konfiguracji, jeśli jej
                potrzebujesz.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Czy OBU jest zgodne z systemem e-TOLL?
              </h3>
              <p>
                Tak, urządzenia są w pełni certyfikowane i spełniają wymagania
                Ministerstwa Finansów dotyczące poboru opłat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
