// src/components/TopContactInfo.tsx (Zoptymalizowane)

export default function TopContactInfo() {
  const phoneNumber = "+48518183044";
  const displayPhone = "518 183 044";
  const address = "05-124 Skrzeszew ul. Nowodworska 1a";

  return (
    // 1. Kontener na CAŁĄ szerokość (pełne, niebieskie tło)
    <div className=" text-white w-full ">
      {/* 2. <address> wewnątrz, aby wyśrodkować i ograniczyć TREŚĆ (np. do 1280px) */}
      <address
        className="container mx-auto max-w-4xl flex flex-col justify-center items-center p-1 text-sm font-semibold font-goldman not-italic 
                   sm:flex-row sm:justify-end sm:items-center sm:text-right sm:text-base "
        role="region"
        aria-label="Informacje Kontaktowe Tacho-tech"
      >
        {/* Adres */}
        <span className="mb-0.5 sm:mb-0 sm:mr-6">{address}</span>

        {/* Telefon */}
        <span>
          <a
            href={`tel:${phoneNumber}`}
            className="hover:underline"
            aria-label={`Zadzwoń do Tacho-tech: ${displayPhone}`}
          >
            tel. {displayPhone}
          </a>
        </span>
      </address>
    </div>
  );
}
