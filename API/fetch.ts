export const getArt = async (criterio: string) => {
    
    
    const url = `https://api.artsearch.io/artworks?query=${criterio}&number=1`;
    const apiKey = 'e43f204920dc4a98ada473da8e42ff2f';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
}


