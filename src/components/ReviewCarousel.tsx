import React, { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import iwona from '../../public/Iwona.png';
import anna from '../../public/Anna.png';
import jan from '../../public/Jan.png';
import andrzej from '../../public/Andrzej.png';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  photo: import('next/image').StaticImageData;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Jan Kowalski (Serwis Techniczny)',
    rating: 5,
    text: 'Profesjonalne podejście i szybka obsługa. Kalibracja tachografu przebiegła bez problemów, a obsługa była bardzo pomocna. Zdecydowanie polecam!',
    photo: jan,
  },
  {
    id: 2,
    author: 'Andrzej Nowak (Logistyka)',
    rating: 5,
    text: 'Zawsze fachowo i terminowo. Używają tylko oryginalnego sprzętu, co daje mi pewność, że wszystko jest w 100% legalne. Polecam!',
    photo: andrzej,
  },
  {
    id: 3,
    author: 'Anna Zaborowska (Transport Ciężki)',
    rating: 4,
    text: 'Świetny serwis, ale musiałam chwilę poczekać w kolejce. Mimo to, jestem zadowolona z efektów i jakości usługi. Będę wracać.',
    photo: anna,
  },
  {
    id: 4,
    author: 'Iwona Rybka (Flota Pojazdów)',
    rating: 5,
    text: 'Szybka diagnostyka i naprawa. Widać, że znają się na swojej pracy. Tachograf działa jak nowy. Polecam wszystkim kierowcom ciężarówek.',
    photo: iwona,
  },
];

// Stała wysokość obliczona na podstawie najdłuższej opinii
const CAROUSEL_HEIGHT = 320;

const ReviewCarousel: React.FC = memo(() => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || currentReviewIndex === index) return;
    setIsAnimating(true);
    setCurrentReviewIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, currentReviewIndex]);

  // Automatyczna zmiana opinii z pauzą przy hover
  useEffect(() => {
    if (isPaused || isAnimating) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    
    return () => clearInterval(timer);
  }, [isPaused, isAnimating, handleNext]);

  const renderStars = useCallback((rating: number): React.ReactElement[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  }, []);

  const review = reviews[currentReviewIndex];

  return (
    <section 
      aria-labelledby="reviews-heading"
      className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-white to-gray-400 rounded-lg border-t-2 border-blue-500 shadow-md mt-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center mb-6">
        <h2 id="reviews-heading" className="text-2xl font-bold text-gray-800 mb-2">
          Co mówią o nas klienci?
        </h2>
      </div>

      {/* Kontener z FIXED wysokością - zapobiega podskakiwaniu strony */}
      <div 
        style={{ height: `${CAROUSEL_HEIGHT}px` }}
        className="relative transition-all duration-500 ease-in-out"
        role="region"
        aria-live="polite"
        aria-label={`Opinia ${currentReviewIndex + 1} z ${reviews.length}`}
      >
        <div className={`text-center transition-opacity duration-500 ${
          isAnimating ? 'opacity-70' : 'opacity-100'
        }`}>
          <div className="flex justify-center mb-4">
            <Image
              src={review.photo}
              alt={`Zdjęcie ${review.author}`}
              width={80}
              height={80}
              className="rounded-full object-cover border-4 border-blue-600 shadow-md"
              priority={currentReviewIndex === 0}
            />
          </div>
          <div className="flex justify-center mb-2" aria-hidden="true">
            {renderStars(review.rating)}
          </div>
          <p className="font-semibold text-gray-800 mb-2">{review.author}</p>
          <div className="text-gray-700 italic px-4">
            &quot;{review.text}&quot;
          </div>
        </div>
      </div>

      {/* Nawigacja */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
          aria-label="Poprzednia opinia"
          disabled={isAnimating}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentReviewIndex === index ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
              } ${isAnimating ? 'pointer-events-none' : ''}`}
              aria-label={`Przejdź do opinii ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
          aria-label="Następna opinia"
          disabled={isAnimating}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
});

ReviewCarousel.displayName = 'ReviewCarousel';

export default ReviewCarousel;