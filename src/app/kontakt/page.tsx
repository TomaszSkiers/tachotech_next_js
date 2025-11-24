// components/ContactSection.js
'use client';

import React from 'react';
// Importujemy ikony, aby komponent był "fajny"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// 1. Definiujemy dane kontaktowe w jednym miejscu
const contactInfo = {
  address: "05-124 Skrzeszew, ul Nowodworska 1a",
  phone: "+48 518 183 044",
  email: `tachotech.bartoszskiers@gmail.com.pl`
};

interface locationData {
  src: string,
  description: string,
  title: string
}
// 2. Definiujemy dane lokalizacji (mapy i opisy)
const locations = [
  {
    src: "https://www.google.com/maps/embed?pb=!4v1762957631997!6m8!1m7!1spX9HgeGpfSBRWzvJ_niIeQ!2m2!1d52.45340452022514!2d20.91624064352408!3f178.41314293614448!4f0.05638656418402377!5f0.7820865974627469", // Wklej właściwy URL
    description: "Dobry zjazd z drogi krajowej (Wjazd 1)",
    title: "Street View - Wjazd 1"
  },
  {
    src: "https://www.google.com/maps/embed?pb=!4v1762958532189!6m8!1m7!1sw5XqjkapX-Cj793ZHaHOKA!2m2!1d52.45338380992747!2d20.91698869331844!3f239.86028746504448!4f-11.746213283919005!5f0.7820865974627469", // Wklej właściwy URL
    description: "Dobry zjazd z drogi krajowej (Wjazd 2)",
    title: "Street View - Wjazd 2"
  },
  {
    src: "https://www.google.com/maps/embed?pb=!4v1762958772324!6m8!1m7!1sw5XqjkapX-Cj793ZHaHOKA!2m2!1d52.45338380992747!2d20.91698869331844!3f4.791816971644234!4f-8.238975369368603!5f0.4000000000000002", // Wklej właściwy URL
    description: "W sąsiedztwie stacja kontroli pojazdów i myjnia.",
    title: "Street View - Okolica"
  }
];

// 3. Tworzymy mały sub-komponent dla pojedynczej mapy (dla czystości kodu)
const LocationMap: React.FC<locationData> = ({ src, description, title }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-2 border-red-600">
    {/* Kontener mapy o stałej wysokości */}
    <div className="w-full h-80 sm:h-120"> 
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      ></iframe>
    </div>
    {/* Opis pod mapą */}
    <div className="p-6 bg-gray-50">
      <p className="text-gray-700 font-medium text-center">{description}</p>
    </div>
  </div>
);


// 4. Główny komponent kontaktowy
const ContactSection = () => {
  return (
    <section className=" max-w-4xl mx-auto rounded-2xl ">
      <div className="max-w-4xl mx-auto">
        
        

        {/* --- Karta z Danymi Kontaktowymi --- */}
        <div className="max-w-4xl mx-auto bg-white border-t-2 border-red-600 rounded-lg shadow-xl p-8 mb-5">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center tracking-wide">Kontakt</h3>
          <div className="space-y-6">

            {/* Adres */}
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-600 rounded-md h-12 w-12 flex items-center justify-center text-white">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Nasz Adres</h4>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-600 rounded-md h-12 w-12 flex items-center justify-center text-white">
                <FaPhone className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Telefon</h4>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-blue-700 hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-600 rounded-md h-12 w-12 flex items-center justify-center text-white">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div className="ml-4 min-w-0">
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-700 hover:underline break-words">
                  {contactInfo.email}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Mapa Google */}
        <div className="w-full h-80 sm:h-120 bg-gray-200 rounded-lg shadow-md overflow-hidden border-t-2 border-red-600 mb-5">
          <iframe
            title="Mapa dojazdu do TACHO-TECH w Skrzeszewie przy ulicy Nowodworskiej 1a"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.5619755217404!2d20.913878677596916!3d52.453053941182695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb916f9dab6ed%3A0x88f23f549ef3d759!2sTACHO-TECH!5e1!3m2!1spl!2spl!4v1758625774431!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa lokalizacji firmy TACHO-TECH w Skrzeszewie"
          />
        </div>

        {/* --- Sekcja Map "Jak dojechać?" --- */}
        

        {/* Siatka (grid) na mapy - responsywna */}
        <div className="flex flex-col gap-5">
          {locations.map((loc, index) => (
            <LocationMap
              key={index}
              src={loc.src}
              description={loc.description}
              title={loc.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;



