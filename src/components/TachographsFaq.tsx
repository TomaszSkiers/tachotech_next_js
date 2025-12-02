export default function TahographsFaq() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-6 bg-gradient-to-b from-white to-gray-300 rounded-lg border-t-4 border-red-600 py-8 shadow-lg">
      <h2 className="text-3xl text-gray-800 font-bold mb-8 text-center">
        Najczęstsze pytania dotyczące tachografów cyfrowych (FAQ)
      </h2>

      <div className="space-y-8 text-gray-800 leading-relaxed">
        <div>
          <h3 className="font-semibold text-xl">
            Co ile trzeba wykonywać kalibrację tachografu cyfrowego?
          </h3>
          <p>
            Kalibrację tachografu cyfrowego wykonuje się co 2 lata oraz po
            każdej zmianie numeru rejestracyjnego, rozmiaru opon lub naprawach
            mogących wpłynąć na pomiar prędkości i przebiegu.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Kiedy tachograf cyfrowy wymaga legalizacji?
          </h3>
          <p>
            Legalizacja tachografu jest wymagana po montażu, wymianie
            urządzenia, uszkodzeniu plomb lub stwierdzeniu nieprawidłowych
            wskazań podczas kontroli.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Co to jest Smart Tachograph 2.0?
          </h3>
          <p>
            Smart Tacho 2.0 to tachograf drugiej generacji zgodny z Pakietem
            Mobilności. Automatycznie rejestruje przekroczenia granic, dane GNSS
            oraz umożliwia zdalne odczyty DSRC podczas kontroli.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Czy tachograf cyfrowy jest obowiązkowy w każdym pojeździe
            ciężarowym?
          </h3>
          <p>
            Tachograf cyfrowy jest obowiązkowy w pojazdach powyżej 3,5 t oraz
            autobusach. Od 2026 roku obejmie także pojazdy 2,5–3,5 t wykonujące
            transport międzynarodowy.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Co grozi za jazdę z niesprawnym lub nielegalizowanym tachografem?
          </h3>
          <p>
            Grożą wysokie kary finansowe, zatrzymanie dowodu rejestracyjnego
            oraz możliwość wyłączenia pojazdu z ruchu przez ITD.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Jakie manipulacje tachografem są zakazane?
          </h3>
          <p>
            Niedozwolone jest używanie magnesów, ingerencja w instalację oraz
            stosowanie urządzeń zakłócających pracę tachografu. Takie działania
            grożą bardzo wysokimi karami.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Jak długo tachograf cyfrowy zapisuje dane?
          </h3>
          <p>
            Tachograf zapisuje dane przez minimum 365 dni, a karta kierowcy
            przechowuje ostatnie 28 dni aktywności.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Czy po wymianie tachografu trzeba wykonywać nową legalizację?
          </h3>
          <p>
            Tak, każda wymiana tachografu wymaga pełnej legalizacji i ponownego
            plombowania przez uprawniony serwis.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            Ile trwa kalibracja tachografu cyfrowego?
          </h3>
          <p>
            Standardowa kalibracja trwa około 30–60 minut, zależnie od pojazdu i
            modelu tachografu.
          </p>
        </div>
      </div>
    </section>
  );
}
