
export async function fetchArtworks(query: string, number: number = 5) {
    const url = `https://api.artsearch.io/artworks?query=${query}&number${number}`;
    const apiKey = "e43f204920dc4a98ada473da8e42ff2f";
const response = await fetch(url, {
    method: 'GET',
    headers:{
        'x-api-key':apiKey
    }
})
if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
}

const data = await response.json()
console.log(data)
return data.artworks || []
}