// components/ArtsCards.tsx
"use client";
import { useArt } from "@/context/artContext";
import { SimpleCard } from "./SimpleCard";

export const ArtsCards = () => {
  const { artworks, isLoading, error } = useArt();

  if (isLoading) return <div className="p-4">Cargando obras...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!artworks.length) return <div className="p-4">No hay resultados. Realiza una búsqueda.</div>;

  return (
    <div className="grid grid-cols-3 bg-gray-50 gap-5 p-4">
      {artworks.map((artwork) => (
        <SimpleCard key={artwork.id} {...artwork} />
      ))}
    </div>
  );
};