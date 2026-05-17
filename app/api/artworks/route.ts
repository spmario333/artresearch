export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");
  const number = searchParams.get("number") || "5";

  const response = await fetch(
    `https://api.artsearch.io/artworks?query=${query}&number=${number}`,
    {
      headers: {
        "x-api-key": process.env.ART_API_KEY!,
      },
    }
  );

  if (!response.ok) {
    return Response.json(
      { error: "Error fetching artworks" },
      { status: response.status }
    );
  }

  const data = await response.json();

  return Response.json(data);
}