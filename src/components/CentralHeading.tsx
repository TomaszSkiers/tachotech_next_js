import React from "react";

// Interfejs dla propów komponentu, co czyni go bardziej elastycznym
interface CentralHeadingProps {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  // Opcjonalne propsy do rozszerzenia (np. opis)
}

const CentralHeading: React.FC<CentralHeadingProps> = ({
  titleLine1,
  titleLine2,
  titleLine3,
}) => {
  return (
    // Kontener wyśrodkowany, z ciemnym tłem pasującym do TopContactInfo
    <div
      className="p-8 text-center text-white mx-auto"
      
    >
      {/* H2: Kluczowy element SEO. Opisuje, co znajduje się poniżej.
        Użycie <br /> jest poprawne, ale w kontekście SEO najlepiej, 
        aby tekst był w jednej linii i opisywał frazę kluczową.
      */}
      <h2 className="text-3xl pb-3 font-goldman font-bold tracking-widest leading-snug">
        {/*
          Optymalizacja SEO:
          Cały nagłówek jest kluczową frazą: "Serwis Tachografów Skrzeszew".
          Dzielenie na linie jest tylko wizualne.
        */}
        <span className="sr-only">
          {titleLine1} {titleLine2} {titleLine3}
        </span>

        {/* Wizualna prezentacja (dzielenie na linie za pomocą <br />) */}
        <span aria-hidden="true">
          {titleLine1}
          <br />
          {titleLine2}
          <br />
          {titleLine3}
        </span>
      </h2>
    </div>
  );
};

export default CentralHeading;
