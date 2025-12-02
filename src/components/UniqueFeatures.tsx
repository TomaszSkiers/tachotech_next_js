import React from "react";
import Encouragers from "./Encouragers";

const UniqueFeatures = () => {
  const features = [
    "szybko",
    "duży parking",
    "najlepsze ceny",
    "możesz wykręcić obowiązkową pauzę",
    "łatwy zjazd i wyjazd na drogę krajową 631",
    "na miejscu sklep spożywczo - przemysłowy",
    "zaplecze kuchenne darmowa kawa / herbata",
    "zniżka dla stałych klientów",
    "stacja kontroli pojazdów",
    "myjnia",
  ];

  return (
    <section
      id="unique-features"
      aria-labelledby="unique-features-heading"
      className="flex flex-col max-w-4xl mx-auto w-full pt-0.5 bg-gradient-to-b from-white to-gray-400 rounded-lg shadow-md mt-5 border-t-4 border-green-500"
    >
      <h2
        id="unique-features-heading"
        className="text-2xl font-bold text-center text-green-700 mb-4"
      >
        Co nas wyróżnia
      </h2>

      <ul className="list-inside space-y-2 text-gray-800 leading-relaxed">
        {features.map((feature, index) => (
          <Encouragers key={index} text={feature} />
        ))}
      </ul>
    </section>
  );
};

export default UniqueFeatures;
