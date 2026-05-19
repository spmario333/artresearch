// components/ArtsCards.tsx
"use client";
import { useSnd } from "@/context/secondContext";
import { NSimpleCard } from "./NSimpleCard";



export const NekoCards = () => {
  const { err, loading, data } = useSnd();

  if (loading) return <div className="p-4">Cargando obras...</div>;
  if (err) return <div className="p-4 text-red-500">Error: {err}</div>;
  if (!data.length) return <div className="p-4">No hay resultados. Realiza una búsqueda.</div>;

  return (
    <div className="grid grid-cols-3 bg-gray-50 gap-5 p-4">
      {data.map((d) => (
        <NSimpleCard key={d.url} {...d}/>
      ))}
    </div>
  );
};