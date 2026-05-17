// components/Search.tsx
"use client";
import { useState } from "react";
import { useArt } from "@/context/artContext";

export const Search = () => {
  const [query, setQuery] = useState("");
  const { searchArt } = useArt();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) searchArt(query);
  };

  return (
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
  );
};