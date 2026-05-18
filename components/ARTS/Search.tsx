// components/Search.tsx
"use client";
import { useState } from "react";
import { useArt } from "@/context/artContext";
import Link from "next/link";

export const Search = () => {
  const [query, setQuery] = useState("");
  const { searchArt } = useArt();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) searchArt(query);
  };

  return (
    <div> 
      <div className="flex px-4 py-2">
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded w-1/12 text-center"
          href={'/'}>Inicio</Link>
        <h1 className="text-2xl text-center pt-5 w-full">
          Bienvenido a las búsquedas de Obras de Artes
        </h1>

      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 p-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar obra..."
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </form>
    </div>
  );
};