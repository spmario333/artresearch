export async function fetchArtworks(
  query: string,
  number: number = 15
) {
  const response = await fetch(
    `/api/artworks?query=${query}&number=${number}`
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();

  return data.artworks ;
}