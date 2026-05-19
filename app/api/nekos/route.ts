export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");

  const response = await fetch(`https://nekos.best/api/v2/search?query=${query}&type=1&amount=5`);
  if (!response.ok) {
    return Response.json(
      { error: "Error fetching artworks" },
      { status: response.status }
    );
  }

  const data = await response.json();

  return Response.json(data);
}