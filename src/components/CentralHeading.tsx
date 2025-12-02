import React from "react";

const CentralHeading = ({}) => {
  return (
    <div className="p-8 text-center text-white mx-auto">
      <h2 className="text-3xl pb-3 font-goldman font-bold tracking-widest leading-snug">
        {/* SEO: Screen readery poradzą sobie z zagnieżdżonymi spanami wewnątrz sr-only.
           Tekst zostanie odczytany poprawnie.
        */}
        <span className="sr-only">
          e-toll tachografy
        </span>

        {/* Wizualna prezentacja */}
        <span aria-hidden="true">
          {/* <span className="text-red-400">e</span>-toll
          <br />
          tachografy
          <br /> */}
          serwis Skrzeszew
        </span>
      </h2>
    </div>
  );
};

export default CentralHeading;
