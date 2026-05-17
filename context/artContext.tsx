// context/artContext.tsx
"use client";
import { fetchArtworks } from "@/fetch/fetch";
import { createContext, useContext, useState, ReactNode } from "react";

interface Artwork {
  id: number;
  title: string;
  image?: string;
}

interface ArtContextType {
  artworks: Artwork[];
  isLoading: boolean;
  error: string | null;
  searchArt: (query: string) => Promise<void>;
}

const ArtContext = createContext<ArtContextType | undefined>(undefined);

export function ArtProvider({ children }: { children: ReactNode }) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchArt = async (query: string) => {
    setIsLoading(true);
    setError(null);
    try {
     const result = await fetchArtworks(query, 1)
     setArtworks(result) 
     
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ArtContext.Provider value={{ artworks, isLoading, error, searchArt }}>
      {children}
    </ArtContext.Provider>
  );
}

export function useArt() {
  const context = useContext(ArtContext);
  if (!context) throw new Error("useArt debe usarse dentro de ArtProvider");
  return context;
}