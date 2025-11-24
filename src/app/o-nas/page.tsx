// app/o-nas/page.tsx
import type { Metadata } from 'next'

// Opcjonalnie: Dodaj metadane (SEO) dla tej podstrony
export const metadata: Metadata = {
  title: 'O Nas | Moja Niesamowita Strona',
  description: 'Dowiedz się więcej o naszej misji i zespole.',
}

// Domyślny eksport to komponent strony
export default function ONasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-xl text-center">
        {/* Użycie Tailwind: */}
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          O Nas
        </h1>
        <p className="text-lg text-gray-700">
          Jesteśmy zespołem pasjonatów, który uwielbia budować
          niesamowite rzeczy przy użyciu Next.js, TypeScript i Tailwind!
        </p>
      </div>
    </main>
  )
}