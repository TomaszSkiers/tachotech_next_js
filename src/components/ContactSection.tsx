import React from "react";
// Dodajemy FaFacebookF (lub FaFacebook, jeśli wolisz)
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";

const ContactSection: React.FC = () => {
  // Możesz zdefiniować adres URL Facebooka jako stałą
  const facebookUrl = "https://www.facebook.com/profile.php?id=61553860664338"; // Zmień na właściwy link

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-white to-gray-400 rounded-lg border-t-2 border-blue-500 shadow-md mt-5"
    >
      <div className="text-center mb-8">
        <h2
          id="contact-heading"
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          Skontaktuj się z nami
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Firma <strong>TACHO-TECH</strong> w Skrzeszewie zaprasza do kontaktu.
          Zadzwoń, napisz lub odwiedź nas osobiście — odpowiemy na wszystkie
          pytania i umówimy wizytę.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Dane kontaktowe */}
        <div className="flex flex-col justify-center">
          <div className="bg-gray-50 h-100 p-6 rounded-lg shadow-inner border border-gray-200 space-y-6">
            {/* Adres */}
            <div className="flex items-start space-x-4">
              <div
                className="p-2 bg-blue-600 rounded-md flex-shrink-0"
                aria-hidden="true"
              >
                <FaMapMarkerAlt className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Adres
                </h3>
                <address className="text-gray-600 not-italic">
                  <strong>TACHO-TECH</strong><br />
                  ul. Nowodworska 1a<br />
                  05-124 Skrzeszew
                </address>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-start space-x-4">
              <div
                className="p-2 bg-blue-600 rounded-md flex-shrink-0"
                aria-hidden="true"
              >
                <FaPhone className="h-6 w-6"/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Telefon
                </h3>
                <a
                  href="tel:+48518183044"
                  title="Zadzwoń do TACHO-TECH"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +48 518 183 044
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start space-x-4">
              <div
                className="p-2 bg-blue-600 rounded-md flex-shrink-0"
                aria-hidden="true"
              >
                <FaEnvelope className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:tachotech.bartoszskiers@gmail.com"
                  title="Napisz do TACHO-TECH"
                  className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                >
                  tachotech.bartoszskiers@gmail.com
                </a>
              </div>
            </div>

            {/* Facebook - Nowy element */}
            <div className="flex items-start space-x-4">
              <div
                className="p-2 bg-blue-600 rounded-md flex-shrink-0"
                aria-hidden="true"
              >
                {/* Używamy FaFacebookF */}
                <FaFacebookF className="w-6 h-6"/> 
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Facebook
                </h3>
                <a
                  href={facebookUrl} // Używamy stałej z adresem URL
                  target="_blank" // Otwiera link w nowej karcie
                  rel="noopener noreferrer" // Dobre praktyki bezpieczeństwa dla target="_blank"
                  title="Odwiedź nas na Facebooku"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Odwiedź naszą stronę
                </a>
              </div>
            </div>
            {/* Koniec nowego elementu */}

          </div>
        </div>

        {/* Mapa Google */}
        <div className="w-full h-100 bg-gray-200 rounded-lg shadow-md overflow-hidden">
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
      </div>

      {/* Mikro dane JSON-LD dla SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TACHO-TECH",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Nowodworska 1a",
            "addressLocality": "Skrzeszew",
            "postalCode": "05-124",
            "addressCountry": "PL",
          },
          "telephone": "+48518183044",
          "email": "tachotech.bartoszskiers@gmail.com",
          "url": "https://twojastrona.pl",
          // Dodanie linku do mediów społecznościowych (jest opcjonalne w LocalBusiness)
          "sameAs": [
            facebookUrl
          ]
        })}
      </script>
    </section>
  );
};

export default ContactSection;